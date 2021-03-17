import {
  bool, func, number, shape, string,
} from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import BaseText from '../Generic/BaseText';

const CountIcon = ({
  style,
  shape: iconShape,
  color,
  count,
  action1,
  action2,
  actionDep,
  marginRight,
  marginLeft,
  textColor,
  readOnly,
}) => {
  const iconCount = count > 0 ? count : null;
  const iconStyle = actionDep ? { backgroundColor: color } : { borderWidth: 2, borderColor: color };
  const iconAction = actionDep ? action2 : action1;
  const iconMarginRight = marginRight ? styles.marginRight : {};
  const iconMarginLeft = marginLeft ? styles.marginLeft : {};
  const textColorStyle = textColor ? { color: textColor } : {};

  // console.info('actionDep: ', actionDep);
  // console.info('iconAction: ', iconAction);

  if (readOnly) {
    return (
      <View
        style={{
          ...styles.base,
          ...iconMarginRight,
          ...iconMarginLeft,
          ...styles[iconShape],
          backgroundColor: color,
          ...style,
        }}
        onPress={iconAction}
      >
        <BaseText style={{ ...styles.text, ...textColorStyle }}>{iconCount}</BaseText>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={{
        ...styles.base,
        ...iconMarginRight,
        ...iconMarginLeft,
        ...styles[iconShape],
        ...iconStyle,
        ...style,
      }}
      onPress={iconAction}
    >
      <BaseText style={{ ...styles.text, ...textColorStyle }}>{iconCount}</BaseText>
    </TouchableOpacity>
  );
};

CountIcon.propTypes = {
  style: shape({}),
  shape: string.isRequired,
  color: string.isRequired,
  count: number,
  action1: func.isRequired,
  action2: func.isRequired,
  actionDep: bool,
  marginRight: bool,
  marginLeft: bool,
  textColor: string,
  readOnly: bool,
};

CountIcon.defaultProps = {
  style: {},
  count: null,
  actionDep: null,
  marginRight: false,
  marginLeft: false,
  textColor: null,
  readOnly: false,
};

export default CountIcon;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  base: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    borderRadius: 5,
  },
  circle: {
    borderRadius: 30,
  },
  marginRight: {
    marginRight: 10,
  },
  marginLeft: {
    marginLeft: 10,
  },
});
