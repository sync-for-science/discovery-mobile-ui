import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import OBTemplate from './OBTemplate';

const SCREEN_NUMBER = 2;

// wireframe page 4
const OBScreenSecurity = () => (
  <OBTemplate screenNumber={SCREEN_NUMBER}>
    <View style={styles.default}>
      <Text>hello</Text>
    </View>
  </OBTemplate>
);

export default OBScreenSecurity;

const styles = StyleSheet.create({
  default: {
    flex: 1,
  },
});
