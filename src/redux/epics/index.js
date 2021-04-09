import { from, of } from 'rxjs';
import {
  createEpicMiddleware, combineEpics, ofType,
} from 'redux-observable';
import {
  catchError, map, concatMap, switchMap, takeUntil, repeat,
} from 'rxjs/operators';
import {
  path, pathEq, flatten,
} from 'ramda';

import { actionTypes } from '../action-types';
import FhirClient from '../middleware/fhir-client';
import { MOCK_AUTH } from '../../components/Login/SkipLoginButton';
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
  // delay(2000), // e.g.: for debugging
  switchMap(({ payload }) => {
    const { accessToken, additionalParameters: { patient: patientId } } = payload.authResult;

    // For "Skip Login", an instance is needed to resolve mock-data contained resources:
    fhirClient.initialize(payload.baseUrl, accessToken);

    if (payload === MOCK_AUTH) {
      return Promise.resolve({
        type: 'SET_MOCK_PATIENT_DATA', // must emit an action or stream of actions
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
    const flattened = flattenResources(payload);
    return ({
      type: actionTypes.GROUP_BY_TYPE,
      payload: flattened,
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

const extractReferences = (() => {
  const getServiceProvider = (entry) => path(['resource', 'serviceProvider'], entry);
  const dedupeReferences = (entry) => (entry || [])
    .map(getServiceProvider)
    .reduce((acc, serviceProvider) => {
      if (serviceProvider?.reference) {
        acc[serviceProvider.reference] = serviceProvider;
      }
      return acc;
    }, {});

  return ({ entry }, depth = 0) => {
    let urns = Object.values(dedupeReferences(entry));
    if (entry) {
      if (depth < 2) {
        urns = urns.concat(entry.map(({ resource }) => extractReferences(resource, depth + 1)));
      } else {
        console.error('extractReferences depth: ', depth, entry); // eslint-disable-line no-console
      }
    }
    return flatten(urns).filter((urn) => !!urn);
  };
})();

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

const requestReferences = (action$, state$, { fhirClient }) => action$.pipe(
  ofType(actionTypes.FHIR_FETCH_SUCCESS),
  // delay(1000), // e.g.: for debugging
  concatMap(({ payload }) => from(extractReferences(payload)).pipe(
    concatMap((ref) => from(fhirClient.resolve({ reference: ref.reference, context: payload }))),
  ).pipe(
    map((result) => ({
      type: actionTypes.FHIR_FETCH_SUCCESS,
      payload: result,
    })),
    catchError((error) => handleError(error, 'Error in requestReferences references$.pipe')),
  )),
  takeUntil(action$.pipe(ofType(actionTypes.CLEAR_PATIENT_DATA))),
  repeat(),
  catchError((error) => handleError(error, 'Error in requestReferences concatMap')),
);

export const rootEpic = combineEpics(
  initializeFhirClient,
  flattenResponsePayload,
  requestNextItems,
  requestReferences,
);

export default createEpicMiddleware({
  dependencies: {
    fhirClient: new FhirClient(),
  },
});
