import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';

// wireframe page 6
const OBPersonal1 = () => {
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
        <Text style={[h2, alignCenter, mb5]}>Data Access</Text>
      </View>
      <Text style={[h4, alignCenter, mb5]}>
        Personal Information
      </Text>
      <Text style={[styles.body, alignCenter, mb5]}>
        Discovery will ask for your name and date of birth to make
        sure it is pulling the right data from your Provider.
      </Text>
    </View>
  );
};

export default OBPersonal1;

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
});
