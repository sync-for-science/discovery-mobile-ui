import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import CollectionRowActionIcon from '../Icons/CollectionRowActionIcon';
import { selectCollection } from '../../redux/action-creators';

const CollectionRow = ({
  collectionId,
  label,
  navigation,
  selectCollectionAction,
}) => {
  const handlePress = () => {
    selectCollectionAction(collectionId);
    navigation.navigate('Catalog');
  };

  return (
    <TouchableOpacity style={styles.collectionRow} onPress={handlePress}>
      <BaseText style={styles.labelText}>{label}</BaseText>
      <CollectionRowActionIcon collectionId={collectionId} />
    </TouchableOpacity>
  );
};

CollectionRow.propTypes = {
  collectionId: string.isRequired,
  label: string.isRequired,
  navigation: shape({}).isRequired,
  selectCollectionAction: func.isRequired,
};

const mapDispatchToProps = {
  selectCollectionAction: selectCollection,
};

export default connect(null, mapDispatchToProps)(CollectionRow);

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
  labelText: {
    color: 'black',
  },
});
