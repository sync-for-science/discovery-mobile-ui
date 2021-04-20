import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import BaseText from '../Generic/BaseText'

const SortingHeader = ({sortingIndex, setSortingIndex}) => {
  const buttonNames = ["Record Type", "Record Date", "Time Saved"]

  return (
    <View style={styles.root}>
      {buttonNames.map((buttonName, index) => {
        const isSelected = sortingIndex === index
        const textStyle = isSelected ? "title" : ""
        return (
          <TouchableOpacity style={styles.button} onPress={() => setSortingIndex(index)}>
            <BaseText variant={textStyle}>{buttonName}</BaseText>
            {isSelected && <Ionicons name="arrow-down" size={20} color="black" />}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default SortingHeader

const styles = StyleSheet.create({
  root: {
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center',
    width: 100
  }
})
