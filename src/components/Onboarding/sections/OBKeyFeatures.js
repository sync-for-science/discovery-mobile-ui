import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 9
const OBKeyFeatures = () => (
  <OBSectionCoverTemplate title="Key Features of Discovery">
    <Text style={styles.body}>
      Discovery has four panels
    </Text>
    <Text style={[styles.body, styles.boldText]}>
      Collections
    </Text>
    <Text style={[styles.body, styles.boldText]}>
      Updates
    </Text>
    <Text style={[styles.body, styles.boldText]}>
      Summary
    </Text>
    <Text style={[styles.body, styles.boldText]}>
      Profile
    </Text>
    <Text style={[styles.body, styles.bottomDescription]}>
      Each panel helps you make the most of your medical Records.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBKeyFeatures;

const { body3 } = TextStyles;
const { rd3, rd5 } = ResponsiveDimensions;
const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
  boldText: {
    fontWeight: '600',
    marginBottom: rd3,
  },
  bottomDescription: {
    marginTop: rd5,
  },
});
