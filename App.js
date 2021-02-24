import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore, compose } from '@reduxjs/toolkit';

import RootNavigator from './src/navigation/RootNavigator';
import patientDataReducer from './src/features/patient/patientDataSlice';
import authReducer from './src/features/auth/authSlice';
import epicMiddleware, { rootEpic, flattenedResourcesReducer, resourceTypesReducer } from './src/epics';

const rootReducer = combineReducers({
  auth: authReducer,
  patient: patientDataReducer,
  resources: flattenedResourcesReducer,
  resourceTypes: resourceTypesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: compose([
    epicMiddleware,
    // routerMiddleware(history), // < e.g.: other middleware
  ]),
});

epicMiddleware.run(rootEpic);

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
