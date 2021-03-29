import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import { shape } from 'prop-types';
import LoginScreen from '../screens/LoginScreen';
import SummaryScreen from '../screens/SummaryScreen';
import CatalogScreen from '../screens/CatalogScreen';
import CollectionsListScreen from '../screens/CollectionsListScreen';
import CollectionPreviewScreen from '../screens/CollectionPreviewScreen';
import Colors from '../constants/Colors';

const HomeTab = createBottomTabNavigator();
const CollectionsStack = createStackNavigator();
const AuthStack = createStackNavigator();

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
    screenOptions={{ gestureEnabled: false }}
  >
    <CollectionsStack.Screen
      name="CollectionsList"
      component={CollectionsListScreen}
    />
    <CollectionsStack.Screen
      name="CollectionPreview"
      component={CollectionPreviewScreen}
    />
  </CollectionsStack.Navigator>
);

const HomeTabScreen = () => (
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
    <HomeTab.Screen name="Summary" component={SummaryScreen} />
    <HomeTab.Screen name="Catalog" component={CatalogScreen} />
    <HomeTab.Screen name="Collections" component={CollectionStackScreen} />
  </HomeTab.Navigator>
);

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen
      name="PreAuth"
      component={LoginScreen}
      options={{
        title: 'Discovery Mobile App',
      }}
    />
  </AuthStack.Navigator>
);

const RootNavigator = ({ patientData }) => (
  <NavigationContainer>
    {patientData ? <HomeTabScreen /> : <AuthStackScreen />}
  </NavigationContainer>
);

RootNavigator.propTypes = {
  patientData: shape({}),
};

RootNavigator.defaultProps = {
  patientData: null,
};

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

export default connect(mapStateToProps, null)(RootNavigator);
