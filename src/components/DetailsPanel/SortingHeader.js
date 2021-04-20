import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import BaseText from '../Generic/BaseText'

const SortingHeader = ({sortingIndex, setSortingIndex}) => {
  const recordTypeVariant = sortingIndex === 0 ? "title" : ""
  const recordDateVariant = sortingIndex === 1 ? "title" : ""
  const timeSavedVariant = sortingIndex === 2 ? "title" : ""
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.button} onPress={() => setSortingIndex(0)}>
        <BaseText variant={recordTypeVariant}>Record Type</BaseText>
        {sortingIndex === 0 && <Ionicons name="arrow-down" size={20} color="black" />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setSortingIndex(1)}>
        <BaseText variant={recordDateVariant}>Record Date</BaseText>
        {sortingIndex === 1 && <Ionicons name="arrow-down" size={20} color="black" />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setSortingIndex(2)}> 
        <BaseText variant={timeSavedVariant}>Time Saved</BaseText>
        {sortingIndex === 2 && <Ionicons name="arrow-down" size={20} color="black" />}
      </TouchableOpacity> 
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
