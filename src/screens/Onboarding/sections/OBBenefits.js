import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';

// wireframe page 4
const OBBenefits = () => (
  <OBSectionCoverTemplate title="Benefits of using Discovery">
    <Text style={styles.body}>
      Discovery enables you to organize your digital medical records in
      collections - just like you organize digital photos in albums.
    </Text>
    <Text style={styles.body}>
      You create collections by adding or removing medical records
      and you can later add or remove records, too.
    </Text>
    <Text style={styles.body}>
      You can add any number of notes to a collection to journal
      your health concerns or for doctor visits.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBBenefits;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
