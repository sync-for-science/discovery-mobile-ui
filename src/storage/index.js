import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  IS_ONBOARDING_COMPLETE: 'IS_ONBOARDING_COMPLETE',
};

const setOnboardingState = async (isCompleted) => {
  try {
    AsyncStorage.setItem(KEYS.IS_ONBOARDING_COMPLETE, JSON.stringify(isCompleted));
  } catch (e) {
    console.warn('AsyncStorage "setOnboardingState" failed.'); // eslint-disable-line no-console
  }
  return null;
};

const getOnboardingState = async () => {
  try {
    const value = await AsyncStorage.getItem(KEYS.IS_ONBOARDING_COMPLETE);
    if (value) {
      return JSON.parse(value);
    }
    return false;
  } catch (e) {
    console.warn('AsyncStorage "getOnboardingState" failed.'); // eslint-disable-line no-console
  }
  return null;
};

export default {
  getOnboardingState,
  setOnboardingState,
};
