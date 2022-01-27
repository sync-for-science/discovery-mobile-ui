import React, { useState, useEffect, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import {
  LogBox, View, ActivityIndicator, StyleSheet,
} from 'react-native';
import * as Font from 'expo-font'; // eslint-disable-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import RootNavigator from './src/navigation/RootNavigator';

const Roboto = require('native-base/Fonts/Roboto.ttf');
const RobotoMedium = require('native-base/Fonts/Roboto_medium.ttf');

export default function App() {
  const [loading, setLoading] = useState(false);
  LogBox.ignoreLogs(['VirtualizedLists', 'A VirtualizedList']);
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();
  useEffect(() => {
    setLoading(true);
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto,
        RobotoMedium,
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
      <Suspense fallback={<View style={styles.fallbackContainer}><ActivityIndicator /></View>}>
        <RootNavigator />
      </Suspense>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent:
    'center',
    alignItems: 'center',
  },
});
