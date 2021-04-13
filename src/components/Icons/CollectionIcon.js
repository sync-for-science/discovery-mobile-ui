import {
  arrayOf, bool, func, string, shape,
} from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';

import { collectionResourceIdsSelector, activeCollectionShowCollectionOnlySelector } from '../../redux/selectors';
import { addResourceToCollection, removeResourceFromCollection } from '../../redux/action-creators';

const CollectionIcon = ({
  collectionId,
  resourceIds,
  showCount,
  addResourceToCollectionAction,
  removeResourceFromCollectionAction,
  collectionResourceIds,
  showCollectionOnly,
}) => {
  const resourceCount = resourceIds.reduce((acc, id) => {
    const inCollection = collectionResourceIds[id];
    return inCollection ? acc + 1 : acc;
  }, 0);
  const iconCount = (showCount && resourceCount) ? resourceCount : null;

  const handlePress = () => (resourceCount
    ? removeResourceFromCollectionAction(collectionId, resourceIds)
    : addResourceToCollectionAction(collectionId, resourceIds));

  // eslint-disable-next-line no-nested-ternary, max-len
  const iconStyle = resourceCount
    ? (showCollectionOnly ? styles.hasResourceDisabled : styles.hasResource)
    : null;

  const textStyle = showCollectionOnly ? styles.textDisabled : styles.text;

  return (
    <TouchableOpacity
      style={[
        styles.base,
        iconStyle,
      ]}
      onPress={handlePress}
      disabled={showCollectionOnly}
    >
      <Text style={textStyle}>{iconCount}</Text>
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
  showCollectionOnly: bool.isRequired,
};

const mapStateToProps = (state) => ({
  collectionResourceIds: collectionResourceIdsSelector(state),
  showCollectionOnly: activeCollectionShowCollectionOnlySelector(state),
});

const mapDispatchToProps = {
  addResourceToCollectionAction: addResourceToCollection,
  removeResourceFromCollectionAction: removeResourceFromCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionIcon);

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  textDisabled: {
    color: Colors.darkgrey2,
  },
  base: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.collectionUnselected,
  },
  hasResource: {
    borderColor: Colors.collectionIcon,
    backgroundColor: Colors.collectionIcon,
    borderWidth: 2,
  },
  hasResourceDisabled: {
    borderColor: Colors.collectionIconDisabled,
    backgroundColor: Colors.collectionIconDisabled,
    borderWidth: 2,
  },
});
