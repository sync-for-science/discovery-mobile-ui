import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'react-native-elements';

import RootNavigator from './src/navigation/RootNavigator';
import patientDataReducer from './src/features/patient/patientDataSlice';
import authReducer from './src/features/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  patient: patientDataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
}
