import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TextStyles from '../../../constants/TextStyles';
import Spacing from '../../../constants/Spacing';
import LogoBasic from '../../../icons/LogoBasic';
import Colors from '../../../constants/Colors';

// wireframe page 3
const OBWelcome = () => (
  <View style={styles.contentContainer}>
    <View style={styles.logoAndDescriptionContainer}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to Discovery</Text>
      </View>
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
  h2, h4, h5,
} = TextStyles;
const { s3, s5 } = Spacing;
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  welcomeContainer: {
    width: '100%',
    padding: s3,
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
    marginBottom: s5,
  },
  logoAndDescriptionContainer: {
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionContainer: {
    paddingHorizontal: s5,
  },
  body: {
    ...h5,
    fontWeight: '400',
    textAlign: 'center',
  },
});
