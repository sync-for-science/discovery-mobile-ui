import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  IS_ONBOARDING_COMPLETE: 'IS_ONBOARDING_COMPLETE'
}

const completeOnboarding = async () => {
  try {
    AsyncStorage.setItem(KEYS.IS_ONBOARDING_COMPLETE, JSON.stringify(true))
  } catch (e) {
    console.warn(`AsyncStorage "completeOnboarding" failed.`)
  }
}
  

const resetOnboarding = async () => {
  try {
    AsyncStorage.setItem(KEYS.IS_ONBOARDING_COMPLETE, JSON.stringify(false))
  } catch (e) {
    console.warn(`AsyncStorage "resetOnboarding" failed.`)
  }
}

const setOnboardingState = async (isCompleted) => {
  try {
    AsyncStorage.setItem(KEYS.IS_ONBOARDING_COMPLETE, JSON.stringify(isCompleted))
  } catch (e) {
    console.warn(`AsyncStorage "setOnboardingState" failed.`)
  }
}


const getIsOnboardingComplete = async () => {
  try {
    const value = await AsyncStorage.getItem(KEYS.IS_ONBOARDING_COMPLETE)
    if(value !== null) {
      return JSON.parse(value)
    }
  } catch(e) {
    console.warn(`AsyncStorage "getIsOnboardingComplete" failed.`)
  }
}

export default {
  completeOnboarding, 
  resetOnboarding,
  getIsOnboardingComplete,
  setOnboardingState
}

