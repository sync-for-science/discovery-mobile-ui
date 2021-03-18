import {
  bool, func, number,
} from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import BaseText from '../Generic/BaseText';
import Colors from '../../constants/Colors';

const MarkedIcon = ({
  count,
  onClick,
  hasMarked,
}) => {
  const iconCount = count > 0 ? count : null;
  const iconStyle = hasMarked ? {
    backgroundColor: Colors.primary,
  } : {
    borderWidth: 2,
    borderColor: Colors.primary,
  };

  return (
    <TouchableOpacity
      style={[
        styles.base,
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
  hasMarked: bool.isRequired,
};

MarkedIcon.defaultProps = {
  count: null,
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
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 30,
  },
});
