import {
  createEpicMiddleware, combineEpics, ofType,
} from 'redux-observable';
import { map } from 'rxjs/operators';
import { processBundle } from '../resources/fhirReader';

export const actionTypes = {
  // SET_PATIENT_DATA string is implicitly derived from:
  //     patientDataSlice.name (value) + patientDataSlice.reducers.setPatientData (key)
  SET_PATIENT_DATA: 'patientData/setPatientData',
  FLATTEN_RESOURCES: 'FLATTEN_RESOURCES',
};

const preloadedResources = {};

export const flattenedResourcesReducer = (state = preloadedResources, action) => {
  console.info('flattenedResourcesReducer, action.type: ', action.type);
  switch (action.type) {
    // case actionTypes.SET_PATIENT_DATA:
    //   console.info('flattenedResourcesReducer, action: ', action);
    //   return state;
    case actionTypes.FLATTEN_RESOURCES: {
      // console.info('flattenedResourcesReducer, action: ', action);
      // console.info('    action.payload: ', JSON.stringify(action.payload, null, 2));
      const newState = { ...state }; // detect mutation
      processBundle(newState, action.payload, 0);
      return newState;
    }
    default:
      return state;
  }
};

const resourcesEpic = (action$, state$) => action$.pipe(
  ofType(actionTypes.SET_PATIENT_DATA),
  map(({ payload }) => {
    console.info('action$:', action$);
    console.info('state$:', state$);
    // const { result, sort } = state$.value;
    return ({
      type: actionTypes.FLATTEN_RESOURCES,
      payload,
    });
  }),
);

export const rootEpic = combineEpics(
  resourcesEpic,
);

export default createEpicMiddleware({
  // dependencies: { ajax: rxAjax },
});
