import {
  createEpicMiddleware, combineEpics, ofType,
} from 'redux-observable';
import { map } from 'rxjs/operators';

export const actionTypes = {
  // SET_PATIENT_DATA string is implicitly derived from:
  //     patientDataSlice.name (value) + patientDataSlice.reducers.setPatientData (key)
  SET_PATIENT_DATA: 'patientData/setPatientData',
  CLEAR_PATIENT_DATA: 'patientData/clearPatientData',
  FLATTEN_RESOURCES: 'FLATTEN_RESOURCES',
  GROUP_BY_TYPE: 'GROUP_BY_TYPE',
  ADD_FILTER_OPEN_FLAG: 'ADD_FILTER_OPEN_FLAG',
  RESOURCE_TYPE_FILTERS: 'RESOURCE_TYPE_FILTERS',
  TOGGLE_RESOURCE_TYPE_FILTERS: 'TOGGLE_RESOURCE_TYPE_FILTERS'
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

const resourceTypeFilter = (action$, state$) => action$.pipe(
  ofType(actionTypes.GROUP_BY_TYPE),
  map(() => {
    const resourceTypes = Object.keys(state$.value.resourceIdsGroupedByType)
    return ({
      type: actionTypes.RESOURCE_TYPE_FILTERS,
      payload: resourceTypes
    })
  }),
);

export const toggleResourceTypeFilter = (resourceType) => ({
  type: actionTypes.TOGGLE_RESOURCE_TYPE_FILTERS,
  payload: resourceType
})

export const rootEpic = combineEpics(
  flattenResources,
  groupByType,
  resourceTypeFilter,
);

export default createEpicMiddleware({
  // dependencies: { ajax: rxAjax },
});
