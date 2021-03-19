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

export { actionTypes } from '../action-types';

const flattenResources = (action$) => action$.pipe(
  ofType(actionTypes.SET_PATIENT_DATA),
  map(({ payload }) => ({
    type: actionTypes.FLATTEN_RESOURCES,
    payload,
  })),
);

const groupByType = (action$, state$) => action$.pipe(
  ofType(actionTypes.FLATTEN_RESOURCES),
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
  ofType(actionTypes.FLATTEN_RESOURCES),
  // delay(1000), // e.g.: for debugging
  concatMap(({ payload }) => {
    const accumulatedLinks = extractNextUrls(payload);
    const nextRequests$ = from(accumulatedLinks).pipe(
      concatMap((url) => rxAjax.getJSON(url)),
    );
    return nextRequests$.pipe(
      map((result) => ({
        type: actionTypes.FLATTEN_RESOURCES,
        payload: result,
      })),
      catchError((error) => handleError(error, 'Error in requestNextItems nextRequests$.pipe')),
    );
  }),
  catchError((error) => handleError(error, 'Error in requestNextItems concatMap')),
);

export const toggleResourceTypeFilter = (resourceType) => ({
  type: actionTypes.TOGGLE_RESOURCE_TYPE_FILTERS,
  payload: resourceType,
});

export const selectResourceType = (resourceType) => ({
  type: actionTypes.SELECT_RESOURCE_TYPE,
  payload: resourceType,
});

export const addResourceToCollection = (collectionId, resourceIds) => ({
  type: actionTypes.ADD_RESOURCE_TO_COLLECTION,
  payload: { collectionId, resourceIds },
});

export const removeResourceFromCollection = (collectionId, resourceIds) => ({
  type: actionTypes.REMOVE_RESOURCE_FROM_COLLECTION,
  payload: { collectionId, resourceIds },
});

export const rootEpic = combineEpics(
  flattenResources,
  groupByType,
  requestNextItems,
);

export default createEpicMiddleware({
  dependencies: { rxAjax: ajax },
});
