import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { customCollectionsSelector, prebuiltCollectionsSelector, collectionsCounterSelector } from '../redux/selectors';
import CollectionsIndex from '../components/Collections/index';
import CollectionsIndexSearch from '../components/Collections/indexSearch';
import CollectionsIndexHeader from '../components/Collections/CollectionsIndexHeader';
import Colors from '../constants/Colors';
import TextStyles from '../constants/TextStyles';
import ROUTES from '../constants/routes';

const CollectionsIndexCustom = connect((state) => ({
  collections: customCollectionsSelector(state),
}), null)(({ navigation, collections }) => (
  <CollectionsIndexSearch
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

// Note: when 1st landing on this screen, `getFocusedRouteNameFromRoute(route) === undefined` ?
const CollectionsListScreen = ({ route, collectionsCounter, navigation }) => (
  <SafeAreaView style={styles.root}>
    <CollectionsIndexHeader
      showNewCollectionButton={getFocusedRouteNameFromRoute(route) !== ROUTES.COLLECTIONS.REPORTS}
      navigation={navigation}
    />
    <Tab.Navigator
      initialRouteName={ROUTES.COLLECTIONS.REPORTS}
      tabBarOptions={{
        labelStyle: styles.tabText,
        indicatorStyle: {
          backgroundColor: Colors.collectionYellow,
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.COLLECTIONS.BUILDS}
        options={{
          title: `${collectionsCounter.customCount} My Collections`,
        }}
        component={CollectionsIndexCustom}
      />
      <Tab.Screen
        name={ROUTES.COLLECTIONS.REPORTS}
        options={{
          title: `${collectionsCounter.preBuiltCount} Reports`,
        }}
        component={CollectionsIndexPrebuilt}
      />
    </Tab.Navigator>
  </SafeAreaView>
);

CollectionsListScreen.propTypes = {
  navigation: shape({}).isRequired, // eslint-disable-line react/no-unused-prop-types
  route: shape({}).isRequired,
  collectionsCounter: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collectionsCounter: collectionsCounterSelector(state),
});

export default connect(mapStateToProps, null)(CollectionsListScreen);

const { body1 } = TextStyles;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  tabText: {
    textTransform: 'none',
    ...body1,
  },
});
