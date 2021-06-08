import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { bool, number } from 'prop-types';

const HeaderCountIcon = ({ count, outline }) => {
  const containerStyle = [styles.container];
  const textStyle = [styles.text];
  if (outline) {
    containerStyle.push(styles.containerOutline);
    textStyle.push(styles.textOutline);
  }
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{count}</Text>
    </View>
  );
};

HeaderCountIcon.propTypes = {
  count: number.isRequired,
  outline: bool,
};

HeaderCountIcon.defaultProps = {
  outline: false,
};

export default HeaderCountIcon;

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
  },
  containerOutline: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
  },
  textOutline: {
    fontSize: 14,
  },
});
