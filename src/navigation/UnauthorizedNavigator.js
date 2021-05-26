import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { bool, func } from 'prop-types';

import LoginScreen from '../screens/LoginScreen';

const UnauthorizedStack = createStackNavigator();

const UnauthorizedNavigator = ({
  isOnboardingComplete,
  handleOnboardingToggle,
}) => (
  <UnauthorizedStack.Navigator headerMode="none">
    <UnauthorizedStack.Screen
      name="PreAuth"
      options={{
        title: 'Discovery Mobile App',
      }}
    >
      {() => (
        <LoginScreen
          isOnboardingComplete={isOnboardingComplete}
          handleOnboardingToggle={handleOnboardingToggle}
        />
      )}
    </UnauthorizedStack.Screen>
  </UnauthorizedStack.Navigator>
);

UnauthorizedNavigator.propTypes = {
  isOnboardingComplete: bool.isRequired,
  handleOnboardingToggle: func.isRequired,
};

export default UnauthorizedNavigator;
