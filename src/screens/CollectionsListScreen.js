import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { collectionsSelector } from '../redux/selectors';
import CollectionsIndex from '../components/Collections/index';
import Colors from '../constants/Colors';

const CollectionsIndexCustom = connect((state) => ({
  collections: collectionsSelector(state),
}), null)(({ navigation, collections }) => (
  <CollectionsIndex
    navigation={navigation}
    collections={collections}
  />
));

const CollectionsIndexPrebuilt = connect((state) => ({
  collections: collectionsSelector(state),
}), null)(({ navigation, collections }) => (
  <CollectionsIndex
    navigation={navigation}
    collections={collections}
  />
));

const Tab = createMaterialTopTabNavigator();

const CollectionsListScreen = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Tab.Navigator
      initialRouteName="Updates"
      style={styles.tabs}
    >
      <Tab.Screen
        name="Builds"
        component={CollectionsIndexCustom}
      />
      <Tab.Screen
        name="Updates"
        component={CollectionsIndexPrebuilt}
      />
    </Tab.Navigator>
  </SafeAreaView>
);

CollectionsListScreen.propTypes = {
  navigation: shape({}).isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default CollectionsListScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
});
