import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { shape, string } from 'prop-types';
import Colors from '../../constants/Colors';

const BaseText = ({ variant, style, children }) => {
  const formattedChildren = variant === 'header' ? children?.toUpperCase() : children;

  return (
    <Text style={{ ...styles.base, ...styles[variant], ...style }}>{formattedChildren}</Text>
  );
};

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
    fontWeight: '700',
    color: Colors.primary,
  },
  title: {
    fontWeight: '700',
    color: 'black',
  },
  screenTitle: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
  },
  bold: {
    fontWeight: '700'
  }
});
