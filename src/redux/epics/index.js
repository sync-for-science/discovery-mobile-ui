import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  createEpicMiddleware, combineEpics, ofType,
} from 'redux-observable';
import {
  catchError, map, concatMap,
} from 'rxjs/operators';
import { pathEq } from 'ramda';

export const actionTypes = {
  // SET_PATIENT_DATA string is implicitly derived from:
  //     patientDataSlice.name (value) + patientDataSlice.reducers.setPatientData (key)
  SET_PATIENT_DATA: 'patientData/setPatientData',
  CLEAR_PATIENT_DATA: 'patientData/clearPatientData',
  FLATTEN_RESOURCES: 'FLATTEN_RESOURCES',
  REQUEST_NEXT_ITEMS: 'REQUEST_NEXT_ITEMS',
  GROUP_BY_TYPE: 'GROUP_BY_TYPE',
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

const extractLinksFromBundle = (resourceBundle) => {
  if (resourceBundle.resourceType === 'Bundle') {
    const accumulatedLinks = [];
    const hasNextLink = pathEq(['relation'], 'next');

    const topLinkObject = resourceBundle?.link?.find(hasNextLink);
    if (topLinkObject?.url) {
      accumulatedLinks.push(topLinkObject.url);
    }

    return resourceBundle.entry.reduce((acc, item) => {
      const nextLinkObject = item?.resource?.link?.find(hasNextLink);
      if (nextLinkObject) {
        acc.push(nextLinkObject.url);
      }
      return acc;
    }, accumulatedLinks);
  }
  return [];
};

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
  // delay(1000),
  concatMap(({ payload }) => {
    const accumulatedLinks = extractLinksFromBundle(payload);
    // console.info('accumulatedLinks: ', JSON.stringify(accumulatedLinks));
    const nextRequests$ = from(accumulatedLinks).pipe(
      concatMap((url) => rxAjax.getJSON(url)),
    );
    return nextRequests$.pipe(
      map((result) => ({
        // type: actionTypes.FLATTEN_RESOURCES,
        type: actionTypes.SET_PATIENT_DATA,
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
