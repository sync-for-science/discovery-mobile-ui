import AsyncStorage from '@react-native-async-storage/async-storage';

export const KEYS = {
  IS_ONBOARDING_COMPLETE: 'IS_ONBOARDING_COMPLETE'
}

const completeOnboarding = async () => {
  try {
    AsyncStorage.setItem(KEYS.IS_ONBOARDING_COMPLETE, true)
  } catch (e) {
    console.warn(`AsyncStorage "completeOnboarding" failed.`)
  }
}
  

const resetOnboarding = async () => {
  try {
    AsyncStorage.setItem(KEYS.IS_ONBOARDING_COMPLETE, false)
  } catch (e) {
    console.warn(`AsyncStorage "resetOnboarding" failed.`)
  }
}

const getIsOnboardingComplete = async () => {
  try {
    const value = await AsyncStorage.getItem(KEYS.IS_ONBOARDING_COMPLETE)
    if(value !== null) {
      return value
    }
  } catch(e) {
    console.warn(`AsyncStorage "getIsOnboardingComplete" failed.`)
  }
}

export default {
  completeOnboarding, 
  resetOnboarding,
  getIsOnboardingComplete
}

