import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';

// wireframe page 6
const SCREEN_NUMBER = 5;
const SECTION_TITLE = 'Data Organization';
const NEXT_SCREEN = 'Structure';

const OBScreenStructure = () => {
  const {
    h5, body1, alignCenter, mb5,
  } = TextStyles;
  return (
    <OBTemplate screenNumber={SCREEN_NUMBER} sectionTitle={SECTION_TITLE} nextScreen={NEXT_SCREEN}>
      <View style={styles.default}>
        <Text style={[h5, mb5]}>Stucturing of your data</Text>
        <Text style={[body1, alignCenter, mb5]}>
          Your data is organized as follows. You have your individual Records at the bottom.
          Those Records are individual instances of different Record Subtypes, and those
          Record Subtypes can belong to  Record Types. You can have many Record Types in
          your medical data, but below you can see an example just for the Record Type Conditions.
        </Text>
        <View style={styles.image}>
          <Text>Image</Text>
        </View>
      </View>
    </OBTemplate>
  );
};

export default OBScreenStructure;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.lightgrey2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
