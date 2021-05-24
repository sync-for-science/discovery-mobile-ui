import React, {useEffect} from 'react'
import { useRecoilState } from 'recoil'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { recoilOnboardingState as rOnboardingState } from '../../recoil'
import Storage from '../../storage'
import Colors from '../../constants/Colors'

const OnboardingCompleteButton = () => {
  const [recoilOnboardingState, setRecoilOnboardingState] = useRecoilState(rOnboardingState)

  const handleOnboardingToggle = (isCompleted) => {
    Storage.setOnboardingState(isCompleted)
    setRecoilOnboardingState(isCompleted)
  }

  useEffect(() => {
    const getOnboardingState = async () => {
      setRecoilOnboardingState(await Storage.getOnboardingState())
    }
    getOnboardingState()
  }, [])

  return (
    <View style={styles.root}>
      <View style={styles.onboardingContainer}>
        <TouchableOpacity style={styles.onboardingButton} onPress={() => handleOnboardingToggle(!recoilOnboardingState)}>
            <Text style={styles.onboardingButtonText}>{`Onboarding Completed: ${JSON.stringify(recoilOnboardingState)}`}</Text>
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
