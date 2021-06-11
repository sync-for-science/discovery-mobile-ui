import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { customCollectionsSelector, prebuiltCollectionsSelector } from '../redux/selectors';
import CollectionsIndex from '../components/Collections/index';
import CollectionsIndexHeader from '../components/Collections/CollectionsIndexHeader';
import Colors from '../constants/Colors';

const CollectionsIndexCustom = connect((state) => ({
  collections: customCollectionsSelector(state),
}), null)(({ navigation, collections }) => (
  <CollectionsIndex
    navigation={navigation}
    collections={collections}
  />
));

const CollectionsIndexPrebuilt = connect((state) => ({
  collections: prebuiltCollectionsSelector(state),
}), null)(({ navigation, collections }) => (
  <CollectionsIndex
    navigation={navigation}
    collections={collections}
  />
));

const Tab = createMaterialTopTabNavigator();

const CollectionsListScreen = () => (
  <SafeAreaView style={styles.root}>
    <CollectionsIndexHeader />
    <Tab.Navigator
      initialRouteName="Builds"
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: Colors.collectionYellow,
        },
      }}
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
