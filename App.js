import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons/'

import LoginScreen from './src/screens/LoginScreen'
import SummaryScreen from './src/screens/SummaryScreen'
import CatalogScreen from './src/screens/CatalogScreen'
import Colors from './src/constants/Colors'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PostAuthScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Summary') {
            iconName = focused
              ? 'md-person-sharp'
              : 'md-person-outline';
          } else if (route.name === 'Catalog') {
            iconName = focused ? 'file-tray-full' : 'file-tray-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: 'gray',
        }}
    >
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
