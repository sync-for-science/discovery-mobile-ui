import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Colors from '../constants/Colors';
import RecordsSummary from '../components/Summary/RecordsSummary';
import ProvidersSummary from '../components/Summary/ProvidersSummary';

const Tab = createMaterialTopTabNavigator();

const SummaryScreen = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Tab.Navigator
      initialRouteName="Records"
      style={styles.tabs}
    >
      <Tab.Screen
        name="Records"
        component={RecordsSummary}
      />
      <Tab.Screen
        name="Providers"
        component={ProvidersSummary}
      />
    </Tab.Navigator>
  </SafeAreaView>
);

SummaryScreen.propTypes = {
};

export default SummaryScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
  },
});
