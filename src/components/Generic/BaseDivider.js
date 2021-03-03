import React from 'react';
import { StyleSheet, View } from 'react-native';
import { string } from 'prop-types';

import Colors from '../../constants/Colors';

const BaseDivider = ({ color }) => (
  <View style={{ ...styles.divider, borderBottomColor: color }} />
);

BaseDivider.propTypes = {
  color: string,
};

BaseDivider.defaultProps = {
  color: null,
};

export default BaseDivider;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
});
