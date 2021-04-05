import { from, of } from 'rxjs';
import {
  createEpicMiddleware, combineEpics, ofType,
} from 'redux-observable';
import {
  catchError, map, concatMap, switchMap, takeUntil, repeat,
} from 'rxjs/operators';
import { pathEq, flatten } from 'ramda';

import { actionTypes } from '../action-types';
import FhirClient from '../middleware/fhir-client';
import { MOCK_AUTH } from '../../components/Login/SkipLoginButton';

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

    if (payload === MOCK_AUTH) {
      return Promise.resolve({
        type: 'SET_MOCK_PATIENT_DATA', // must emit an action or stream of actions
      });
    }

    fhirClient.initialize(payload.baseUrl, accessToken);

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

const groupByType = (action$, state$) => action$.pipe(
  ofType(actionTypes.FHIR_FETCH_SUCCESS),
  map(() => {
    const { resources } = state$.value;
    return ({
      type: actionTypes.GROUP_BY_TYPE,
      payload: resources,
    });
  }),
);

const extractNextUrls = (() => {
  const hasNextLink = pathEq(['relation'], 'next');
  const extractNextUrlFromLink = (link) => link?.find(hasNextLink)?.url;

  return ({ link, entry }, depth = 0) => {
    let urls = [extractNextUrlFromLink(link)];
    if (entry && depth < 4) {
      urls = urls.concat(entry.map(({ resource }) => extractNextUrls(resource, depth + 1)));
    }
    return flatten(urls).filter((url) => !!url);
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

export const rootEpic = combineEpics(
  initializeFhirClient,
  groupByType,
  requestNextItems,
);

export default createEpicMiddleware({
  dependencies: {
    fhirClient: new FhirClient(),
  },
});
