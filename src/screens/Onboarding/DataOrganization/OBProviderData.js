import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';

// wireframe page 12
const OBProviderData = () => {
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
        Provider Data
      </Text>
      <Text style={[alignCenter, mb5, styles.body]}>
        Providers deliver your medical information to Discovery in individual Records.
      </Text>
      <Text style={[alignCenter, mb5, styles.body]}>
        Each Record is about one category of data (Conditions, Lab Results, Procedures, etc.)
        and is further characterized by a specific type (Acute bronchitis and Sprained ankle
        in the case of Conditions, for example).
      </Text>
      <Text style={[alignCenter, styles.body]}>
        Finally, Records that have the same specific type differentiate by the time they
        took place and other parameters such as value or status, among many others.
      </Text>
    </View>
  );
};

export default OBProviderData;

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
    justifyContent: 'center',
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
  formContainer: {
    width: '100%',
  },
});
