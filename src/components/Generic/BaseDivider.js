import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../../constants/Colors'

const BaseDivider = ({ color }) => (
    <View style={styles.divider} />
);

export default BaseDivider

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider
  }
})
