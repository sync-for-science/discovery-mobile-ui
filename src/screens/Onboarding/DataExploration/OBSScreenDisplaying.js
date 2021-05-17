import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';

// wireframe page 13
const SCREEN_NUMBER = 11;
const SECTION_TITLE = 'Data Exploration';
const NEXT_SCREEN = 'Displaying';

const OBSCreenDisplaying = () => {
  const {
    h5, body1, alignCenter, mb5,
  } = TextStyles;
  return (
    <OBTemplate
      screenNumber={SCREEN_NUMBER}
      sectionTitle={SECTION_TITLE}
      nextScreen={NEXT_SCREEN}
    >
      <View style={styles.default}>
        <Text style={[h5, mb5]}>Displaying Your Data</Text>
        <Text style={[body1, alignCenter, mb5]}>
          You will be able to see a high level summary of your medical
          data and get updated on what is latest.
        </Text>
        <Text style={[body1, alignCenter]}>
          All of your medical Records will be visually organized in a Catalog
          following a previously described structure: a Record Type has Record
          Subtypes and those have Records. This structure will be displayed in
          a way that allows easy exploration with a help of a Timeline that
          shows when medical events captured in the Records took place.
        </Text>
      </View>
    </OBTemplate>
  );
};

export default OBSCreenDisplaying;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
  },
});
