import {
  createEpicMiddleware, combineEpics, ofType,
} from 'redux-observable';
import { map } from 'rxjs/operators';
import { processBundle } from '../resources/fhirReader';

export const actionTypes = {
  // SET_PATIENT_DATA string is implicitly derived from:
  //     patientDataSlice.name (value) + patientDataSlice.reducers.setPatientData (key)
  SET_PATIENT_DATA: 'patientData/setPatientData',
  CLEAR_PATIENT_DATA: 'patientData/clearPatientData',
  FLATTEN_RESOURCES: 'FLATTEN_RESOURCES',
  GROUP_BY_TYPE: 'GROUP_BY_TYPE',
};

const preloadedResources = {};

export const flattenedResourcesReducer = (state = preloadedResources, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadedResources;
    }
    case actionTypes.FLATTEN_RESOURCES: {
      const newState = { ...state }; // detect mutation
      processBundle(newState, action.payload, 0);
      return newState;
    }
    default:
      return state;
  }
};

const preloadedResourceIdsGroupedByType = {};

export const resourceTypesReducer = (state = preloadedResourceIdsGroupedByType, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PATIENT_DATA: {
      return preloadedResourceIdsGroupedByType;
    }
    case actionTypes.GROUP_BY_TYPE: {
      const { payload } = action;
      return Object.entries(payload).reduce((acc, [id, resource]) => {
        let { resourceType } = resource;
        if (resourceType === 'Observation') {
          const { code } = resource.category[0].coding[0];
          switch (code) {
            case 'laboratory':
              resourceType = 'laboratory';
              break;
            case 'vital-signs':
              resourceType = 'vital-signs';
              break;
            default: {
              console.warn(`Unsupported code type for ${id}: `, code); // eslint-disable-line no-console
              break;
            }
          }
        }
        if (!acc[resourceType]) {
          // acc[resourceType] = []; // Arrays are serialized in DevTools, but not Sets
          acc[resourceType] = new Set();
        }
        if (acc[resourceType].has(resource.id)) {
          console.warn(`${resourceType} already contains ${id}`); // eslint-disable-line no-console
        } else {
          acc[resourceType].add(resource.id);
        }
        return acc;
      }, {});
    }
    default:
      return state;
  }
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

export const rootEpic = combineEpics(
  flattenResources,
  groupByType,
);

export default createEpicMiddleware({
  // dependencies: { ajax: rxAjax },
});
