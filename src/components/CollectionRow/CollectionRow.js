import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';

import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import CollectionRowActionIcon from '../Icons/CollectionRowActionIcon';

const CollectionRow = ({
  collectionId,
  label,
  navigation,
}) => {

  return (
    <TouchableOpacity style={styles.collectionRow} onPress={() => navigation.navigate('Catalog')}>
      <BaseText>{label}</BaseText>
      <CollectionRowActionIcon collectionId={collectionId} />
    </TouchableOpacity>
  );
};

CollectionRow.propTypes = {
  collectionId: string.isRequired,
  label: string.isRequired,
  selectedCollectionId: string.isRequired,
  navigation: shape({}).isRequired,
  selectCollectionAction: func.isRequired
};

export default CollectionRow;

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
});
