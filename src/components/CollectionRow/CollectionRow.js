import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import SelectedCollectionIcon from '../Icons/SelectedCollectionIcon';
import CollectionRowActionIcon from '../Icons/CollectionRowActionIcon';

const CollectionRow = ({
  collectionId,
  handlePress,
  label,
  selectedCollectionId,
}) => {
  const selected = collectionId === selectedCollectionId;
  const textStyle = selected ? 'bold' : '';
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
  handlePress: func.isRequired,
  label: string.isRequired,
  selectedCollectionId: string.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCollectionId: state.selectedCollection,
});

export default connect(mapStateToProps, null)(CollectionRow);

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
