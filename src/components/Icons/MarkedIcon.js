import {
  bool, func, number,
} from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import BaseText from '../Generic/BaseText';
import Colors from '../../constants/Colors';

const ICON_SHAPE = 'circle';

const MarkedIcon = ({
  count,
  onClick,
  actionDep,
}) => {
  const iconCount = count > 0 ? count : null;
  const iconStyle = actionDep ? {
    backgroundColor: Colors.primary,
  } : {
    borderWidth: 2,
    borderColor: Colors.primary,
  };

  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles.marginLeft,
        styles.marginRight,
        styles[ICON_SHAPE],
        iconStyle,
      ]}
      onPress={onClick}
    >
      <BaseText style={{ ...styles.text }}>{iconCount}</BaseText>
    </TouchableOpacity>
  );
};

MarkedIcon.propTypes = {
  count: number,
  onClick: func.isRequired,
  actionDep: bool,
};

MarkedIcon.defaultProps = {
  count: null,
  actionDep: null,
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
