import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Dialog from 'react-native-dialog';
import { connect } from 'react-redux';

import { bool, func } from 'prop-types';
import { createCollection } from '../../redux/action-creators';

import Colors from '../../constants/Colors';

const NewCollectionModal = ({ modalVisible, setModalVisible, createCollectionAction }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    createCollectionAction(name);
    setName('');
    setModalVisible(false);
  };

  const handleCancel = () => {
    setName('');
    setModalVisible(false);
  };

  return (
    <View style={styles.base}>
      <Dialog.Container
        visible={modalVisible}
        keyboardVerticalOffset={250}
        onBackdropPress={handleCancel}
      >
        <Dialog.Title>New Collection</Dialog.Title>
        <Dialog.Description>
          Enter name for this new collection.
        </Dialog.Description>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          autoFocus
          autoCorrect={false}
          value={name}
          onChangeText={(text) => setName(text)}

        />
        <Dialog.Button
          label="Cancel"
          color={Colors.darkgrey}
          onPress={handleCancel}
        />
        <Dialog.Button
          label="Create"
          bold
          onPress={handleSubmit}
        />
      </Dialog.Container>
    </View>
  );
};

NewCollectionModal.propTypes = {
  modalVisible: bool.isRequired,
  setModalVisible: func.isRequired,
  createCollectionAction: func.isRequired,
};

const mapDispatchToProps = {
  createCollectionAction: createCollection,
};

export default connect(null, mapDispatchToProps)(NewCollectionModal);

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
    padding: 5,
  },
});
