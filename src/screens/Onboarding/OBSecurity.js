import React from 'react';
import {
  StyleSheet, Text, Button,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import OBSectionTemplate from './OBSectionTemplate';

// wireframe page 5
const OBSecurity = () => {
  const {
    alignCenter, mb5,
  } = TextStyles;
  return (
    <OBSectionTemplate title="Security">
      <Text style={[styles.body, alignCenter, mb5]}>
        Discovery pulls your medical records from your
        providers in a secure encrypted  manner.
      </Text>
      <Text style={[styles.body, alignCenter, mb5]}>
        Your records are kept encrypted on the phone and
        are only visible while using the Discovery App.
      </Text>
      <Text style={[styles.body, alignCenter, mb5]}>
        They are never copied or shared with any other
        application or service.
      </Text>
      <Button title="Read more about safety" />
    </OBSectionTemplate>
  );
};

export default OBSecurity;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
});
