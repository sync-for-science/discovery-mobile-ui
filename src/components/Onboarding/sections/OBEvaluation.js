import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

const OBEvaluation = () => (
  <OBSectionCoverTemplate title="Evaluation">
    <Text style={styles.body}>
      For the evaluation purposes, you will be prompted to pick a fictitious
      patient upon being introduced with Discovery.
    </Text>
    <Text style={styles.body}>
      The following explanation about how Discovery works, will be formulated
      such that it feels like you will be inspecting your own data.
    </Text>
    <Text style={styles.body}>
      This is for learning and motivation purposes to engage deeper with the
      fictitious patient’s data in the evaluation.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBEvaluation;

const { body4 } = TextStyles;
const { rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  body: {
    ...body4,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
