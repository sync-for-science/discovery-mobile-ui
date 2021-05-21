import React from 'react';
import {
  StyleSheet, Text, Button,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';

// wireframe page 5
const OBSecurity = () => (
  <OBSectionCoverTemplate title="Security">
    <Text style={styles.body}>
      Discovery pulls your medical records from your
      providers in a secure encrypted  manner.
    </Text>
    <Text style={styles.body}>
      Your records are kept encrypted on the phone and
      are only visible while using the Discovery App.
    </Text>
    <Text style={styles.body}>
      They are never copied or shared with any other
      application or service.
    </Text>
    <Button title="Read more about safety" />
  </OBSectionCoverTemplate>
);

export default OBSecurity;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
