import 'react-native-url-polyfill/auto';
import React, { useState, useEffect, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { LogBox } from 'react-native';
import * as Font from 'expo-font'; // eslint-disable-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf';

import RootNavigator from './src/navigation/RootNavigator';
import LoadingIndicator from './src/components/LoadingIndicator';

export default function App() {
  const [loading, setLoading] = useState(true);
  // LogBox.ignoreLogs(['VirtualizedLists', 'A VirtualizedList']);
  // LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  // LogBox.ignoreAllLogs();
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          Roboto,
          RobotoMedium,
          ...Ionicons.font,
        });
      } catch (error) {
        console.error('an error occurred while loading fonts: ', error);
      }
      setLoading(false);
    };
    loadFonts();
  }, []);

  if (loading) {
    return (<LoadingIndicator />);
  }

  return (
    <RecoilRoot>
      <Suspense fallback={<LoadingIndicator />}>
        <RootNavigator />
      </Suspense>
    </RecoilRoot>
  );
}
