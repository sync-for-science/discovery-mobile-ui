import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const UnauthorizedStack = createStackNavigator();

const UnauthorizedNavigator = ({recoilOnboardingState, setRecoilOnboardingState,
  handleOnboardingToggle}) => (
  <UnauthorizedStack.Navigator headerMode="none">
    <UnauthorizedStack.Screen
      name="PreAuth"
      // component={() => <LoginScreen/>}
      options={{
        title: 'Discovery Mobile App',
      }}
    >
      {() => <LoginScreen recoilOnboardingState={recoilOnboardingState} handleOnboardingToggle={handleOnboardingToggle}/>}
    </UnauthorizedStack.Screen>
  </UnauthorizedStack.Navigator>
);

export default UnauthorizedNavigator;
