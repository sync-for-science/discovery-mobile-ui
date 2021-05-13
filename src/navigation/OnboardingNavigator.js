import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen1 from '../screens/Onboarding/OnboardingScreen1';
import OnboardingScreen2 from '../screens/Onboarding/OnboardingScreen2';

const OnboardingStack = createStackNavigator();

const OnboardingNavigator = () => (
  <OnboardingStack.Navigator
    initialRouteName="OnboardingScreen1"
    headerMode="none"
  >
    <OnboardingStack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
    <OnboardingStack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
  </OnboardingStack.Navigator>
);

export default OnboardingNavigator;
