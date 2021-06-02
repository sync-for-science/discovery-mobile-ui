import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 5
const OBMainConcepts = () => (
  <OBSectionCoverTemplate title="Main Concepts">
    <Text style={styles.body}>
      Discovery is a simple application that relies on three main
      concepts: Records, Collections and Notes.
    </Text>
    <Text style={styles.body}>
      Learn more about these in the next few pages.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBMainConcepts;

const { body4 } = TextStyles;
const { rd5 } = ResponsiveDimensions;
const styles = StyleSheet.create({
  body: {
    ...body4,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
