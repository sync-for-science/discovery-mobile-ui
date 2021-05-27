import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

// wireframe page 19
const OBDataAccess1 = () => (
  <OBSectionBodyTemplate title="Data Access" subTitle="Verification">
    <Text style={styles.body}>
      Please provide your name and date of birth to verify pulling
      the correct data from your Provider.
    </Text>
  </OBSectionBodyTemplate>
);

export default OBDataAccess1;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
