import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity, ActionSheetIOS, View, StyleSheet,
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import {
  arrayOf,
  bool,
  func, number, shape, string,
} from 'prop-types';
import Dialog from 'react-native-dialog';

import { deleteCollection, renameCollection, duplicateCollection } from '../../redux/action-creators';
import { collectionsCountSelector, collectionsLabelsSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';

const CollectionDialogText = {
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

const CollectionRowActionIcon = ({
  collectionId,
  collectionLabel,
  collectionsCount,
  deleteCollectionAction,
  renameCollectionAction,
  duplicateCollectionAction,
  collectionsLabels,
}) => {
  const [collectionDialogText, setCollectionDialogText] = useState(null);
  const [showUniqueError, setShowUniqueError] = useState(false);

  const checkUniqueName = ({ inputText, rename, collectionLabel: label }) => {
    // if action is rename, new label can be same as old label
    if (rename && (inputText === label)) {
      return true;
    }
    return !collectionsLabels.includes(inputText);
  };

  const handlePress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Rename Collection', 'Duplicate Collection', 'Delete Collection'],
        destructiveButtonIndex: 3,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setCollectionDialogText(CollectionDialogText.rename);
        } else if (buttonIndex === 2) {
          setCollectionDialogText(CollectionDialogText.duplicate);
        } else if (buttonIndex === 3) {
          if (collectionsCount <= 1) {
            setCollectionDialogText(CollectionDialogText.deleteError);
          } else {
            setCollectionDialogText(CollectionDialogText.delete);
          }
        }
      },
    );
  };

  const handleSubmit = (inputText) => {
    if (checkUniqueName({ inputText, rename: collectionDialogText.action === 'rename', collectionLabel })) {
      if (collectionDialogText.action === 'rename') {
        renameCollectionAction(collectionId, inputText);
      } if (collectionDialogText.action === 'duplicate') {
        duplicateCollectionAction(collectionId, inputText);
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
      <TouchableOpacity onPress={handlePress}>
        <Entypo name="dots-three-vertical" size={20} color={Colors.headerIcon} />
      </TouchableOpacity>
      {collectionDialogText && (
      <CollectionsDialog
        collectionDialogText={collectionDialogText}
        setCollectionDialogText={setCollectionDialogText}
        showUniqueError={showUniqueError}
        handleSubmit={handleSubmit}
        collectionLabel={collectionLabel}
      />
      )}
    </View>
  );
};

CollectionRowActionIcon.propTypes = {
  collectionId: string.isRequired,
  collectionLabel: string.isRequired,
  collectionsCount: number.isRequired,
  deleteCollectionAction: func.isRequired,
  renameCollectionAction: func.isRequired,
  duplicateCollectionAction: func.isRequired,
  collectionsLabels: arrayOf(string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  collectionsCount: collectionsCountSelector(state),
  collectionsLabels: collectionsLabelsSelector(state),
});

const mapDispatchToProps = {
  deleteCollectionAction: deleteCollection,
  renameCollectionAction: renameCollection,
  duplicateCollectionAction: duplicateCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRowActionIcon);

const styles = StyleSheet.create({
  errorDescription: {
    color: 'red',
  },
});
