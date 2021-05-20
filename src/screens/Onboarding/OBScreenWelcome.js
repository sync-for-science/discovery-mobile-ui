import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import discoveryBasic from '../../../assets/images/discovery-basic-logo.png';

// wireframe page 3
const OBScreenWelcome = () => {
  const {
    h2, h4, h5, alignCenter, mb5
  } = TextStyles;
  return (
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
          <Text style={[h5, mb5]}>ACCESS</Text>
          <Text style={[h5, mb5]}>ORGANIZE</Text>
          <Text style={[h5, mb5]}>EXPLORE</Text>
          <Text style={[h5, mb5]}>USE</Text>
        </View>
      </View>
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
    alignItems: 'center',
    paddingTop: 50,
  },
  descriptionContainer: {
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 120,
  },
});
