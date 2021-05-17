import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';

// wireframe page 11
const SCREEN_NUMBER = 9;
const SECTION_TITLE = 'Data Organization';
const NEXT_SCREEN = 'Collections3';

const OBScreenCollection2 = () => {
  const {
    h5, body1, alignCenter, mb2, mb5,
  } = TextStyles;
  return (
    <OBTemplate
      screenNumber={SCREEN_NUMBER}
      sectionTitle={SECTION_TITLE}
      nextScreen={NEXT_SCREEN}
      dotNav={[2, 4]}
    >
      <View style={styles.default}>
        <Text style={[h5, mb5]}>Collections</Text>
        <Text style={[body1, alignCenter, mb5]}>
          Preview or edit Collection by sorting the relevant Records 
          in a way that matters to your question.
        </Text>
        <Text style={[body1, alignCenter, mb2]}>
          Access the notes for the Collection.
        </Text>
        <View style={styles.image}>
          <Text>Image</Text>
        </View>
      </View>
    </OBTemplate>
  );
};

export default OBScreenCollection2;

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
