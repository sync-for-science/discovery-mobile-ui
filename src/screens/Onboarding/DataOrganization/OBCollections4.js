import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

// wireframe page 17
const OBCollections4 = () => (
  <OBSectionBodyTemplate title="Data Organization" subTitle="Collections">
    <Text style={styles.body}>
      You will be able to add notes to a Collection that can have
      many purposes: wrapping meaning around the Records, logging
      personal information, or journaling.
    </Text>
    <Text style={styles.body}>
      Access the notes for the Collection.
    </Text>
    <Text style={styles.body}>
      Add, remove or modify notes about the Collection.
    </Text>
    <View style={styles.image}>
      <Text>Image</Text>
    </View>
  </OBSectionBodyTemplate>
);

export default OBCollections4;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.lightgrey2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
