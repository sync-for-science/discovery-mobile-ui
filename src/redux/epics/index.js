import { from, of } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import {
  catchError, map, concatMap, switchMap, takeUntil, repeat,
} from 'rxjs/operators';
import {
  path, pathEq, flatten,
} from 'ramda';

import { actionTypes } from '../action-types';
import { MOCK_AUTH, MOCK_BUNDLE } from '../../components/Login/SkipLoginButton';
import flattenResources from './process-resources';

const handleError = (error, message, type) => {
  console.error(`${message}: `, error); // eslint-disable-line no-console
  return of({
    type: type ?? 'ERROR',
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
      map((result) => ({
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
  map(({ payload }) => {
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

const getServiceProvider = (entry) => path(['serviceProvider'], entry);

const extractReferences = ({ context, resources }) => {
  const urnContextMap = Object.values(resources)
    .reduce((acc, resource) => {
      const fhirReference = getServiceProvider(resource);
      if (fhirReference) {
        const referenceUrn = fhirReference?.reference;
        acc[referenceUrn] = {
          referenceUrn,
          context: context.get(resource.id),
          referenceType: 'serviceProvider', // TODO: memoize by referenceType
          parentType: resource.resourceType,
        };
      }
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
    map((result) => ({
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
      concatMap(({
        referenceUrn, context, // referenceType, parentType,
      }) => from(fhirClient.resolve({ reference: referenceUrn, context }))),
    )
    .pipe(
      map((result) => ({
        type: actionTypes.FHIR_FETCH_SUCCESS,
        payload: result,
      })),
      catchError((error) => handleError(error, 'Error in resolveReferences references$.pipe')),
    )),
  takeUntil(action$.pipe(ofType(actionTypes.CLEAR_PATIENT_DATA))),
  repeat(),
  catchError((error) => handleError(error, 'Error in resolveReferences concatMap')),
);

const rootEpic = combineEpics(
  initializeFhirClient,
  flattenResponsePayload,
  requestNextItems,
  resolveReferences,
);

export default rootEpic;
