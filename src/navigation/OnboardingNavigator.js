import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OBScreenWelcome from '../screens/Onboarding/OBScreenWelcome';
import OBScreenSecurity from '../screens/Onboarding/DataAccess/OBScreenSecurity';
import OBScreenInfo from '../screens/Onboarding/DataAccess/OBScreenInfo';
import OBScreenProfile from '../screens/Onboarding/DataAccess/OBScreenProfile';
import OBScreenStructure from '../screens/Onboarding/DataOrganization/OBScreenStructure';
import OBScreenOrganization from '../screens/Onboarding/DataOrganization/OBScreenOrganization';
import OBScreenCollections1 from '../screens/Onboarding/DataOrganization/OBScreenCollections1';
import OBScreenCollection2 from '../screens/Onboarding/DataOrganization/OBScreenCollections2';

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
    <OnboardingStack.Screen name="Structure" component={OBScreenStructure} />
    <OnboardingStack.Screen name="Organization" component={OBScreenOrganization} />
    <OnboardingStack.Screen name="Collections1" component={OBScreenCollections1} />
    <OnboardingStack.Screen name="Collections2" component={OBScreenCollection2} />
  </OnboardingStack.Navigator>
);

export default OnboardingNavigator;
