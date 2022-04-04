import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import ProfileScreen from '../screens/ProfileScreen';
import SummaryScreen from '../screens/SummaryScreen';
import CatalogScreen from '../screens/CatalogScreen';
import CollectionsListScreen from '../screens/CollectionsListScreen';
import NotesScreen from '../screens/NotesScreen';
import CollectionDetailsScreen from '../screens/CollectionDetailsScreen';
import CollectionInputScreen from '../screens/CollectionInputScreen';

import { TAB_LABELS } from '../constants';
import Colors from '../constants/Colors';
import StateProvider from '../../StateProvider';

const HomeTab = createBottomTabNavigator();
const CollectionsStack = createStackNavigator();

function selectIconName(name, focused) {
  switch (name) {
    case TAB_LABELS.PROFILE:
      return focused ? 'md-person-sharp' : 'md-person-outline';
    case TAB_LABELS.SUMMARY:
      return focused ? 'md-grid-sharp' : 'md-grid-outline';
    case TAB_LABELS.COLLECTIONS:
      return focused ? 'albums' : 'albums-outline';
    default:
      return '';
  }
}

// selectScreenOptions is a function that returns a POJO
const selectScreenOptions = ({ route: { name } }) => ({
  tabBarIcon: ({ focused, color, size }) => ( // eslint-disable-line react/prop-types
    <Ionicons
      name={selectIconName(name, focused)}
      size={size}
      color={color}
    />
  ),
});

const CollectionStackScreen = () => (
  <CollectionsStack.Navigator
    initialRouteName="CollectionsList"
    headerMode="none"
  >
    <CollectionsStack.Screen
      name="CollectionsList"
      component={CollectionsListScreen}
    />
    <CollectionsStack.Screen
      name="Catalog"
      component={CatalogScreen}
    />
    <CollectionsStack.Screen
      name="CollectionDetails"
      component={CollectionDetailsScreen}
    />
    <CollectionsStack.Screen
      name="Notes"
      component={NotesScreen}
    />
    <CollectionsStack.Screen
      name="CollectionInput"
      component={CollectionInputScreen}
    />

  </CollectionsStack.Navigator>
);

const AuthorizedNavigator = () => (
  <StateProvider>
    <HomeTab.Navigator
      initialRouteName={TAB_LABELS.PROFILE}
      screenOptions={selectScreenOptions}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'gray',
        style: {
          paddingVertical: 10,
          height: 84,
        },
        labelStyle: {
          fontSize: 12,
        },
        tabBarIcon: {
          size: 5,
        },
      }}
    >
      <HomeTab.Screen name={TAB_LABELS.PROFILE} component={ProfileScreen} />
      <HomeTab.Screen name={TAB_LABELS.SUMMARY} component={SummaryScreen} />
      <HomeTab.Screen name={TAB_LABELS.COLLECTIONS} component={CollectionStackScreen} />
    </HomeTab.Navigator>
  </StateProvider>
);

export default AuthorizedNavigator;
