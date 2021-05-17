import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';

const SCREEN_NUMBER = 3;
const SECTION_TITLE = 'Data Access';
const NEXT_SCREEN = 'Info';

// wireframe page 5
const OBScreenInfo = () => {
  const {
    h5, h6, mb5, alignCenter, body1,
  } = TextStyles;
  return (
    <OBTemplate screenNumber={SCREEN_NUMBER} sectionTitle={SECTION_TITLE} nextScreen={NEXT_SCREEN}>
      <View style={styles.contentContainer}>
        <Text style={[h5, mb5]}>Information for data access</Text>
        <Text style={[body1, alignCenter, mb5]}>
          We will need some information from you to help you get
          instant access to your medical data from multiple
          providers at once.
        </Text>
        <View style={styles.dataNeededContainer}>
          <Text style={h6}>Data needed to access EHR data</Text>
        </View>
      </View>
    </OBTemplate>
  );
};

export default OBScreenInfo;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dataNeededContainer: {
    backgroundColor: Colors.lightgrey2,
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
});
