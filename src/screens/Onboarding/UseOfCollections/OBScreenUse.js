import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';

// wireframe page 19
const SCREEN_NUMBER = 17;
const SECTION_TITLE = 'Use of Collections';
const NEXT_SCREEN = 'Use';

const OBScreenUse = () => {
  const {
    body1, alignCenter,
  } = TextStyles;
  return (
    <OBTemplate
      screenNumber={SCREEN_NUMBER}
      sectionTitle={SECTION_TITLE}
      nextScreen={NEXT_SCREEN}
    >
      <View style={styles.default}>
        <Text style={[body1, alignCenter]}>
          You can use the Collections in various scenarios such as
          journaling on a specific health topic, context and evidence
          providers, reminders and discussion drivers in clinical
          visits or conversations with peers.
        </Text>
      </View>
    </OBTemplate>
  );
};

export default OBScreenUse;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
  },
});
