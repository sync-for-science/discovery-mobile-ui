import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import RootNavigator from './src/navigation/RootNavigator';
import patientReducer from './src/features/patient/patientSlice';

const rootReducer = combineReducers({
  patient: patientReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
