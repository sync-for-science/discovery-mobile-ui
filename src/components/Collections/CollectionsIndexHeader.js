import React, { useState } from 'react';
import {
  StyleSheet, StatusBar, TouchableOpacity,
} from 'react-native';
import {
  Header, Right, Body, Title, Left,
} from 'native-base';
import { Feather } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../constants/Colors';
import CollectionsDialog, { COLLECTIONS_DIALOG_ACTIONS, CollectionsDialogText } from '../Dialog/CollectionsDialog';

const CollectionsIndex = () => {
  const [collectionsDialogText, setCollectionsDialogText] = useState(null);

  const handleNewCollectionPress = () => {
    setCollectionsDialogText(CollectionsDialogText[COLLECTIONS_DIALOG_ACTIONS.CREATE]);
  };

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <Header style={styles.header}>
        <Left />
        <Body>
          <Title style={styles.headerText}>Collections</Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={handleNewCollectionPress}>
            <Feather name="plus-square" size={24} color={Colors.headerIcon} />
          </TouchableOpacity>
        </Right>
      </Header>
      {collectionsDialogText && (
        <CollectionsDialog
          collectionsDialogText={collectionsDialogText}
          setCollectionsDialogText={setCollectionsDialogText}
        />
      )}
    </>
  );
};

CollectionsIndex.propTypes = {
};

export default CollectionsIndex;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.headerBackground,
    height: 50,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
  },
});
