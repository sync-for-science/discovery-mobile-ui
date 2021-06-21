import React, { useState } from 'react';
import { func, bool, shape } from 'prop-types';
import {
  StyleSheet, StatusBar, TouchableOpacity, View,
} from 'react-native';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { Feather } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import CollectionsDialog, { COLLECTIONS_DIALOG_ACTIONS, CollectionsDialogText } from '../Dialog/CollectionsDialog';
import { collectionsCounterSelector } from '../../redux/selectors';
import HeaderCountIcon from '../Icons/HeaderCountIcon';

const AddCollectionButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Feather name="plus-square" size={24} color={Colors.headerIcon} />
  </TouchableOpacity>
);

AddCollectionButton.propTypes = {
  onPress: func.isRequired,
};

const CollectionsIndexHeader = ({ showNewCollectionButton, collectionsCounter }) => {
  const [collectionsDialogText, setCollectionsDialogText] = useState(null);
  const totalCollectionsCount = collectionsCounter.customCount + collectionsCounter.preBuiltCount;

  const handleNewCollectionPress = () => {
    setCollectionsDialogText(CollectionsDialogText[COLLECTIONS_DIALOG_ACTIONS.CREATE]);
  };

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <Header style={styles.header}>
        <Left />
        <View style={styles.headerTitleContainer}>
          {totalCollectionsCount > 0 && <HeaderCountIcon count={totalCollectionsCount} />}
          <Title style={styles.headerText}>Collections</Title>
        </View>
        <Right>
          {showNewCollectionButton && <AddCollectionButton onPress={handleNewCollectionPress} />}
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

CollectionsIndexHeader.propTypes = {
  showNewCollectionButton: bool.isRequired,
  collectionsCounter: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collectionsCounter: collectionsCounterSelector(state),
});

export default connect(mapStateToProps, null)(CollectionsIndexHeader);

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.headerBackground,
    height: 50,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
