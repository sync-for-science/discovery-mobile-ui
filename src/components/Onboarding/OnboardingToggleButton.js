import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Button,
} from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilValue, useRecoilState } from 'recoil';

import Storage from '../../storage';
import Colors from '../../constants/Colors';
import {
  onboardingState, storageOnboardingState, storageOnboardingToggleCount, onboardingToggleCount,
} from '../../recoil';

const OnboardingToggleButton = () => {
  

  const handleClearAsyncStorage = async () => {
    await AsyncStorage.clear();
    Updates.reloadAsync();
  };

  const handleClearAsyncStorage = async () => {
    await AsyncStorage.clear();
    Updates.reloadAsync();
  };

  return (
    <View style={styles.root}>
      <View style={styles.onboardingContainer}>
        <Button title="Reset Async Storage" onPress={handleClearAsyncStorage} />
      </View>
    </View>
  );
};

export default OnboardingToggleButton;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
  },
  onboardingContainer: {
    alignItems: 'center',
  },
  onboardingButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  onboardingButtonText: {
    color: 'white',
  },
});
