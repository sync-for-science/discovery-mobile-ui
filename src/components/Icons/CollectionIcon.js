import {
  arrayOf, bool, func, string, shape,
} from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';

import { collectionResourceIdsSelector } from '../../redux/selectors';
import { addResourceToCollection, removeResourceFromCollection } from '../../redux/action-creators';

const CollectionIcon = ({
  collectionId,
  resourceIds,
  showCount,
  addResourceToCollectionAction,
  removeResourceFromCollectionAction,
  collectionResourceIds,
}) => {
  const resourceCount = resourceIds.reduce((acc, id) => {
    const inCollection = collectionResourceIds[id];
    return inCollection ? acc + 1 : acc;
  }, 0);
  const iconCount = (showCount && resourceCount) ? resourceCount : null;

  const handlePress = () => (resourceCount
    ? removeResourceFromCollectionAction(collectionId, resourceIds)
    : addResourceToCollectionAction(collectionId, resourceIds));

  const iconStyle = resourceCount ? styles.hasResource : null;

  return (
    <TouchableOpacity
      style={[
        styles.base,
        iconStyle,
      ]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{iconCount}</Text>
    </TouchableOpacity>
  );
};

CollectionIcon.propTypes = {
  collectionId: string.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  showCount: bool.isRequired,
  addResourceToCollectionAction: func.isRequired,
  removeResourceFromCollectionAction: func.isRequired,
  collectionResourceIds: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collectionResourceIds: collectionResourceIdsSelector(state),
});

const mapDispatchToProps = {
  addResourceToCollectionAction: addResourceToCollection,
  removeResourceFromCollectionAction: removeResourceFromCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionIcon);

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
    borderWidth: 2,
    borderColor: Colors.collectionIcon,
  },
  hasResource: {
    backgroundColor: Colors.collectionIcon,
  },
});
