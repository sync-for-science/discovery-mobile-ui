import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';

// wireframe page 13
const OBYourData = () => {
  const {
    h2, h4, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Image
          style={[styles.logo, mb5]}
          source={discoveryBasic}
          resizeMode="contain"
        />
        <Text style={[h2, alignCenter, mb5]}>Data Organization</Text>
      </View>
      <Text style={[h4, alignCenter, mb5]}>
        Your Data
      </Text>
      <Text style={[alignCenter, mb5, styles.body]}>
        You can group your medical records much as you group photos in your photo albums.
      </Text>
      <Text style={[alignCenter, mb5, styles.body]}>
        Anything you do in this app will be stored in a Collection (analogous to album).
        What this means is that for any questions or issues you may have you will be able
        to identify relevant Records (analogous to photos) and save them under a Collection
        with a convenient name.
      </Text>
      <Text style={[alignCenter, styles.body]}>
        You will be then able to quickly access any Collection you want, at any time,
        and get to those relevant Records instantaneously.
      </Text>
    </View>
  );
};

export default OBYourData;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 60,
    width: 60,
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
  formContainer: {
    width: '100%',
  },
});
