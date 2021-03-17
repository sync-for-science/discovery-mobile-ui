import {
  bool, func, number, shape, string,
} from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import BaseText from '../Generic/BaseText';
import Colors from '../../constants/Colors';

const ICON_SHAPE = 'circle';

const MarkedIcon = ({
  style,
  count,
  onClick,
  actionDep,
  textColor,
}) => {
  const iconCount = count > 0 ? count : null;
  const iconStyle = actionDep ? {
    backgroundColor: Colors.primary,
  } : {
    borderWidth: 2,
    borderColor: Colors.primary,
  };
  const textColorStyle = textColor ? { color: textColor } : {};

  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles.marginLeft,
        styles.marginRight,
        styles[ICON_SHAPE],
        iconStyle,
        style,
      ]}
      onPress={onClick}
    >
      <BaseText style={{ ...styles.text, ...textColorStyle }}>{iconCount}</BaseText>
    </TouchableOpacity>
  );
};

MarkedIcon.propTypes = {
  style: shape({}),
  count: number,
  onClick: func.isRequired,
  actionDep: bool,
  textColor: string,
};

MarkedIcon.defaultProps = {
  style: {},
  count: null,
  actionDep: null,
  textColor: null,
};

export default React.memo(MarkedIcon);

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
