import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OBSplashScreen from '../screens/Onboarding/OBSplashScreen';
import OBWalkthroughScreen from '../screens/Onboarding/OBWalkthroughScreen';

const OnboardingStack = createStackNavigator();

const OnboardingNavigator = () => (
  <OnboardingStack.Navigator
    initialRouteName="Walkthrough"
    headerMode="none"
  >
    <OnboardingStack.Screen name="Splash" component={OBSplashScreen} />
    <OnboardingStack.Screen name="Walkthrough" component={OBWalkthroughScreen} />
  </OnboardingStack.Navigator>
);

export default OnboardingNavigator;
