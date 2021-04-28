import { from, of } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import {
  catchError, map as rxMap, concatMap, mergeMap, switchMap, takeUntil, repeat,
} from 'rxjs/operators';
import {
  compose, map, filter, propOr, hasPath, path, pathEq, flatten,
} from 'ramda';

import { actionTypes } from '../action-types';
import { MOCK_AUTH, MOCK_BUNDLE } from '../../components/Login/SkipLoginButton';
import flattenResources from './process-resources';

const handleError = (error, message, type) => {
  console.error(`${message}: `, error); // eslint-disable-line no-console
  return of({
    type: type ?? actionTypes.ERROR,
    error: true,
    payload: { message, error },
  });
};

const initializeFhirClient = (action$, state$, { fhirClient }) => action$.pipe(
  ofType(actionTypes.SET_AUTH),
  // delay(5000), // e.g.: for debugging -- import delay from rxjs/operators
  switchMap(({ payload }) => {
    const { accessToken, additionalParameters: { patient: patientId } } = payload.authResult;
    // For "Skip Login", an instance is needed to resolve mock-data contained resources:
    fhirClient.initialize(payload.baseUrl, accessToken);

    if (payload === MOCK_AUTH) {
      return Promise.resolve({
        type: actionTypes.FHIR_FETCH_SUCCESS,
        payload: MOCK_BUNDLE,
      });
    }

    return from(fhirClient.queryPatient(patientId)).pipe(
      rxMap((result) => ({
        type: actionTypes.FHIR_FETCH_SUCCESS,
        payload: result,
      })),
      catchError((error) => handleError(error, 'from(fhirClient.queryPatient(patientId)).pipe', actionTypes.FHIR_FETCH_ERROR)),
    );
  }),
  catchError((error) => handleError(error, 'Error in initializeFhirClient switchMap')),
);

const flattenResponsePayload = (action$) => action$.pipe(
  ofType(actionTypes.FHIR_FETCH_SUCCESS),
  rxMap(({ payload }) => {
    const context = new Map();
    const resources = {};
    flattenResources({ context, resources }, payload);
    return ({
      type: actionTypes.RESOURCE_BATCH,
      payload: { context, resources },
    });
  }),
);

const extractNextUrls = (() => {
  const hasNextLink = pathEq(['relation'], 'next');
  const extractNextUrlFromLink = (link) => link?.find(hasNextLink)?.url;

  return ({ link, entry }, depth = 0) => {
    let urls = [extractNextUrlFromLink(link)];
    if (entry) {
      if (depth < 2) {
        urls = urls.concat(entry.map(({ resource }) => extractNextUrls(resource, depth + 1)));
      } else {
        console.error('extractReferences depth: ', depth, entry); // eslint-disable-line no-console
      }
    }
    return flatten(urls).filter((url) => !!url);
  };
})();

export const referenceMap = {
  // each key is a "type" (but not the referenced _resource_ type, eg: "Practitioner")
  // each value operates on a FHIR resource, and returns an Array of reference Objects
  serviceProvider: compose(
    (result) => (result ? [result] : []),
    path(['serviceProvider']),
  ),
  requester: compose(
    (result) => (result ? [result] : []),
    path(['requester']), // may or may not be practitioner?
  ),
  participant: compose(
    map(path(['individual'])), // may or may not be practitioner?
    filter(hasPath(['individual', 'reference'])),
    propOr([], 'participant'),
  ),
};

const extractReferences = ({ context, resources }) => {
  const urnContextMap = Object.values(resources)
    .reduce((acc, resource) => {
      Object.entries(referenceMap).forEach(([referenceType, getRefs]) => {
        const fhirReferences = getRefs(resource);
        fhirReferences.forEach((ref) => {
          const referenceUrn = ref.reference;
          acc[referenceUrn] = {
            referenceUrn,
            context: context.get(resource.id),
            referenceType, // TODO: memoize by referenceType
            parentType: resource.resourceType,
          };
        });
      });
      return acc;
    }, {});

  return Object.values(urnContextMap);
};

const requestNextItems = (action$, state$, { fhirClient }) => action$.pipe(
  ofType(actionTypes.FHIR_FETCH_SUCCESS),
  // delay(1000), // e.g.: for debugging
  concatMap(({ payload }) => from(extractNextUrls(payload)).pipe(
    concatMap((url) => fhirClient.request(url)),
  ).pipe(
    rxMap((result) => ({
      type: actionTypes.FHIR_FETCH_SUCCESS,
      payload: result,
    })),
    catchError((error) => handleError(error, 'Error in requestNextItems nextRequests$.pipe')),
  )),
  takeUntil(action$.pipe(ofType(actionTypes.CLEAR_PATIENT_DATA))),
  repeat(),
  catchError((error) => handleError(error, 'Error in requestNextItems concatMap')),
);

const resolveReferences = (action$, state$, { fhirClient }) => action$.pipe(
  ofType(actionTypes.RESOURCE_BATCH),
  // delay(1000), // e.g.: for debugging
  concatMap(({ payload }) => from(extractReferences(payload))
    .pipe(
      mergeMap(({
        referenceUrn, context, // referenceType, parentType,
      }) => from(fhirClient.resolve({ reference: referenceUrn, context })).pipe(
        // tap(() => console.log('Silent success referenceUrn', referenceUrn)),
        rxMap((result) => ({
          type: actionTypes.FHIR_FETCH_SUCCESS,
          payload: result,
        })),
        catchError((error) => handleError(error, `Error in resolveReferences fhirClient.resolve urn:\n ${referenceUrn}`)),
      )),
    )),
  takeUntil(action$.pipe(ofType(actionTypes.CLEAR_PATIENT_DATA))),
  repeat(),
  catchError((error) => handleError(error, 'Error in resolveReferences')),
);

const rootEpic = combineEpics(
  initializeFhirClient,
  flattenResponsePayload,
  requestNextItems,
  resolveReferences,
);

export default rootEpic;
