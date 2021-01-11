import React from 'react';
import { StyleSheet, Button, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen'
import SummaryScreen from './src/screens/SummaryScreen'
import CatalogScreen from './src/screens/CatalogScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{ 
            headerStyle: { backgroundColor: '#3477e3' },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'normal',
              alignSelf: 'center'
            },
          }}
        >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            title: 'Discovery Mobile App', 
          }} 
        />
        <Stack.Screen name="Summary" component={SummaryScreen} />
        <Stack.Screen name="Catalog" component={CatalogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create();
