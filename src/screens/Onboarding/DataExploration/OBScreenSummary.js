import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';

// wireframe page 14
const SCREEN_NUMBER = 12;
const SECTION_TITLE = 'Data Exploration';
const NEXT_SCREEN = 'Summary';

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
        <Text style={[h5, mb5]}>Summary</Text>
        <Text style={[body1, alignCenter, mb5]}>
          You will be able to see a high level Summary of your data,
          organized by Record Types, and Providers and Practitioners.
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
