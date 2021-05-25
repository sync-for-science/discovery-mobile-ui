import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';
import LogoBasic from '../../../icons/LogoBasic'

// wireframe page 25
const OBComplete = () => {
  const {
    h2, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <Text style={[h2, alignCenter, mb5]}>THANK YOU [USER], YOU’RE ALL SET!</Text>
      <View style={styles.logoContainer}>
        <LogoBasic height={60} width={60}/>
      </View>
      <Text style={[styles.body, alignCenter, mb5]}>
        See how Discovery works on a fictitious patient!
      </Text>
      <View style={styles.image}>
        <Text>Video</Text>
      </View>
    </View>
  );
};

export default OBComplete;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.lightgrey2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
