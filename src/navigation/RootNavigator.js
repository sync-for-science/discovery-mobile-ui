import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons/'; // eslint-disable-line import/no-extraneous-dependencies

import LoginScreen from '../screens/LoginScreen';
import SummaryScreen from '../screens/SummaryScreen';
import CatalogScreen from '../screens/CatalogScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function selectIconName(name, focused) {
  if (name === 'Summary') {
    return focused ? 'md-person-sharp' : 'md-person-outline';
  } if (name === 'Catalog') {
    return focused ? 'file-tray-full' : 'file-tray-outline';
  }

  return '';
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

const PostAuthScreens = () => (
  <Tab.Navigator
    screenOptions={selectScreenOptions}
    tabBarOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Summary" component={SummaryScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
  </Tab.Navigator>
);

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PreAuth"
        headerMode="none"
      >
        <Stack.Screen
          name="PreAuth"
          component={LoginScreen}
          options={{
            title: 'Discovery Mobile App',
          }}
        />
        <Stack.Screen
          name="PostAuth"
          component={PostAuthScreens}
          options={{
            title: 'Discovery Mobile App',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
