import {
  bool, func, shape, string,
} from 'prop-types';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Dialog from 'react-native-dialog';

export const CollectionDialogText = {
  rename: {
    action: 'rename',
    title: 'Rename Collection',
    description: 'Enter name for this new collection.',
    errorDescription: 'Collection name must be unique.',
    submitButton: 'Rename',
    showCancelButton: true,
    showTextInput: true,
    useDupLabel: true,
  },
  duplicate: {
    action: 'duplicate',
    title: 'Duplicate Collection',
    description: 'Enter name for this new collection.',
    errorDescription: 'Collection name must be unique.',
    submitButton: 'Duplicate',
    showCancelButton: true,
    showTextInput: true,
    useDupLabel: true,
  },
  delete: {
    action: 'delete',
    title: 'Delete Collection',
    description: 'Are you sure you want to delete this collection?',
    errorDescription: null,
    submitButton: 'Delete',
    showCancelButton: true,
    showTextInput: false,
    useDupLabel: false,
  },
  deleteError: {
    action: 'deleteError',
    title: 'Delete Error',
    description: 'Cannot delete last collection.',
    errorDescription: null,
    submitButton: 'OK',
    showCancelButton: false,
    showTextInput: false,
    useDupLabel: false,
  },
};

const CollectionsDialog = ({
  collectionDialogText,
  setCollectionDialogText,
  showUniqueError,
  handleSubmit,
  collectionLabel,
}) => {
  const [inputText, setInputText] = useState('');
  const {
    title, description, errorDescription, submitButton, showTextInput, showCancelButton,
  } = collectionDialogText;

  const getDefaultValue = () => {
    if (collectionDialogText.useDupLabel) {
      if (collectionDialogText.action === 'rename') {
        return collectionLabel;
      }
      // collectionDialogText.action === 'duplicate'
      return `${collectionLabel} copy`;
    }
    return '';
  };

  useEffect(() => {
    setInputText(getDefaultValue());
  }, []);

  return (
    <View>
      <Dialog.Container visible>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>
          {description}
        </Dialog.Description>
        {showUniqueError && (
          <Dialog.Description style={styles.errorDescription}>
            {errorDescription}
          </Dialog.Description>
        )}
        {showTextInput && (
          <Dialog.Input defaultValue={getDefaultValue()} onChangeText={setInputText} />
        )}
        {showCancelButton && <Dialog.Button label="Cancel" onPress={() => setCollectionDialogText(null)} />}
        <Dialog.Button label={submitButton} onPress={() => handleSubmit(inputText)} />
      </Dialog.Container>
    </View>
  );
};

CollectionsDialog.propTypes = {
  collectionDialogText: shape({}).isRequired,
  setCollectionDialogText: func.isRequired,
  showUniqueError: bool.isRequired,
  handleSubmit: func.isRequired,
  collectionLabel: string.isRequired,
};

export default CollectionsDialog;

const styles = StyleSheet.create({
  errorDescription: {
    color: 'red',
  },
});
