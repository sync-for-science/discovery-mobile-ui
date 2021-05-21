import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';
import Colors from '../../../constants/Colors';

// wireframe page 17
const OBCollections4 = () => {
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
          Collections
        </Text>
        <Text style={[alignCenter, mb5, styles.body]}>
          You will be able to add notes to a Collection that can have
          many purposes: wrapping meaning around the Records, logging
          personal information, or journaling.
        </Text>
        <Text style={[alignCenter, mb5, styles.body]}>
          Access the notes for the Collection.
        </Text>
        <Text style={[alignCenter, mb5, styles.body]}>
          Add, remove or modify notes about the Collection.
        </Text>
        <View style={styles.image}>
          <Text>Image</Text>
        </View>
      </View>
    </View>
  );
};

export default OBCollections4;

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
    justifyContent: 'center',
    marginBottom: 20,
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.lightgrey2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
