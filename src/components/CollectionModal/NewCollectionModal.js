import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Dialog from 'react-native-dialog'

import Colors from '../../constants/Colors'

const NewCollectionModal = ({modalVisible, setModalVisible}) => {
  return (
    <View style={styles.base}>
      <Dialog.Container visible={modalVisible} keyboardVerticalOffset={250}>
        <Dialog.Title>New Collection</Dialog.Title>
        <Dialog.Description>
          Enter name for this new collection.
        </Dialog.Description>
        <TextInput 
          style={styles.textInput}
          placeholder="Name"
          autoFocus={true}
        />
        <Dialog.Button 
          label="Cancel" 
          color={Colors.darkgrey} 
          onPress={() => setModalVisible(false)}
        />
        <Dialog.Button label="Create" bold />
      </Dialog.Container>
    </View>
  )
}

export default NewCollectionModal

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  textInput: {
    borderColor: Colors.darkgrey,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 5
  }
})
