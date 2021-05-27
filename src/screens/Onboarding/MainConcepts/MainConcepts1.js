import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import Colors from '../../../constants/Colors';

// wireframe page 6
const OBMainConcepts1 = () => (
  <OBSectionBodyTemplate title="Main Concepts" subTitle="Records">
    <Text style={styles.body}>
      Providers deliver your medical information in individual Records.
    </Text>
    <Text style={styles.body}>
      Each medical Record belongs to a category (Vital Signs, Conditions,
      etc.) and has a type (Vital Signs: Blood Pressure, Body Weight, etc.).
    </Text>
    <Text style={styles.body}>
      Records have a specific finding with date, values, active status, etc.
    </Text>
    <View style={styles.image}>
      <Text>Image</Text>
    </View>
  </OBSectionBodyTemplate>
);

export default OBMainConcepts1;

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
