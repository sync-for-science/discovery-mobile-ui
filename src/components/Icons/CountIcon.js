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
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

    // disabled icon background per request
    // client said they might revert change so keeping for reference
    // marginRight: 10,
    // backgroundColor: Colors.countIcon,
  },
});
