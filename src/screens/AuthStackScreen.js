import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';

const AuthStack = createStackNavigator();

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

export default AuthStackScreen;
