import React from 'react';
import {
  StyleSheet, Text, Button,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

// wireframe page 17
const OBSecurity = () => (
  <OBSectionCoverTemplate title="Security">
    <Text style={styles.body}>
      Discovery gets your medical Records using a secure digital protocol.
    </Text>
    <Text style={styles.body}>
      Your Records are then kept encrypted on your phone and are only
      visible while using Discovery and are never copied or shared
      with any other application or service.
    </Text>
    <Button title="Read more about safety" />
  </OBSectionCoverTemplate>
);

export default OBSecurity;

const { body3 } = TextStyles;
const { rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  body: {
    ...body3,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
