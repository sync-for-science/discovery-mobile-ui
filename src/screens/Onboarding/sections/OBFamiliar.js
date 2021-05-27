import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';

// wireframe page 11
const OBFamiliar = () => (
  <OBSectionCoverTemplate title="Familiarizing with Discovery">
    <Text style={styles.body}>
      You will now walk through the most important features
      in Discovery that will enable you make the most of your medical records.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBFamiliar;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 60,
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
});