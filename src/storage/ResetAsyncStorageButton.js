import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TextStyles from '../constants/TextStyles';
import Colors from '../constants/Colors';

const ResetAsyncStorage = () => {
  const handleClearAsyncStorage = async () => {
    await AsyncStorage.clear();
    Updates.reloadAsync();
  };

  return (
    <TouchableOpacity style={styles.root} onPress={handleClearAsyncStorage}>
      <Text style={[styles.baseText, styles.logoBlue]}>Delete App Data From Phone</Text>
    </TouchableOpacity>
  );
};

export default ResetAsyncStorage;

const { body1 } = TextStyles;

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  baseText: {
    ...body1,
  },
  logoBlue: {
    color: Colors.logoBlue,
  },
});
