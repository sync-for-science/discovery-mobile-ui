import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OBScreenWelcome from '../screens/Onboarding/OBScreenWelcome';
import OBScreenSecurity from '../screens/Onboarding/DataAccess/OBScreenSecurity';
import OBScreenInfo from '../screens/Onboarding/DataAccess/OBScreenInfo';
import OBScreenProfile from '../screens/Onboarding/DataAccess/OBScreenProfile';

const OnboardingStack = createStackNavigator();

const OnboardingNavigator = () => (
  <OnboardingStack.Navigator
    initialRouteName="Welcome"
    headerMode="none"
  >
    <OnboardingStack.Screen name="Welcome" component={OBScreenWelcome} />
    <OnboardingStack.Screen name="Security" component={OBScreenSecurity} />
    <OnboardingStack.Screen name="Info" component={OBScreenInfo} />
    <OnboardingStack.Screen name="Profile" component={OBScreenProfile} />
  </OnboardingStack.Navigator>
);

export default OnboardingNavigator;
