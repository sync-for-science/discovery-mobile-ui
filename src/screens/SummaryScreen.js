import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Header, Body, Title,
} from 'native-base';

import Colors from '../constants/Colors';
import RecordsSummary from '../components/Summary/RecordsSummary';
import ProvidersSummary from '../components/Summary/ProvidersSummary';
import TextStyles from '../constants/TextStyles';

const Tab = createMaterialTopTabNavigator();

const SummaryScreen = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Header style={styles.header}>
      <Body>
        <Title style={styles.headerText}>Summary</Title>
      </Body>
    </Header>
    <Tab.Navigator
      initialRouteName="Records"
      style={styles.tabs}
      tabBarOptions={{
        labelStyle: styles.tabText,
        indicatorStyle: {
          backgroundColor: Colors.primary,
        },
      }}
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

const { body1 } = TextStyles;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: Colors.logoBlue,
    height: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  tabText: {
    textTransform: 'none',
    ...body1,
  },
});
