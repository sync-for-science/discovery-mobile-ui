import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  createEpicMiddleware, combineEpics, ofType,
} from 'redux-observable';
import {
  catchError, map, concatMap,
} from 'rxjs/operators';
import { pathEq, flatten } from 'ramda';

import { actionTypes } from '../action-types';

const flattenResources = (action$) => action$.pipe(
  ofType(actionTypes.SET_PATIENT_DATA),
  map(({ payload }) => ({
    type: actionTypes.FHIR_FETCH_SUCCESS,
    payload,
  })),
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

const handleError = (error, message) => {
  console.error(`${message}: `, error); // eslint-disable-line no-console
  return of({
    type: 'ERROR',
    error: true,
    payload: { message, error },
  });
};

const requestNextItems = (action$, state$, { rxAjax }) => action$.pipe(
  ofType(actionTypes.FHIR_FETCH_SUCCESS),
  // delay(1000), // e.g.: for debugging
  concatMap(({ payload }) => {
    const accumulatedLinks = extractNextUrls(payload);
    const nextRequests$ = from(accumulatedLinks).pipe(
      concatMap((url) => rxAjax.getJSON(url)),
    );
    return nextRequests$.pipe(
      map((result) => ({
        type: actionTypes.FHIR_FETCH_SUCCESS,
        payload: result,
      })),
      catchError((error) => handleError(error, 'Error in requestNextItems nextRequests$.pipe')),
    );
  }),
  catchError((error) => handleError(error, 'Error in requestNextItems concatMap')),
);

export const rootEpic = combineEpics(
  flattenResources,
  groupByType,
  requestNextItems,
);

export default createEpicMiddleware({
  dependencies: { rxAjax: ajax },
});
