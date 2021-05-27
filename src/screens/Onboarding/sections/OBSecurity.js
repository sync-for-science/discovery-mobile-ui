import React from 'react';
import {
  StyleSheet, Text, Button,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';

// wireframe page 17
const OBSecurity = () => (
  <OBSectionCoverTemplate title="Security">
    <Text style={styles.body}>
      Discovery gets your medical Records using a secure digital protocol.
    </Text>
    <Text style={styles.body}>
      Your Records are then kept encrypted on your phone and are only
      visible while using Discovery and are never copied or shared
      with any other application or service.
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
