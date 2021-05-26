import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  IS_ONBOARDING_COMPLETE: 'IS_ONBOARDING_COMPLETE',
  ONBOARDING_TOGGLE_COUNT: 'ONBOARDING_TOGGLE_COUNT',
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

const setOnboardingToggleCount = async (count) => {
  try {
    AsyncStorage.setItem(KEYS.ONBOARDING_TOGGLE_COUNT, JSON.stringify(count));
  } catch (e) {
    console.warn('AsyncStorage "setOnboardingState" failed.'); // eslint-disable-line no-console
  }
  return null;
};

const getOnboardingToggleCount = async () => {
  try {
    const value = await AsyncStorage.getItem(KEYS.ONBOARDING_TOGGLE_COUNT);
    if (value) {
      return JSON.parse(value);
    }
    return 0;
  } catch (e) {
    console.warn('AsyncStorage "getOnboardingState" failed.'); // eslint-disable-line no-console
  }
  return null;
};

export default {
  getOnboardingState,
  setOnboardingState,
  setOnboardingToggleCount,
  getOnboardingToggleCount,
};
