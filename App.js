import React, { useState, useEffect, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { LogBox, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font'; // eslint-disable-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf'; // eslint-disable-line camelcase

import RootNavigator from './src/navigation/RootNavigator';

LogBox.ignoreLogs(['VirtualizedLists', 'A VirtualizedList']);

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
    <RecoilRoot>
      <Suspense fallback={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator /></View>}>
        <RootNavigator />
      </Suspense>
    </RecoilRoot>
  );
}
