import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  IS_ONBOARDING_COMPLETE: 'IS_ONBOARDING_COMPLETE'
}

const setOnboardingState = async (isCompleted) => {
  try {
    AsyncStorage.setItem(KEYS.IS_ONBOARDING_COMPLETE, JSON.stringify(isCompleted))
  } catch (e) {
    console.warn(`AsyncStorage "setOnboardingState" failed.`)
  }
}

const getOnboardingState = async () => {
  try {
    const value = await AsyncStorage.getItem(KEYS.IS_ONBOARDING_COMPLETE)
    if(value !== null) {
      return JSON.parse(value)
    }
  } catch(e) {
    console.warn(`AsyncStorage "getOnboardingState" failed.`)
  }
}

export default {
  getOnboardingState,
  setOnboardingState
}

