import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import OBTemplate from './OBTemplate';
import discoveryBasic from '../../../assets/images/discovery-basic-logo.png';

const SCREEN_NUMBER = 1;

// wireframe page 3
const OBScreenWelcome = () => {
  const {
    h2, h4, h5, alignCenter,
  } = TextStyles;
  return (
    // <OBTemplate nextScreen="Security" screenNumber={SCREEN_NUMBER}>
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={[h2, alignCenter]}>Welcome to Discovery</Text>
          <Image
            style={styles.logo}
            source={discoveryBasic}
            resizeMode="contain"
          />
          <Text style={[h4, alignCenter]}>
            What a good time to take control of your medical data!
          </Text>
        </View>
        <View style={styles.singleWordsContainer}>
          <Text style={h5}>ACCESS</Text>
          <Text style={h5}>ORGANIZE</Text>
          <Text style={h5}>EXPLORE</Text>
          <Text style={h5}>USE</Text>
        </View>
      </View>
    // </OBTemplate>
  );
};

export default OBScreenWelcome;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  tempLogoText: {
    color: Colors.lightgrey,
  },
  navigationContainer: {
    alignItems: 'center',
  },
  singleWordsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  descriptionContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    height: 120,
  },
});
