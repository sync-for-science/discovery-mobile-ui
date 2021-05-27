import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const UnauthorizedStack = createStackNavigator();

const UnauthorizedNavigator = ({handleOnboardingState}) => (
  <UnauthorizedStack.Navigator headerMode="none">
    <UnauthorizedStack.Screen
      name="PreAuth"
      options={{
        title: 'Discovery Mobile App',
      }}
    >
      {() => <LoginScreen handleOnboardingState={handleOnboardingState} />}
    </UnauthorizedStack.Screen>
  </UnauthorizedStack.Navigator>
);

export default UnauthorizedNavigator;
