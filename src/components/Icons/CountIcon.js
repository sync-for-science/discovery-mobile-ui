import { bool, func, number, shape, string } from 'prop-types'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import BaseText from '../Generic/BaseText'

const CountIcon = ({
  style,
  shape, 
  color, 
  count, 
  action1, 
  action2, 
  actionDep,
  marginRight,
  marginLeft,
}) => {

  const iconStyle = count > 0 ? {backgroundColor: color} : {borderWidth: 2, borderColor: color}
  const iconCount = count > 0 ? count : null
  const iconAction = actionDep ? action2 : action1
  const iconMarginRight = marginRight ? styles.marginRight : {}
  const iconMarginLeft = marginLeft ? styles.marginLeft : {}

  return (
    <TouchableOpacity 
      style={{
        ...styles.base,
        ...iconMarginRight, 
        ...iconMarginLeft,
        ...styles[shape], 
        ...iconStyle,
        ...style
      }}
      onPress={iconAction}
    >
      <BaseText style={styles.text}>{iconCount}</BaseText>
    </TouchableOpacity>
  )
}

CountIcon.propTypes = {
  style: shape({}),
  shape: string.isRequired,
  color: string.isRequired,
  count: number,
  action1: func,
  action2: func,
  actionDep: bool,
  marginRight: bool,
  marginLeft: bool,
}

CountIcon.defaultProps = {
  style: {},
  count: null,
  action1: () => {},
  action2: () => {},
  actionDep: null,
  marginRight: false,
  marginLeft: false,
}

export default CountIcon

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
  }
})
