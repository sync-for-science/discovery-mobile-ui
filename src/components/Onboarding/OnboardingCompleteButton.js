import React, {useEffect} from 'react'
import { useRecoilState } from 'recoil'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { getOnboardingState } from '../../recoil'
import Storage from '../../storage'
import Colors from '../../constants/Colors'

const OnboardingCompleteButton = () => {
  const [onboardingState, setOnboardingState] = useRecoilState(getOnboardingState)

  const handleOnboardingToggle = (isCompleted) => {
    Storage.setOnboardingState(isCompleted)
    setOnboardingState(isCompleted)
  }

  useEffect(() => {
    const getIsOnboardingComplete = async () => {
      setOnboardingState(await Storage.getIsOnboardingComplete())
    }
    getIsOnboardingComplete()
  }, [])

  return (
    <View style={styles.root}>
      <View style={styles.onboardingContainer}>
        <TouchableOpacity style={styles.onboardingButton} onPress={() => handleOnboardingToggle(!onboardingState)}>
            <Text style={styles.onboardingButtonText}>{`Onboarding Completed: ${JSON.stringify(onboardingState)}`}</Text>
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
