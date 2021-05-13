import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import Page1 from '../components/Onboarding/Page1';
import Page2 from '../components/Onboarding/Page2';

const OnboardingScreen = () => (
  <SafeAreaView style={styles.root}>
    <Swiper
      loop={false}
      index={0}
    >

      <Page1 />
      <Page2 />
    </Swiper>
  </SafeAreaView>
);

export default OnboardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
