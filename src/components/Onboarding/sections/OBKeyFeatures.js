import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';

// wireframe page 9
const OBKeyFeatures = () => (
  <OBSectionCoverTemplate title="Key Features of Discovery">
    <Text style={styles.body}>
      Discovery has four panels
    </Text>
    <Text style={[styles.body, styles.boldText]}>
      Collections
    </Text>
    <Text style={[styles.body, styles.boldText]}>
      Updates
    </Text>
    <Text style={[styles.body, styles.boldText]}>
      Summary
    </Text>
    <Text style={[styles.body, styles.boldText]}>
      Profile
    </Text>
    <Text style={[styles.body, styles.bottomDescription]}>
      Each panel helps you make the most of your medical Records.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBKeyFeatures;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: '600',
    marginBottom: 12,
  },
  bottomDescription: {
    marginTop: 12,
  },
});
