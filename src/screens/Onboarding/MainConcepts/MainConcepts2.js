import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import Colors from '../../../constants/Colors';

// wireframe page 7
const OBMainConcepts2 = () => (
  <OBSectionBodyTemplate title="Main Concepts" subTitle="Collections">
    <Text style={styles.body}>
      Organize your medical Records as you organize photos in albums.
    </Text>
    <Text style={styles.body}>
      For any health concern identify and save relevant Records in a
      Collection with a suitable name.
    </Text>
    <Text style={styles.body}>
      Access any Collection you want, at any time.
    </Text>
    <View style={styles.image}>
      <Text>Image</Text>
    </View>
  </OBSectionBodyTemplate>
);

export default OBMainConcepts2;

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
