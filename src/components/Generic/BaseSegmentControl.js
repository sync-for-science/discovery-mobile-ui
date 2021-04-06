import React from 'react'
import { StyleSheet } from 'react-native'
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const BaseSegmentControl = ({values, selectedIndex, handleChange, activeColor = null}) => {
  const tintColor = activeColor ? activeColor : "lightblue"
  return (
    <SegmentedControl
      values={values}
      selectedIndex={selectedIndex}
      onChange={(event) => {
        handleChange(event.nativeEvent.selectedSegmentIndex);
      }}
      fontStyle={styles.scFontStyle}
      activeFontStyle={styles.scActiveFontStyle}
      tintColor={tintColor}
    />
  )
}

export default BaseSegmentControl

const styles = StyleSheet.create({
  scFontStyle: {
    fontSize: 16, 
    color: 'black'
  },
  scActiveFontStyle: {
    fontSize: 16
  }
})
