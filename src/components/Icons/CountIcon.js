import {
  number,
} from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CountIcon = ({
  count,
}) => (
  <View style={styles.base}>
    <Text style={styles.text}>{count}</Text>
  </View>
);

CountIcon.propTypes = {
  count: number.isRequired,
};

export default CountIcon;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  base: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
