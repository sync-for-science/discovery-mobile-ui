import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';

const OnboardingStack = createStackNavigator()

const OnboardingNavigator = () => (
  <OnboardingStack.Navigator
    initialRouteName="Onboarding"
    headerMode="none"
  >
    <OnboardingStack.Screen name="Onboarding" component={OnboardingScreen} />
  </OnboardingStack.Navigator>
)

export default OnboardingNavigator