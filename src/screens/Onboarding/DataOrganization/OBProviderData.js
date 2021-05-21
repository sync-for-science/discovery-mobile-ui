import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

// wireframe page 12
const OBProviderData = () => (
  <OBSectionBodyTemplate title="Data Organization" subTitle="Provider Data">
    <Text style={styles.body}>
      Providers deliver your medical information to Discovery in individual Records.
    </Text>
    <Text style={styles.body}>
      Each Record is about one category of data (Conditions, Lab Results, Procedures, etc.)
      and is further characterized by a specific type (Acute bronchitis and Sprained ankle
      in the case of Conditions, for example).
    </Text>
    <Text style={styles.body}>
      Finally, Records that have the same specific type differentiate by the time they
      took place and other parameters such as value or status, among many others.
    </Text>
  </OBSectionBodyTemplate>
);

export default OBProviderData;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
