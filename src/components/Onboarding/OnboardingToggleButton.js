import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Button,
} from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Storage from '../../storage';
import Colors from '../../constants/Colors';
import { onboardingState, storageOnboardingState } from '../../recoil';

const OnboardingToggleButton = () => {
  const storageIsOBComplete = useRecoilValue(storageOnboardingState);
  const [isOnboardingComplete, setIsOnboardingComplete] = useRecoilState(onboardingState(storageIsOBComplete)); // eslint-disable-line max-len

  const handleOnboardingToggle = (isCompleted) => {
    Storage.setOnboardingState(isCompleted);
    setIsOnboardingComplete(isCompleted);
  };

  const handleClearAsyncStorage = async () => {
    await AsyncStorage.clear();
    Updates.reloadAsync();
  };

  return (
    <View style={styles.root}>
      <View style={styles.onboardingContainer}>
        <TouchableOpacity
          style={styles.onboardingButton}
          onPress={() => handleOnboardingToggle(!isOnboardingComplete)}
        >
          <Text style={styles.onboardingButtonText}>{`Onboarding Completed: ${JSON.stringify(isOnboardingComplete)}`}</Text>
        </TouchableOpacity>
        <Text>
          Times Onboarding Button Toggled:
          {onboardingToggleCount}
        </Text>
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
