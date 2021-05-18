import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import OBTemplate from './OBTemplate';
import discoveryFull from '../../../assets/images/discovery-full-logo.png';

// wireframe page 21
const SCREEN_NUMBER = 19;

const OBScreenComplete = () => {
  const {
    h2, h4, alignCenter,
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
          <Image
            style={[styles.logo]}
            source={discoveryFull}
            resizeMode="contain"
          />
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
  logo: {
    height: 280,
  },
});
