import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Page1 from '../components/Onboarding/Page1'
import Page2 from '../components/Onboarding/Page2'

const OnboardingScreen = () => {
  return (
    <SafeAreaView>
      <Page1 />
      <Page2 />
    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})
