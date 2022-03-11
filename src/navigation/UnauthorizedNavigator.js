import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';

const UnauthorizedStack = createStackNavigator();

const UnauthorizedNavigator = () => (
  <UnauthorizedStack.Navigator headerMode="none">
    <UnauthorizedStack.Screen
      name="PreAuth"
      options={{
        title: 'Discovery Mobile App',
      }}
      component={LoginScreen}
    />
  </UnauthorizedStack.Navigator>
);

UnauthorizedNavigator.propTypes = {
};

export default UnauthorizedNavigator;
