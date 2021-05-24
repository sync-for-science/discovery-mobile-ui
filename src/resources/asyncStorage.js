import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async ({key, value}) => {
  const jsonValue = JSON.stringify(value)
  try {
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.warn(`AsyncStorage "storeData" failed. key: ${key}, value: ${jsonValue}`)
  }
}

export const getData = async ({key}) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.warn(`AsyncStorage "getData" failed. key: ${key}, value: ${jsonValue}`)
  }
}
