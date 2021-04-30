import { StyleSheet, Text } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const TypeFilterTitle = () => (
  <Text style={styles.title}>Record Type</Text>
);

export default TypeFilterTitle;

const styles = StyleSheet.create({
  title: {
    backgroundColor: Colors.secondary,
    color: 'white',
    marginBottom: 8,
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
  },
});
