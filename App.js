import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import store from './src/redux';
import RootNavigator from './src/navigation/RootNavigator';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

LogBox.ignoreLogs(['VirtualizedLists']);

export default function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const loadFonts = async () => {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
    }
    loadFonts()
    setLoading(false)
  }, [])

  if (loading) {
    return (<View></View>)
  }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
