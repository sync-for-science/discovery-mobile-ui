import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';

// wireframe page 18
const OBDisplaying = () => (
  <OBSectionBodyTemplate title="Data Organization" subTitle="Displaying Your Data">
    <Text style={styles.body}>
      You will be able to see a high level summary of your medical
      records and get updated on what is latest.
    </Text>
    <Text style={styles.body}>
      All of your medical Records will be visually organized in a
      Catalog following previous description: a Record Category has
      Record Types and those have individual Records.
    </Text>
    <Text style={styles.body}>
      This structure will be displayed in a way that allows easy
      exploration with a help of a Timeline that shows when medical
      events captured in the Records took place.
    </Text>
  </OBSectionBodyTemplate>
);

export default OBDisplaying;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
