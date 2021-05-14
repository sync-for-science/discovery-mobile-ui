import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import OBTemplate from './OBTemplate';

// wireframe page 4
const OBScreenSecurity = () => (
  <OBTemplate screenNumber={1}>
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
