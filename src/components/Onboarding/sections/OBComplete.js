import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { func } from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';
import LogoBasic from '../../../icons/LogoBasic';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 24
const OBComplete = ({ handleOnboardingState }) => (
  <View style={styles.root}>
    <View style={styles.thankYouContainer}>
      <Text style={styles.thankYouText}>Thank you Jonathan,</Text>
      <Text style={styles.thankYouText}>you&apos;re all set!</Text>
    </View>
    <TouchableOpacity onPress={() => handleOnboardingState(true)}>
      <View style={styles.logoContainer}>
        <LogoBasic height={hp('18%')} width={hp('18%')} />
      </View>
      <View style={styles.tapToStartContainer}>
        <MaterialCommunityIcons name="chevron-double-up" size={60} color={Colors.logoBlue} />
        <Text style={[styles.body, styles.tapToStartText]}>Tap to Start</Text>
      </View>
    </TouchableOpacity>
  </View>
);

OBComplete.propTypes = {
  handleOnboardingState: func.isRequired,
};

export default OBComplete;

const { h2, body4 } = TextStyles;
const {
  rd2, rd3, rd5, rd6,
} = ResponsiveDimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: rd2,
  },
  body: {
    ...body4,
    textAlign: 'center',
    marginBottom: rd5,
  },
  thankYouContainer: {
    width: '100%',
    backgroundColor: Colors.logoBlue,
    padding: rd3,
    marginBottom: rd6,

  },
  thankYouText: {
    ...h2,
    color: 'white',
    textAlign: 'center',
  },
  tapToStartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tapToStartText: {
    color: Colors.logoBlue,
  },
});
