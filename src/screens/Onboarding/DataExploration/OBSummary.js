import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import Colors from '../../../constants/Colors';
import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

// wireframe page 19
const OBSummary = () => (
  <OBSectionBodyTemplate title="Data Exploration" subTitle="Summary">
    <Text style={styles.body}>
      You will be able to see a high level Summary of your data,
      organized by Record Categories, Providers and Practitioners.
    </Text>
    <View style={styles.image}>
      <Text>Image</Text>
    </View>
  </OBSectionBodyTemplate>
);

export default OBSummary;

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
