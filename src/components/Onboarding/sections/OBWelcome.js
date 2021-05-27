import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import LogoBasic from '../../../icons/LogoBasic';
import Colors from '../../../constants/Colors';

// wireframe page 3
const OBWelcome = () => {
  const {
    h2, h4, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.contentContainer}>
      <View style={styles.logoAndDescriptionContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={[h2, alignCenter, styles.welcomeText]}>Welcome to Discovery</Text>
        </View>
        <LogoBasic height={120} width={120} />
        <View style={styles.descriptionContainer}>
          <Text style={[styles.body, alignCenter]}>
            Use Discovery to inspect your medical Records!
          </Text>
        </View>
      </View>
      <View style={styles.singleWordsContainer}>
        <Text style={[h4, mb5]}>ACCESS</Text>
        <Text style={[h4, mb5]}>EXPLORE</Text>
        <Text style={[h4, mb5]}>ORGANIZE</Text>
        <Text style={[h4, mb5]}>USE</Text>
      </View>
    </View>
  );
};

export default OBWelcome;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  welcomeContainer: {
    width: '100%',
    padding: 8,
    backgroundColor: Colors.logoBlue,
  },
  welcomeText: {
    color: 'white',
  },
  singleWordsContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  logoAndDescriptionContainer: {
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionContainer: {
    paddingHorizontal: 20,
  },
  body: {
    fontSize: 24,
  },
});
