import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import SummaryScreen from '../screens/SummaryScreen';
import CatalogScreen from '../screens/CatalogScreen';
import CollectionsListScreen from '../screens/CollectionsListScreen';
import Colors from '../constants/Colors';

const HomeTab = createBottomTabNavigator();
const CollectionsStack = createStackNavigator();

function selectIconName(name, focused) {
  switch (name) {
    case 'Summary':
      return focused ? 'md-person-sharp' : 'md-person-outline';
    case 'Catalog':
      return focused ? 'file-tray-full' : 'file-tray-outline';
    case 'Collections':
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
  </CollectionsStack.Navigator>
);

const AuthorizedNavigator = () => (
  <HomeTab.Navigator
    screenOptions={selectScreenOptions}
    tabBarOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: 'gray',
      style: {
        paddingVertical: 10,
      },
    }}
  >
    <HomeTab.Screen name="Collections" component={CollectionStackScreen} />
    <HomeTab.Screen name="Summary" component={SummaryScreen} />
  </HomeTab.Navigator>
);

export default AuthorizedNavigator;
