import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';

const UnauthorizedStack = createStackNavigator();

const UnauthorizedNavigator = () => (
  <UnauthorizedStack.Navigator headerMode="none">
    <UnauthorizedStack.Screen
      name="PreAuth"
      component={LoginScreen}
      options={{
        title: 'Discovery Mobile App',
      }}
    />
  </UnauthorizedStack.Navigator>
);

export default UnauthorizedNavigator;
