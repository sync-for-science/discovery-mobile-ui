import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/LoginScreen'
import SummaryScreen from './src/screens/SummaryScreen'
import CatalogScreen from './src/screens/CatalogScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PostAuthScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  

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

const styles = StyleSheet.create();
