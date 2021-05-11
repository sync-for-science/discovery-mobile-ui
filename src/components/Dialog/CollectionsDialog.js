import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Dialog from 'react-native-dialog';
import {
  func, shape, string, arrayOf,
} from 'prop-types';

import {
  createCollection, deleteCollection, renameCollection, duplicateCollection,
} from '../../redux/action-creators';
import { collectionsLabelsSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';

export const COLLECTIONS_DIALOG_ACTIONS = {
  CREATE: 'CREATE',
  RENAME: 'RENAME',
  DUPLICATE: 'DUPLICATE',
  DELETE: 'DELETE',
  DELETE_ERROR: 'DELETE_ERROR',
};

export const CollectionsDialogText = {
  [COLLECTIONS_DIALOG_ACTIONS.CREATE]: {
    action: COLLECTIONS_DIALOG_ACTIONS.CREATE,
    title: 'Create Collection',
    description: 'Enter name for this new collection.',
    errorDescription: 'Collection name must be unique.',
    submitButton: 'Submit',
    showCancelButton: true,
    showTextInput: true,
    useDupLabel: false,
  },
  [COLLECTIONS_DIALOG_ACTIONS.RENAME]: {
    action: COLLECTIONS_DIALOG_ACTIONS.RENAME,
    title: 'Rename Collection',
    description: 'Enter name for this new collection.',
    errorDescription: 'Collection name must be unique.',
    submitButton: 'Rename',
    showCancelButton: true,
    showTextInput: true,
    useDupLabel: true,
  },
  [COLLECTIONS_DIALOG_ACTIONS.DUPLICATE]: {
    action: COLLECTIONS_DIALOG_ACTIONS.DUPLICATE,
    title: 'Duplicate Collection',
    description: 'Enter name for this new collection.',
    errorDescription: 'Collection name must be unique.',
    submitButton: 'Duplicate',
    showCancelButton: true,
    showTextInput: true,
    useDupLabel: true,
  },
  [COLLECTIONS_DIALOG_ACTIONS.DELETE]: {
    action: COLLECTIONS_DIALOG_ACTIONS.DELETE,
    title: 'Delete Collection',
    description: 'Are you sure you want to delete this collection?',
    errorDescription: null,
    submitButton: 'Delete',
    showCancelButton: true,
    showTextInput: false,
    useDupLabel: false,
  },
  [COLLECTIONS_DIALOG_ACTIONS.DELETE_ERROR]: {
    action: COLLECTIONS_DIALOG_ACTIONS.DELETE_ERROR,
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
  collectionsDialogText,
  setCollectionsDialogText,
  collectionLabel,
  deleteCollectionAction,
  renameCollectionAction,
  duplicateCollectionAction,
  collectionsLabels,
  createCollectionAction,
}) => {
  const [inputText, setInputText] = useState('');
  const [showUniqueError, setShowUniqueError] = useState(false);

  const {
    title, description, errorDescription, submitButton, showTextInput, showCancelButton,
  } = collectionsDialogText;

  const getDefaultValue = () => {
    if (collectionsDialogText.useDupLabel) {
      if (collectionsDialogText.action === COLLECTIONS_DIALOG_ACTIONS.RENAME) {
        return collectionLabel;
      }
      // collectionsDialogText.action === 'duplicate'
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
    if (
      checkUniqueName({
        text,
        rename: collectionsDialogText.action === COLLECTIONS_DIALOG_ACTIONS.RENAME,
        collectionLabel,
      })
    ) {
      if (collectionsDialogText.action === COLLECTIONS_DIALOG_ACTIONS.CREATE) {
        createCollectionAction(text);
      } if (collectionsDialogText.action === COLLECTIONS_DIALOG_ACTIONS.RENAME) {
        renameCollectionAction(collectionId, text);
      } if (collectionsDialogText.action === COLLECTIONS_DIALOG_ACTIONS.DUPLICATE) {
        duplicateCollectionAction(collectionId, text);
      } if (collectionsDialogText.action === COLLECTIONS_DIALOG_ACTIONS.DELETE) {
        deleteCollectionAction(collectionId);
      } if (collectionsDialogText.action === COLLECTIONS_DIALOG_ACTIONS.DELETE_ERROR) {
        setCollectionsDialogText(null);
      }
      setCollectionsDialogText(null);
      setShowUniqueError(false);
    } else {
      setShowUniqueError(true);
    }
  };

  return (
    <View>
      <Dialog.Container visible>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description style={styles.description}>
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
        {showCancelButton && <Dialog.Button style={styles.cancelButton} label="Cancel" onPress={() => setCollectionsDialogText(null)} />}
        <Dialog.Button label={submitButton} onPress={() => handleSubmit(inputText)} />
      </Dialog.Container>
    </View>
  );
};

CollectionsDialog.propTypes = {
  collectionsDialogText: shape({}).isRequired,
  setCollectionsDialogText: func.isRequired,
  collectionId: string,
  collectionLabel: string,
  deleteCollectionAction: func.isRequired,
  renameCollectionAction: func.isRequired,
  duplicateCollectionAction: func.isRequired,
  collectionsLabels: arrayOf(string.isRequired).isRequired,
  createCollectionAction: func.isRequired,
};

CollectionsDialog.defaultProps = {
  collectionId: null,
  collectionLabel: null,
};

const mapStateToProps = (state) => ({
  collectionsLabels: collectionsLabelsSelector(state),
});

const mapDispatchToProps = {
  deleteCollectionAction: deleteCollection,
  renameCollectionAction: renameCollection,
  duplicateCollectionAction: duplicateCollection,
  createCollectionAction: createCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsDialog);

const styles = StyleSheet.create({
  description: {
    color: Colors.darkgrey,
  },
  errorDescription: {
    color: Colors.destructive,
  },
  cancelButton: {
    color: Colors.darkgrey,
  },
});
