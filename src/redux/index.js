import { combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import patientDataReducer from '../features/patient/patientDataSlice';
import {
  flattenedResourcesReducer,
  resourceTypesReducer,
  resourceTypeFiltersReducer,
  selectedResourceTypeReducer,
  dateRangeFilterReducer,
} from './reducers';
import epicMiddleware, { rootEpic } from './epics';

const rootReducer = combineReducers({
  auth: authReducer,
  patient: patientDataReducer,
  resources: flattenedResourcesReducer,
  resourceIdsGroupedByType: resourceTypesReducer,
  resourceTypeFilters: resourceTypeFiltersReducer,
  selectedResourceType: selectedResourceTypeReducer,
  dateRangeFilter: dateRangeFilterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: compose([
    epicMiddleware,
    // routerMiddleware(history), // < e.g.: other middleware
  ]),
  devTools: {
    serialize: true, // See: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#serialize
  },
});

epicMiddleware.run(rootEpic);

export default store;
