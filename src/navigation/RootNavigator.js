import React from 'react';
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import LoginScreen from '../screens/LoginScreen';
import SummaryScreen from '../screens/SummaryScreen';
import CatalogScreen from '../screens/CatalogScreen';
import CollectionsIndexScreen from '../screens/CollectionsIndexScreen'
import CollectionDetailsScreen from '../screens/CollectionDetailsScreen'
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CollectionsStack = createStackNavigator();
const HomeStack = createStackNavigator()

const CollectionStackScreen = () => (
  <CollectionsStack.Navigator
    initialRouteName="CollectionsIndex"
    headerMode="none"
  >
    <CollectionsStack.Screen
      name="CollectionsIndex"
      component={CollectionsIndexScreen}
    />
    <CollectionsStack.Screen
      name="CollectionDetails"
      component={CollectionDetailsScreen}
    />
  </CollectionsStack.Navigator>
)

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

const HomeTabScreen = () => (
  <Tab.Navigator
    screenOptions={selectScreenOptions}
    tabBarOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: 'gray',
      style: {
        paddingVertical: 10,
      },
    }}
  >
    <Tab.Screen name="Summary" component={SummaryScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="Collections" component={CollectionStackScreen} />
  </Tab.Navigator>
);

const AuthStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen
      name="PreAuth"
      component={LoginScreen}
      options={{
        title: 'Discovery Mobile App',
        // gestureEnabled: false,
      }}
    />
  </HomeStack.Navigator>
)

const RootNavigator = ({patientData}) => {
  return (
    <NavigationContainer>
      {patientData ? <HomeTabScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData
})

export default connect(mapStateToProps, null)(RootNavigator)
