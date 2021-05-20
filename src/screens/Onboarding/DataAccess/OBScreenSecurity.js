import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';

import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';

// wireframe page 4
const OBScreenSecurity = () => {
  const {
    h5, h6, body1, alignCenter, mb5,
  } = TextStyles;
  return (
    <View style={styles.default}>
      <Text style={[h5, mb5]}>Security</Text>
      <Text style={[body1, alignCenter, mb5]}>
        You will access your real medical data using Discovery in t
        he safest manner possible.
      </Text>
      <Text style={[body1, alignCenter, mb5]}>
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
