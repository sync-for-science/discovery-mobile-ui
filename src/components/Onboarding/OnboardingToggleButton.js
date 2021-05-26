import React from 'react';
import { bool, func } from 'prop-types';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

import Colors from '../../constants/Colors';

const OnboardingToggleButton = ({ recoilOnboardingState, handleOnboardingToggle }) => (
  <View style={styles.root}>
    <View style={styles.onboardingContainer}>
      <TouchableOpacity
        style={styles.onboardingButton}
        onPress={() => handleOnboardingToggle(!recoilOnboardingState)}
      >
        <Text style={styles.onboardingButtonText}>{`Onboarding Completed: ${JSON.stringify(recoilOnboardingState)}`}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

OnboardingToggleButton.propTypes = {
  recoilOnboardingState: bool.isRequired,
  handleOnboardingToggle: func.isRequired,
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
