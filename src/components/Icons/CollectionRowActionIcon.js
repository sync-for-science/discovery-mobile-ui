import React, { useState } from 'react';
import {
  TouchableOpacity, ActionSheetIOS, View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import {
  arrayOf, func, number, string,
} from 'prop-types';

import { deleteCollection, renameCollection, duplicateCollection } from '../../redux/action-creators';
import { collectionsCountSelector, collectionsLabelsSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';
import CollectionsDialog, { CollectionDialogText } from '../Dialog/CollectionsDialog';

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
