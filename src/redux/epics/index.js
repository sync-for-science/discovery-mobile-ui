import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  createEpicMiddleware, combineEpics, ofType,
} from 'redux-observable';
import {
  catchError, map, concatMap,
} from 'rxjs/operators';
import { pathEq, flatten } from 'ramda';

export const actionTypes = {
  // SET_PATIENT_DATA string is implicitly derived from:
  //     patientDataSlice.name (value) + patientDataSlice.reducers.setPatientData (key)
  SET_PATIENT_DATA: 'patientData/setPatientData',
  CLEAR_PATIENT_DATA: 'patientData/clearPatientData',
  FLATTEN_RESOURCES: 'FLATTEN_RESOURCES',
  REQUEST_NEXT_ITEMS: 'REQUEST_NEXT_ITEMS',
  GROUP_BY_TYPE: 'GROUP_BY_TYPE',
  ADD_FILTER_OPEN_FLAG: 'ADD_FILTER_OPEN_FLAG',
  TOGGLE_RESOURCE_TYPE_FILTERS: 'TOGGLE_RESOURCE_TYPE_FILTERS',
  SELECT_RESOURCE_TYPE: 'SELECT_RESOURCE_TYPE',
  CREATE_RESOURCE_TYPE_SELECTION: 'CREATE_RESOURCE_TYPE_SELECTION',
  UPDATE_DATE_RANGE_FILTER: 'UPDATE_DATE_RANGE_FILTER',
  ADD_RESOURCE_TO_COLLECTION: 'ADD_RESOURCE_TO_COLLECTION',
  REMOVE_RESOURCE_FROM_COLLECTION: 'REMOVE_RESOURCE_FROM_COLLECTION',
  CREATE_DEFAULT_COLLECTIONS: 'CREATE_DEFAULT_COLLECTIONS',
  SELECT_DEFAULT_COLLECTION: 'SELECT_DEFAULT_COLLECTION',
  UPDATE_MARKED_RESOURCES: 'UPDATE_MARKED_RESOURCES',
};

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

// dont care about GROUP_BY_TYPE but not sure how to fire off
// CREATE_RESOURCE_TYPE_SELECTION without using ofType
const createSelectedResourceType = (action$) => action$.pipe(
  ofType(actionTypes.GROUP_BY_TYPE),
  map(() => ({
    type: actionTypes.CREATE_RESOURCE_TYPE_SELECTION,
  })),
);

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

// dont care about GROUP_BY_TYPE but not sure how to fire off
// CREATE_DEFAULT_COLLECTIONS without using ofType
const createDefaultCollections = (action$) => action$.pipe(
  ofType(actionTypes.GROUP_BY_TYPE),
  map(() => ({
    type: actionTypes.CREATE_DEFAULT_COLLECTIONS,
  })),
);

const selectDefaultCollection = (action$, state$) => action$.pipe(
  ofType(actionTypes.CREATE_DEFAULT_COLLECTIONS),
  map(() => {
    const { value: { collections } } = state$;
    const collectionId = Object.keys(collections)[0];
    return ({
      type: actionTypes.SELECT_DEFAULT_COLLECTION,
      payload: collectionId,
    });
  }),
);

export const rootEpic = combineEpics(
  flattenResources,
  groupByType,
  requestNextItems,
  createSelectedResourceType,
  createDefaultCollections,
  selectDefaultCollection,
);

export default createEpicMiddleware({
  dependencies: { rxAjax: ajax },
});
