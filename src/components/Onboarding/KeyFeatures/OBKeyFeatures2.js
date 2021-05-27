import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import OBBullet from '../components/OBBullet';

// wireframe page 11
const OBKeyFeatures2 = () => (
  <OBSectionBodyTemplate title="Key Features" subTitle="Collections">
    <Text style={styles.header}>
      Add Notes to a Collection
    </Text>
    <OBBullet number={1} text="Add, edit, or delete notes about the Collection." />
    <OBBullet
      number={2}
      text="Add, edit, or delete notes about the individual Records from the Collection."
    />
  </OBSectionBodyTemplate>
);

export default OBKeyFeatures2;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
