import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';
import LogoBasic from '../../../icons/LogoBasic';
import Colors from '../../../constants/Colors';

// wireframe page 3
const OBWelcome = () => (
  <View style={styles.root}>
    <View style={styles.welcomeBannerContainer}>
      <View style={styles.welcomeBanner}>
        <Text style={styles.welcomeText}>Welcome to Discovery</Text>
      </View>
    </View>
    <View style={styles.logoAndDescriptionContainer}>
      <LogoBasic height={hp('15%')} width={hp('15%')} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.body}>
          Use Discovery to inspect your medical Records!
        </Text>
      </View>
    </View>
    <View style={styles.singleWordsContainer}>
      <Text style={styles.singleWords}>ACCESS</Text>
      <Text style={styles.singleWords}>EXPLORE</Text>
      <Text style={styles.singleWords}>ORGANIZE</Text>
      <Text style={styles.singleWords}>USE</Text>
    </View>
  </View>
);

export default OBWelcome;

const {
  h2, h4, body4,
} = TextStyles;
const { rd3, rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  welcomeBannerContainer: {
    height: hp('12%'),
  },
  welcomeBanner: {
    width: '100%',
    padding: rd3,
    backgroundColor: Colors.logoBlue,
  },
  welcomeText: {
    ...h2,
    textAlign: 'center',
    color: 'white',
  },
  singleWordsContainer: {
    alignItems: 'center',
    paddingTop: hp('8%'),
  },
  singleWords: {
    ...h4,
    marginBottom: rd5,
  },
  logoAndDescriptionContainer: {
    height: hp('25%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionContainer: {
    paddingHorizontal: rd5,
  },
  body: {
    ...body4,
    textAlign: 'center',
  },
});
