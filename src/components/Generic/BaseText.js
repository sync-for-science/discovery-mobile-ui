import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { shape, string } from 'prop-types';
import Colors from '../../constants/Colors';

const BaseText = ({ variant, style, children }) => (
  <Text style={[styles.base, styles[variant], style]}>{children}</Text>
);

BaseText.propTypes = {
  variant: string,
  style: shape({}),
  children: string.isRequired,
};

BaseText.defaultProps = {
  variant: null,
  style: null,
};

export default BaseText;

const styles = StyleSheet.create({
  base: {
    color: Colors.baseText,
  },
  header: {
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
  },
  button: {
    color: Colors.primary,
  },
  buttonDestructive: {
    fontSize: 18,
    color: Colors.destructive,
  },
  title: {
    fontWeight: '700',
    color: 'black',
  },
  sectionTitle: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
  },
  screenTitle: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
  },
  bold: {
    fontWeight: '700',
  },
});
