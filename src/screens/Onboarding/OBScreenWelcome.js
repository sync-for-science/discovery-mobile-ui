import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import OBTemplate from './OBTemplate';

const SCREEN_NUMBER = 1;

// wireframe page 3
const OBScreenWelcome = () => {
  const {
    h1, h2, h4, h5, alignCenter, italic,
  } = TextStyles;
  return (
    <OBTemplate nextScreen="Security" screenNumber={SCREEN_NUMBER}>
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={h1}>Welcome to Discovery</Text>
          <View style={styles.logoContainer}>
            <Text style={[h2, alignCenter, italic, styles.tempLogoText]}>LOGO HERE</Text>
          </View>
          <Text style={[h4, alignCenter]}>
            Use Discovery to explore your personal medical data
          </Text>
        </View>
        <View style={styles.singleWordsContainer}>
          <Text style={h5}>ACCESS</Text>
          <Text style={h5}>ORGANIZE</Text>
          <Text style={h5}>EXPLORE</Text>
          <Text style={h5}>USE</Text>
        </View>
      </View>
    </OBTemplate>
  );
};

export default OBScreenWelcome;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginVertical: 40,
  },
  logoContainer: {
    height: 100,
    width: 100,
    backgroundColor: Colors.mediumgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempLogoText: {
    color: Colors.lightgrey,
  },
  navigationContainer: {
    alignItems: 'center',
  },
  singleWordsContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  descriptionContainer: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
