import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  getItem: async (key: string, defaultValue: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error(`and error occured getting storage key "${key}" : `, error);
    }
    return defaultValue;
  },
  setItem: async (key: string, value: string) => {
    try {
      AsyncStorage.setItem(key, String(value));
    } catch (error) {
      console.error(`and error occured setting storage key "${key}" and value "${value}": `, error);
    }
  },
};
