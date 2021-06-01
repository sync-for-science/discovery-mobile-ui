import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 18
const OBDataAccess = () => (
  <OBSectionCoverTemplate title="Data Access">
    <Text style={styles.body}>
      Discovery will guide you through getting your medical Records
      from your healthcare Providers.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBDataAccess;

const { body3 } = TextStyles;
const { rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
});

