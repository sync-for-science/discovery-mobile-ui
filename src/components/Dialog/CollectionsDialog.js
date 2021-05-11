import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Dialog from 'react-native-dialog';
import {
  func, shape, string, arrayOf,
} from 'prop-types';

import { deleteCollection, renameCollection, duplicateCollection } from '../../redux/action-creators';
import { collectionsLabelsSelector } from '../../redux/selectors';

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
  collectionId,
  collectionDialogText,
  setCollectionDialogText,
  collectionLabel,
  deleteCollectionAction,
  renameCollectionAction,
  duplicateCollectionAction,
  collectionsLabels,
}) => {
  const [inputText, setInputText] = useState('');
  const [showUniqueError, setShowUniqueError] = useState(false);

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

  const checkUniqueName = ({ text, rename, collectionLabel: label }) => {
    // if action is rename, new label can be same as old label
    if (rename && (text === label)) {
      return true;
    }
    return !collectionsLabels.includes(text);
  };

  const handleSubmit = (text) => {
    if (checkUniqueName({ text, rename: collectionDialogText.action === 'rename', collectionLabel })) {
      if (collectionDialogText.action === 'rename') {
        renameCollectionAction(collectionId, text);
      } if (collectionDialogText.action === 'duplicate') {
        duplicateCollectionAction(collectionId, text);
      } if (collectionDialogText.action === 'delete') {
        deleteCollectionAction(collectionId);
      } if (collectionDialogText.action === 'deleteError') {
        setCollectionDialogText(null);
      }
      setCollectionDialogText(null);
      setShowUniqueError(false);
    } else {
      setShowUniqueError(true);
    }
  };

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
  collectionId: string.isRequired,
  collectionDialogText: shape({}).isRequired,
  setCollectionDialogText: func.isRequired,
  collectionLabel: string.isRequired,
  deleteCollectionAction: func.isRequired,
  renameCollectionAction: func.isRequired,
  duplicateCollectionAction: func.isRequired,
  collectionsLabels: arrayOf(string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  collectionsLabels: collectionsLabelsSelector(state),
});

const mapDispatchToProps = {
  deleteCollectionAction: deleteCollection,
  renameCollectionAction: renameCollection,
  duplicateCollectionAction: duplicateCollection,

};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsDialog);

const styles = StyleSheet.create({
  errorDescription: {
    color: 'red',
  },
});
