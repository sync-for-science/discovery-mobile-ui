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
    submitButton: 'Submit',
    showCancelButton: true,
    showTextInput: true,
    useDupLabel: false,
  },
  [COLLECTIONS_DIALOG_ACTIONS.RENAME]: {
    action: COLLECTIONS_DIALOG_ACTIONS.RENAME,
    title: 'Rename Collection',
    description: 'Enter name for this new collection.',
    submitButton: 'Rename',
    showCancelButton: true,
    showTextInput: true,
    useDupLabel: true,
  },
  [COLLECTIONS_DIALOG_ACTIONS.DUPLICATE]: {
    action: COLLECTIONS_DIALOG_ACTIONS.DUPLICATE,
    title: 'Duplicate Collection',
    description: 'Enter name for this new collection.',
    submitButton: 'Duplicate',
    showCancelButton: true,
    showTextInput: true,
    useDupLabel: true,
  },
  [COLLECTIONS_DIALOG_ACTIONS.DELETE]: {
    action: COLLECTIONS_DIALOG_ACTIONS.DELETE,
    title: 'Delete Collection',
    description: 'Are you sure you want to delete this collection?',
    submitButton: 'Delete',
    showCancelButton: true,
    showTextInput: false,
    useDupLabel: false,
  },
  [COLLECTIONS_DIALOG_ACTIONS.DELETE_ERROR]: {
    action: COLLECTIONS_DIALOG_ACTIONS.DELETE_ERROR,
    title: 'Delete Error',
    description: 'Cannot delete last collection.',
    submitButton: 'OK',
    showCancelButton: false,
    showTextInput: false,
    useDupLabel: false,
  },
};

const UNIQUE_ERROR = 'Collection name must be unique.';
const LABEL_LENGTH_ERROR = 'Collection name must be at least 1 character';

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
  const [errorText, setErrorText] = useState('');

  const {
    title, description, submitButton, showTextInput, showCancelButton,
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

  const isUniqueName = ({ text, isRename, label }) => {
    // if action is rename, new label can be same as old label
    if (isRename && (text.toLowerCase() === label.toLowerCase())) {
      return true;
    }
    return !collectionsLabels.includes(text.toLowerCase());
  };

  const hasMinLength = (text) => text.length > 0;

  const hasInputErrors = ({ text, isRename, label }) => {
    if (!hasMinLength(text)) {
      setErrorText(LABEL_LENGTH_ERROR);
      return true;
    }
    if (!isUniqueName({ text, isRename, label })) {
      setErrorText(UNIQUE_ERROR);
      return true;
    }
    return false;
  };

  const handleSubmit = (text) => {
    switch (collectionsDialogText.action) {
      case COLLECTIONS_DIALOG_ACTIONS.CREATE:
        if (hasInputErrors({ text, isRename: false, label: collectionLabel })) {
          return;
        }
        createCollectionAction(text);
        break;
      case COLLECTIONS_DIALOG_ACTIONS.RENAME:
        if (hasInputErrors({ text, isRename: true, label: collectionLabel })) {
          return;
        }
        renameCollectionAction(collectionId, text);
        break;
      case COLLECTIONS_DIALOG_ACTIONS.DUPLICATE:
        if (hasInputErrors({ text, isRename: false, label: collectionLabel })) {
          return;
        }
        duplicateCollectionAction(collectionId, text);
        break;
      case COLLECTIONS_DIALOG_ACTIONS.DELETE:
        deleteCollectionAction(collectionId);
        break;
      case COLLECTIONS_DIALOG_ACTIONS.DELETE_ERROR:
        setCollectionsDialogText(null);
        break;
      default:
        setCollectionsDialogText(null);
        break;
    }
    setCollectionsDialogText(null);
    setErrorText('');
  };

  const handleOnChange = (text) => {
    if (errorText) {
      setErrorText(false);
    }
    setInputText(text);
  };

  return (
    <View>
      <Dialog.Container visible>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description style={styles.description}>
          {description}
        </Dialog.Description>
        {errorText && (
          <Dialog.Description style={styles.errorDescription}>
            {errorText}
          </Dialog.Description>
        )}
        {showTextInput && (
          <Dialog.Input
            defaultValue={getDefaultValue()}
            onChangeText={(text) => handleOnChange(text)}
            autoFocus
          />
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
