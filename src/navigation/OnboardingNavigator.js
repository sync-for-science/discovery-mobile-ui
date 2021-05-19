import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OBScreenSplash from '../screens/Onboarding/OBScreenSplash';
import OBScreenWalkthrough from '../screens/Onboarding/OBScreenWalkthrough';

const OnboardingStack = createStackNavigator();

const OnboardingNavigator = () => (
  <OnboardingStack.Navigator
    initialRouteName="Walkthrough"
    headerMode="none"
  >
    <OnboardingStack.Screen name="Splash" component={OBScreenSplash} />
    <OnboardingStack.Screen name="Walkthrough" component={OBScreenWalkthrough} />
  </OnboardingStack.Navigator>
);

export default OnboardingNavigator;
