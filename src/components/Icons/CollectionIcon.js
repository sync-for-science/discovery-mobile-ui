import {
  arrayOf, bool, func, number, string,
} from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux'
import Colors from '../../constants/Colors';

import { addResourceToCollection, removeResourceFromCollection } from '../../redux/epics';

const CollectionIcon = ({
  count,
  collectionId,
  resourceIds,
  showCount,
  addResourceToCollectionAction,
  removeResourceFromCollectionAction
}) => {
  const iconCount = showCount > 0 ? count : null;

  const handlePress = () => count > 0 
    ? removeResourceFromCollectionAction(collectionId, resourceIds)
    : addResourceToCollectionAction(collectionId, resourceIds)

  return (
    <TouchableOpacity
      style={styles.base}
      onPress={handlePress}
    >
      <Text style={styles.text}>{iconCount}</Text>
    </TouchableOpacity>
  );
};

CollectionIcon.propTypes = {
  count: number,
  collectionId: string.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  showCount: bool.isRequired,
  addResourceToCollectionAction: func.isRequired,
  removeResourceFromCollectionAction: func.isRequired,
};

CollectionIcon.defaultProps = {
  count: null,
};

const mapDispatchToProps = {
  addResourceToCollectionAction: addResourceToCollection,
  removeResourceFromCollectionAction: removeResourceFromCollection,
};

export default connect(null, mapDispatchToProps)(CollectionIcon);

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  base: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Colors.collectionIcon
  },
});
