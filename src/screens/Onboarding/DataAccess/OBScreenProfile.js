import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';

// wireframe page 6
const SCREEN_NUMBER = 4;
const SECTION_TITLE = 'Data Access';
const NEXT_SCREEN = 'Info';

const OBScreenProfile = () => {
  const {
    h5, h6, body1, alignCenter, mb5,
  } = TextStyles;
  return (
    <OBTemplate screenNumber={SCREEN_NUMBER} sectionTitle={SECTION_TITLE} nextScreen={NEXT_SCREEN}>
      <View style={styles.default}>
        <Text style={[h5, mb5]}>Profile</Text>
        <Text style={[body1, alignCenter]}>
          Well done Jonathan!
        </Text>
        <Text style={[body1, alignCenter, mb5]}>
          Discovery can now bring your medical data at your fingertips whenever you need it.
        </Text>
        <Text style={[body1, alignCenter, mb5]}>
          We will now use the information you just provided to create a Profile for you.
          This is important for establishing ground truth for you data and checking
          for discrepancies against the data your providers have about you.
          To achieve this, we will need a bit more information about you.
        </Text>
        <TouchableOpacity>
          <View style={styles.actionContainer}>
            <Text style={[h6, alignCenter]}>
              Additional information to collect.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </OBTemplate>
  );
};

export default OBScreenProfile;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
  },
  actionContainer: {
    backgroundColor: Colors.lightgrey2,
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
});
