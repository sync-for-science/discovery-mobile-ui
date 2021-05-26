import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { bool, func } from 'prop-types';

import LoginScreen from '../screens/LoginScreen';

const UnauthorizedStack = createStackNavigator();

const UnauthorizedNavigator = ({
  recoilOnboardingState,
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
          recoilOnboardingState={recoilOnboardingState}
          handleOnboardingToggle={handleOnboardingToggle}
        />
      )}
    </UnauthorizedStack.Screen>
  </UnauthorizedStack.Navigator>
);

UnauthorizedNavigator.propTypes = {
  recoilOnboardingState: bool.isRequired,
  handleOnboardingToggle: func.isRequired,
};

export default UnauthorizedNavigator;
