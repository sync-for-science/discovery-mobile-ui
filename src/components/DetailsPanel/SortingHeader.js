import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import BaseText from '../Generic/BaseText'

const SortingHeader = ({sortingState, setSortingState}) => {

  const handlePress = (buttonLabel) => {
    if (sortingState[buttonLabel].isPicked) {
      const updatedButton = {...sortingState[buttonLabel]}
      updatedButton.isDescending = !updatedButton.isDescending
      setSortingState({...sortingState, [buttonLabel]: updatedButton})
    } else {
      const updatedSortingState = {...sortingState}
      Object.keys(sortingState).forEach(buttonName => {
        updatedSortingState[buttonName].isPicked = buttonName === buttonLabel
      })
      setSortingState(updatedSortingState)
    }
  }

  return (
    <View style={styles.root}>
      {Object.entries(sortingState).map(([buttonLabel, values]) => {
        const textStyle = values.isPicked ? "title" : ""
        const arrowDirection = sortingState[buttonLabel].isDescending ? 'arrow-down' : 'arrow-up'
        return (
          <TouchableOpacity style={styles.button} onPress={() => handlePress(buttonLabel)}>
            <BaseText variant={textStyle}>{buttonLabel}</BaseText>
            {values.isPicked && <Ionicons name={arrowDirection} size={20} color="black" />}
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
