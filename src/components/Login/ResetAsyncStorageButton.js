import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../../constants/Colors';

const ResetAsyncStorage = () => {
  const handleReset = async () => {
    await AsyncStorage.clear();
    Updates.reloadAsync();
  };

  return (
    <TouchableOpacity
      style={styles.reset}
      onPress={handleReset}
    >
      <Text style={styles.resetText}>Reset App</Text>
    </TouchableOpacity>
  );
};

export default ResetAsyncStorage;

const styles = StyleSheet.create({
  reset: {
    margin: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 50,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  resetText: {
    color: Colors.resetAppText,
    fontSize: 20,
  },
});
