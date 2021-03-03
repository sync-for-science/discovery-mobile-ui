import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux';
import RootNavigator from './src/navigation/RootNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists'])

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
