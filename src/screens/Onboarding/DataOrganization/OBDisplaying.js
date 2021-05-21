import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';

// wireframe page 18
const OBDisplaying = () => {
  const {
    h2, h4, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.root}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Image
            style={[styles.logo, mb5]}
            source={discoveryBasic}
            resizeMode="contain"
          />
          <Text style={[h2, alignCenter, mb5]}>Data Organization</Text>
        </View>
        <Text style={[h4, alignCenter, mb5]}>
          Displaying Your Data
        </Text>
        <Text style={[alignCenter, mb5, styles.body]}>
          You will be able to see a high level summary of your medical
          records and get updated on what is latest.
        </Text>
        <Text style={[alignCenter, mb5, styles.body]}>
          All of your medical Records will be visually organized in a
          Catalog following previous description: a Record Category has
          Record Types and those have individual Records.
        </Text>
        <Text style={[alignCenter, mb5, styles.body]}>
          This structure will be displayed in a way that allows easy
          exploration with a help of a Timeline that shows when medical
          events captured in the Records took place.
        </Text>
      </View>
    </View>
  );
};

export default OBDisplaying;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  contentContainer: {
    width: '100%',
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
});
