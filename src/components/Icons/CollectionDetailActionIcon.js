import React from 'react'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../constants/Colors'

const CollectionDetailActionIcon = () => {
  return (
    <TouchableOpacity onPress={() => Alert.alert('hello!')}>
      <Entypo name="dots-three-horizontal" size={24} color={Colors.primary} />
    </TouchableOpacity>
  )
}

export default CollectionDetailActionIcon

const styles = StyleSheet.create({})
