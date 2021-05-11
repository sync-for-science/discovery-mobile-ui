import React, { useState } from 'react';
import {
  TouchableOpacity, ActionSheetIOS, View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import {
  number, string,
} from 'prop-types';

import { collectionsCountSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';
import CollectionsDialog, { COLLECTION_ACTIONS, CollectionsDialogText } from '../Dialog/CollectionsDialog';

const CollectionRowActionIcon = ({
  collectionId,
  collectionLabel,
  collectionsCount,
}) => {
  const [collectionsDialogText, setCollectionsDialogText] = useState(null);

  const handlePress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Cancel',
          CollectionsDialogText[COLLECTION_ACTIONS.RENAME].title,
          CollectionsDialogText[COLLECTION_ACTIONS.DUPLICATE].title,
          CollectionsDialogText[COLLECTION_ACTIONS.DELETE].title,
        ],
        destructiveButtonIndex: 3,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setCollectionsDialogText(CollectionsDialogText[COLLECTION_ACTIONS.RENAME]);
        } else if (buttonIndex === 2) {
          setCollectionsDialogText(CollectionsDialogText[COLLECTION_ACTIONS.DUPLICATE]);
        } else if (buttonIndex === 3) {
          if (collectionsCount <= 1) {
            setCollectionsDialogText(CollectionsDialogText[COLLECTION_ACTIONS.DELETE_ERROR]);
          } else {
            setCollectionsDialogText(CollectionsDialogText[COLLECTION_ACTIONS.DELETE]);
          }
        }
      },
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Entypo name="dots-three-vertical" size={20} color={Colors.headerIcon} />
      </TouchableOpacity>
      {collectionsDialogText && (
      <CollectionsDialog
        collectionId={collectionId}
        collectionLabel={collectionLabel}
        collectionsDialogText={collectionsDialogText}
        setCollectionsDialogText={setCollectionsDialogText}
      />
      )}
    </View>
  );
};

CollectionRowActionIcon.propTypes = {
  collectionId: string.isRequired,
  collectionLabel: string.isRequired,
  collectionsCount: number.isRequired,
};

const mapStateToProps = (state) => ({
  collectionsCount: collectionsCountSelector(state),
});

export default connect(mapStateToProps, null)(CollectionRowActionIcon);
