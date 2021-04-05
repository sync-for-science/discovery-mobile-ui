import React from 'react';
import { TouchableOpacity, ActionSheetIOS } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../constants/Colors';

const CatalogScreenActionIcon = () => {
  const handlePress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Placeholder Action', 'Placeholder Action', 'Placeholder Action'],
        destructiveButtonIndex: 3,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          // renameAlert();
        } else if (buttonIndex === 2) {
          // duplicateAlert();
        } else if (buttonIndex === 3) {
          // if (collectionsCount <= 1) {
          //   deleteErrorAlert();
          // } else {
          //   deleteCollectionAlert();
          // }
        }
      },
    );
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Entypo name="dots-three-vertical" size={24} color={Colors.darkgrey} />
    </TouchableOpacity>
  );
};

export default CatalogScreenActionIcon;
