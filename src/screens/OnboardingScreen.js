import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import OnboardingPage1 from '../components/Onboarding/OnboardingPage1';
import OnboardingPage2 from '../components/Onboarding/OnboardingPage2';

const OnboardingScreen = () => (
  <SafeAreaView style={styles.root}>
    <Swiper
      loop={false}
      index={0}
    >
      <OnboardingPage1 />
      <OnboardingPage2 />
    </Swiper>
  </SafeAreaView>
);

export default OnboardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
