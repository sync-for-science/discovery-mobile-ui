import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import OBSectionBodyTemplate from '../OBSectionBodyTemplate';

// wireframe page 6
const OBPersonal1 = () => {
  const {
    alignCenter, mb5,
  } = TextStyles;

  return (
    <OBSectionBodyTemplate
      title="Data Access"
      subTitle="Personal Information"
    >
      <Text style={[styles.body, alignCenter, mb5]}>
        Discovery will ask for your name and date of birth to make
        sure it is pulling the right data from your Provider.
      </Text>
    </OBSectionBodyTemplate>
  );
};

export default OBPersonal1;

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
});
