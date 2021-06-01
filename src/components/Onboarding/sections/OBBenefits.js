import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 4
const OBBenefits = () => (
  <OBSectionCoverTemplate title="Benefits">
    <Text style={styles.body}>
      Organize your medical Records in Collections just like you
      organize photos in albums.
    </Text>
    <Text style={styles.body}>
      Add Notes to journal your health concerns.
    </Text>
    <Text style={styles.body}>
      Use your Collections during doctor visits for context,
      evidence, and reminders.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBBenefits;

const { body3 } = TextStyles;
const { rd5 } = ResponsiveDimensions;
const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
