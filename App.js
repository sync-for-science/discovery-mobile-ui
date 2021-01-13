import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import RootNavigator from './src/navigation/RootNavigator';
import counterSlice from './Slice';

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
