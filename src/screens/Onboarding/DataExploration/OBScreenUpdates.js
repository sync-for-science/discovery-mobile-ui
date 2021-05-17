import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';

// wireframe page 15
const SCREEN_NUMBER = 13;
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
        <Text style={[h5, mb5]}>Updates</Text>
        <Text style={[body1, alignCenter, mb5]}>
          You will be able to see what is latest in your data by selecting a
          corresponding automatically generated Collection and start exploring from there.
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
