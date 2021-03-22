import React from 'react'
import { StyleSheet, Button, Modal, View, Text, SafeAreaView } from 'react-native'

const NewCollectionModal = ({modalVisible, setModalVisible}) => {
  return (
    <SafeAreaView style={styles.base}>
      <View >
       <Text>NewCollectionModal</Text>
      </View>
    </SafeAreaView>
  )
}

export default NewCollectionModal

const styles = StyleSheet.create({
  base: {
    padding: 100,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
