import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import discoveryBasic from '../../../../assets/images/discovery-basic-logo.png';
import Colors from '../../../constants/Colors';

// wireframe page 15
const OBScreenCollections1 = () => {
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
          Preview or edit a Collection by picking and choosing relevant
          records with a help of a timeline.
        </Text>
        <View style={styles.image}>
          <Text>Image</Text>
        </View>
      </View>
    </View>
  );
};

export default OBScreenCollections1;

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
