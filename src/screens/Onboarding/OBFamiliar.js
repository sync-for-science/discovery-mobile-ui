import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import discoveryBasic from '../../../assets/images/discovery-basic-logo.png';

// wireframe page 11
const OBFamiliar = () => {
  const {
    h2, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <Text style={[h2, alignCenter, mb5]}>Familiarizing with Discovery</Text>
      <Image
        style={[styles.logo, mb5]}
        source={discoveryBasic}
        resizeMode="contain"
      />
      <Text style={[styles.body, alignCenter]}>
        You will now walk through the most important features
        in Discovery that will enable you make the most of your medical records.
      </Text>
    </View>
  );
};

export default OBFamiliar;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 60,
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
});
