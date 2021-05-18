import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';

// wireframe page 18
const SCREEN_NUMBER = 16;
const SECTION_TITLE = 'Data Exploration';
const NEXT_SCREEN = 'Use';

const OBScreenCatalog3 = () => {
  const {
    h5, body1, alignCenter, mb5,
  } = TextStyles;
  return (
    <OBTemplate
      screenNumber={SCREEN_NUMBER}
      sectionTitle={SECTION_TITLE}
      nextScreen={NEXT_SCREEN}
      dotNav={[3, 3]}
    >
      <View style={styles.default}>
        <Text style={[h5, mb5]}>Catalog</Text>
        <Text style={[body1, alignCenter, mb5]}>
          Highlight medical events you are interested in, like the
          times the example patient had high blood pressure and high body weight.
        </Text>
        <View style={styles.image}>
          <Text>Image</Text>
        </View>
      </View>
    </OBTemplate>
  );
};

export default OBScreenCatalog3;

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
