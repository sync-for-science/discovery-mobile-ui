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
import CollectionsDialog, { CollectionDialogText } from '../Dialog/CollectionsDialog';

const CollectionRowActionIcon = ({
  collectionId,
  collectionLabel,
  collectionsCount,
}) => {
  const [collectionDialogText, setCollectionDialogText] = useState(null);

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

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Entypo name="dots-three-vertical" size={20} color={Colors.headerIcon} />
      </TouchableOpacity>
      {collectionDialogText && (
      <CollectionsDialog
        collectionId={collectionId}
        collectionLabel={collectionLabel}
        collectionDialogText={collectionDialogText}
        setCollectionDialogText={setCollectionDialogText}
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
