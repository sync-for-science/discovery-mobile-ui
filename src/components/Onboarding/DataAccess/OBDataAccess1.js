import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

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

const { body3 } = TextStyles;
const { rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
