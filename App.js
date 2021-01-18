import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import RootNavigator from './src/navigation/RootNavigator';
import patientReducer from './src/features/patient/patientSlice';
import authReducer from './src/features/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
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
