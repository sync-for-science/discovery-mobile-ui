import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { func } from 'prop-types';

import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';
import LogoBasic from '../../../icons/LogoBasic';

// wireframe page 24
const OBComplete = ({ handleOnboardingState }) => {
  const {
    h2, alignCenter,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <View style={styles.thankYouContainer}>
        <Text style={[h2, alignCenter, styles.thankYouText]}>Thank you Jonathan,</Text>
        <Text style={[h2, alignCenter, styles.thankYouText]}>you&apos;re all set!</Text>
      </View>
      <TouchableOpacity onPress={() => handleOnboardingState(true)}>
        <View style={styles.logoContainer}>
          <LogoBasic height={150} width={150} />
        </View>
        <View style={styles.tapToStartContainer}>
          <MaterialCommunityIcons name="chevron-double-up" size={60} color={Colors.logoBlue} />
          <Text style={[styles.body, styles.tapToStartText]}>Tap to Start</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

OBComplete.propTypes = {
  handleOnboardingState: func.isRequired,
};

export default OBComplete;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 8,
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.lightgrey2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouContainer: {
    width: '100%',
    backgroundColor: Colors.logoBlue,
    padding: 8,
    marginBottom: 24,
  },
  thankYouText: {
    color: 'white',
  },
  tapToStartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tapToStartText: {
    color: Colors.logoBlue,
  },
});
