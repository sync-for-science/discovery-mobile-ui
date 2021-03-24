import React from 'react';
import {
  TouchableOpacity, ActionSheetIOS, View, Alert,
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import {
  bool, func, number, shape, string,
} from 'prop-types';

import { deleteCollection, renameCollection, clearCollection } from '../../redux/action-creators';
import { collectionsCountSelector, collectionResourceIdsCountSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';

const CoolectionDetailActionIcon = ({
  collections,
  collectionId,
  collectionsCount,
  deleteCollectionAction,
  renameCollectionAction,
  selected,
  clearCollectionAction,
  collectionResourceIdsCount,
}) => {
  const handleDeleteCollection = () => {
    const nextCollectionId = selected
      ? Object.keys(collections).filter((id) => id !== collectionId)[0]
      : null;
    deleteCollectionAction(collectionId, nextCollectionId);
  };

  const renameAlert = () => Alert.prompt(
    'Rename Collection',
    'Enter name for this new collection.',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Rename',
        onPress: (text) => renameCollectionAction(collectionId, text),
      },
    ],
  );

  const clearRecordsAlert = () => Alert.alert(
    'Clear Records',
    'Are you sure you want to clear all records this collection?',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Clear',
        onPress: () => clearCollectionAction(collectionId),
        style: 'destructive',
      },
    ],
  );

  const deleteErrorAlert = () => Alert.alert('Delete Error', 'Cannot delete last collection.');

  const deleteCollectionAlert = () => Alert.alert(
    'Delete Collection',
    'Are you sure you want to delete this collection?',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: handleDeleteCollection,
        style: 'destructive',
      },
    ],
  );

  const handlePress = () => {
    if (collectionResourceIdsCount > 0) {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Rename Collection', 'Clear Records', 'Delete Collection'],
          destructiveButtonIndex: 3,
          cancelButtonIndex: 0,
          userInterfaceStyle: 'dark',
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            // cancel action
          } else if (buttonIndex === 1) {
            renameAlert();
          } else if (buttonIndex === 2) {
            clearRecordsAlert();
          } else if (buttonIndex === 3) {
            if (collectionsCount <= 1) {
              deleteErrorAlert();
            } else {
              deleteCollectionAlert();
            }
          }
        },
      );
    } else {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Rename Collection', 'Delete Collection'],
          destructiveButtonIndex: 2,
          cancelButtonIndex: 0,
          userInterfaceStyle: 'dark',
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            // cancel action
          } else if (buttonIndex === 1) {
            renameAlert();
          } else if (buttonIndex === 2) {
            if (collectionsCount <= 1) {
              deleteErrorAlert();
            } else {
              deleteCollectionAlert();
            }
          }
        },
      );
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Entypo name="dots-three-horizontal" size={24} color={Colors.darkgrey} />
      </TouchableOpacity>
    </View>
  );
};

CoolectionDetailActionIcon.propTypes = {
  collections: shape({}).isRequired,
  collectionId: string.isRequired,
  collectionsCount: number.isRequired,
  deleteCollectionAction: func.isRequired,
  renameCollectionAction: func.isRequired,
  selected: bool.isRequired,
  clearCollectionAction: func.isRequired,
  collectionResourceIdsCount: number.isRequired,
};

const mapStateToProps = (state) => ({
  collectionsCount: collectionsCountSelector(state),
  collections: state.collections,
  collectionResourceIdsCount: collectionResourceIdsCountSelector(state),
});

const mapDispatchToProps = {
  deleteCollectionAction: deleteCollection,
  renameCollectionAction: renameCollection,
  clearCollectionAction: clearCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoolectionDetailActionIcon);
