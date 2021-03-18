import {
  number
} from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../../constants/Colors'

const CountIcon = ({
  count,
}) => {

  return (
    <View style={styles.base} >
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

CountIcon.propTypes = {
  count: number.isRequired,
};


export default CountIcon;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  base: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: Colors.lightgrey
  },
});
