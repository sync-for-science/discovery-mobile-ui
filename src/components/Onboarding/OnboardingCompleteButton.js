import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Storage from '../../storage'
import Colors from '../../constants/Colors'

const OnboardingCompleteButton = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(null)
  const onboardingDisplayText = isOnboardingComplete ? "isOnboardingComplete: true" : "isOnboardingComplete: false"
  const onboardingButtonText = isOnboardingComplete ? "Reset Onboarding" : 'Complete Onboarding'

  const handleCheck = async () => {
    console.log('getIsOnboardingComplete()', await Storage.getIsOnboardingComplete())
  }

  const handleCompleteOnboarding = () => {
    Storage.completeOnboarding()
    setIsOnboardingComplete(true)
  }

  const handleResetOnboarding = () => {
    Storage.resetOnboarding()
    setIsOnboardingComplete(false)
  }

  const onboardingPress = isOnboardingComplete ? handleResetOnboarding : handleCompleteOnboarding

  useEffect(() => {
    const getIsOnboardingComplete = async () => {
      setIsOnboardingComplete(await Storage.getIsOnboardingComplete())
    }
    getIsOnboardingComplete()
  }, [])

  return (
    <View style={styles.root}>
      <View style={styles.onboardingContainer}>
        <Text>{onboardingDisplayText}</Text>
        <TouchableOpacity style={styles.onboardingButton} onPress={onboardingPress}>
            <Text style={styles.onboardingButtonText}>{onboardingButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.onboardingButton} onPress={handleCheck}>
            <Text style={styles.onboardingButtonText}>Check</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnboardingCompleteButton

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center'
  },
  onboardingContainer: {
    alignItems: 'center'
  },
  onboardingButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10
  },
  onboardingButtonText: {
    color: 'white'
  }
})
