import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen1 from '../screens/Onboarding/OnboardingPage1';

const OnboardingStack = createStackNavigator();

const OnboardingNavigator = () => (
  <OnboardingStack.Navigator
    initialRouteName="OnboardingScreen1"
    headerMode="none"
  >
    <OnboardingStack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
  </OnboardingStack.Navigator>
);

export default OnboardingNavigator;
