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
import CollectionsDialog from '../Dialog/CollectionsDialog';
import { collectionsCounterSelector } from '../../redux/selectors';
import HeaderCountIcon from '../Icons/HeaderCountIcon';
import { isAddingNewCollection } from '../../redux/action-creators';

const AddCollectionInputButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Feather name="plus-square" size={24} color={Colors.headerIcon} />
  </TouchableOpacity>

);

const SearchInputButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Feather name="search" size={24} color={Colors.headerIcon} />
  </TouchableOpacity>

);

AddCollectionInputButton.propTypes = {
  onPress: func.isRequired,
};
SearchInputButton.propTypes = {
  onPress: func.isRequired,
};

const CollectionsIndexHeader = ({
  showNewCollectionButton,
  collectionsCounter,
  navigation,
  isAddingNewCollectionAction,
}) => {
  const [collectionsDialogText, setCollectionsDialogText] = useState(null);
  const totalCollectionsCount = collectionsCounter.customCount + collectionsCounter.preBuiltCount;

  const handleNewCollectionPress = () => {
    isAddingNewCollectionAction(true);
    navigation.navigate('CollectionInput');
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
          {showNewCollectionButton
            && <AddCollectionInputButton onPress={handleNewCollectionPress} />}

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
  navigation: shape({}).isRequired,
  isAddingNewCollectionAction: bool.isRequired,

};

const mapStateToProps = (state) => ({

  collectionsCounter: collectionsCounterSelector(state),

});

const mapDispatchToProps = {
  isAddingNewCollectionAction: isAddingNewCollection,
};

export default connect(mapStateToProps, mapDispatchToProps, null)(CollectionsIndexHeader);
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
