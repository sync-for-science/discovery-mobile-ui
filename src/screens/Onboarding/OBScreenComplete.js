import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import OBTemplate from './OBTemplate';

// wireframe page 21
const SCREEN_NUMBER = 19;

const OBScreenComplete = () => {
  const {
    h2, h4, alignCenter, italic,
  } = TextStyles;
  return (
    <OBTemplate screenNumber={SCREEN_NUMBER}>
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={[h2, alignCenter]}>THANK YOU [USER], YOU’RE ALL SET!</Text>
          <Text style={[h4, alignCenter]}>
            You are now ready to 
            take control of 
            your medical data with
          </Text>
          <View style={styles.logoContainer}>
            <Text style={[h2, alignCenter, italic, styles.tempLogoText]}>LOGO HERE</Text>
          </View>
        </View>
      </View>
    </OBTemplate>
  );
};

export default OBScreenComplete;

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
  descriptionContainer: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
