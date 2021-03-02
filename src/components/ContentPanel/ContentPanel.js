import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ContentPanel = () => {
  return (
    <View>
      <Text style={styles.title}>Content Panel</Text>
    </View>
  )
}

export default ContentPanel

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
})
