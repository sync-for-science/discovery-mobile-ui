import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';

// wireframe page 5
const OBMainConceptsSection = () => (
  <OBSectionCoverTemplate title="Main Concepts">
    <Text style={styles.body}>
      Discovery is a simple application that relies on three main
      concepts: Records, Collections and Notes.
    </Text>
    <Text style={styles.body}>
      Learn more about these in the next few pages.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBMainConceptsSection;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
