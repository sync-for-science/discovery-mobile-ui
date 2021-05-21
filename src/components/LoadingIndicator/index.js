import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';

const LoadingIndicator = () => (
  <View style={styles.spinnerContainer}>
    <ActivityIndicator size="large" color={Colors.primary} />
  </View>
);

export default LoadingIndicator;

const styles = StyleSheet.create({
  spinnerContainer: {
    margin: 16,
  },
});
