import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';

// wireframe page 4
const OBBenefits = () => (
  <OBSectionCoverTemplate title="Benefits">
    <Text style={styles.body}>
      Organize your medical Records in Collections just like you
      organize photos in albums.
    </Text>
    <Text style={styles.body}>
      Add Notes to journal your health concerns.
    </Text>
    <Text style={styles.body}>
      Use your Collections during doctor visits for context,
      evidence, and reminders.
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
