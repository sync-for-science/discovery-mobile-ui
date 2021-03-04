import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { LogBox, View } from 'react-native';
import * as Font from 'expo-font'; // eslint-disable-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf'; // eslint-disable-line camelcase
import store from './src/redux';
import RootNavigator from './src/navigation/RootNavigator';

LogBox.ignoreLogs(['VirtualizedLists']);

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto,
        Roboto_medium,
        ...Ionicons.font,
      });
    };
    loadFonts();
    setLoading(false);
  }, []);

  if (loading) {
    return (<View />);
  }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
