import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import OBBullet from '../components/OBBullet';

// wireframe page 12
const OBKeyFeatures3 = () => (
  <OBSectionBodyTemplate title="Key Features" subTitle="Collections">
    <Text style={styles.header}>
      Analyze Collection
    </Text>
    <OBBullet number={1} text="View a Collection with the support of the Timeline." />
    <OBBullet
      number={2}
      text="Highlight medical events in the Timeline to find patterns of occurrence."
    />
    <OBBullet
      number={3}
      text="Sort the relevant Records in different ways to reveal interesting patterns."
    />
  </OBSectionBodyTemplate>
);

export default OBKeyFeatures3;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
