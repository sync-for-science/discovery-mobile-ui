import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import OBSectionCoverTemplate from '../components/OBSectionCoverTemplate';
import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';

const OBSecurityAndPrivacy = () => (
  <OBSectionCoverTemplate title="Security And Privacy">
    <Text style={styles.body}>
      This version of Discovery operates on fictitious patients from SmartHealthIT.org.
    </Text>
    <Text style={styles.body}>
      Discovery will not access any of your real medical Records.
    </Text>
    <Text style={styles.body}>
      The data you produce during Discovery’s evaluation will stay on your phone,
      unencrypted, and will not be collected by the research team or shared with
      a third party.
    </Text>
    <Text style={styles.body}>
      You will be able to delete those data when you wish by a simple click of a
      dedicated button in the app.
    </Text>
  </OBSectionCoverTemplate>
);

export default OBSecurityAndPrivacy;

const { body4 } = TextStyles;
const { rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  body: {
    ...body4,
    textAlign: 'center',
    marginBottom: rd5,
  },
});
