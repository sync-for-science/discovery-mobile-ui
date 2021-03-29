import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { func, string, shape } from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import SelectedCollectionIcon from '../Icons/SelectedCollectionIcon';
import CollectionRowActionIcon from '../Icons/CollectionRowActionIcon';
import { setPreviewCollection } from '../../redux/action-creators';

const CollectionRow = ({
  collectionId,
  label,
  selectedCollectionId,
  navigation,
  setPreviewCollectionAction,
}) => {
  const selected = collectionId === selectedCollectionId;
  const textStyle = selected ? 'bold' : '';
  const handlePress = () => {
    setPreviewCollectionAction(collectionId);
    navigation.navigate('CollectionPreview', { collectionId });
  };
  return (
    <TouchableOpacity style={styles.collectionRow} onPress={handlePress}>
      <View style={styles.selectedAndTitleContainer}>
        <SelectedCollectionIcon collectionId={collectionId} selected={selected} />
        <BaseText variant={textStyle}>{label}</BaseText>
      </View>
      <CollectionRowActionIcon selected={selected} collectionId={collectionId} />
    </TouchableOpacity>
  );
};

CollectionRow.propTypes = {
  collectionId: string.isRequired,
  label: string.isRequired,
  selectedCollectionId: string.isRequired,
  navigation: shape({ navigate: func.isRequired }).isRequired,
  setPreviewCollectionAction: func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCollectionId: state.selectedCollection,
});

const mapDispatchToProps = {
  setPreviewCollectionAction: setPreviewCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRow);

const styles = StyleSheet.create({
  collectionRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
    width: '90%',
  },
  selectedAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
