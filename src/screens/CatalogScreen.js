import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CatalogScreen = () => {
  return (
    <View style={styles.screen}>
        <Text>CatalogScreen</Text>
    </View>
  )
}

export default CatalogScreen

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})
