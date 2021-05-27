import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';

// wireframe page 18
const OBDataAccess = () => (
  <OBSectionCoverTemplate title="Data Access">
    <Text style={styles.body}>
      Discovery will guide you through getting your medical Records
      from your healthcare Providers.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBDataAccess;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
