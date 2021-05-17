import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';

import OBTemplate from '../OBTemplate';
import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';

const SCREEN_NUMBER = 2;
const SECTION_TITLE = 'Data Access';
const NEXT_SCREEN = "Info"

// wireframe page 4
const OBScreenSecurity = () => {
  const {
    h4, h6, alignCenter, mb5,
  } = TextStyles;
  return (
    <OBTemplate screenNumber={SCREEN_NUMBER} sectionTitle={SECTION_TITLE} nextScreen={NEXT_SCREEN}>
      <View style={styles.default}>
        <Text style={[h4, mb5]}>Security</Text>
        <Text style={[h6, alignCenter, mb5]}>
          You will access your real medical data using Discovery in t
          he safest manner possible.
        </Text>
        <Text style={[h6, alignCenter, mb5]}>
          We will never see or share your data. Encrypted medical
          data may be stored only on your phone, visible to only you
          and nobody else.
        </Text>
        <TouchableOpacity>
          <Text style={[h6, alignCenter, mb5, styles.button]}>
            Read more about safety
          </Text>
        </TouchableOpacity>
      </View>
    </OBTemplate>
  );
};

export default OBScreenSecurity;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    color: Colors.primary,
  },
});
