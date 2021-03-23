import { bool, func, string } from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';

import { addResourceToCollection, removeResourceFromCollection } from '../../redux/action-creators';
import BaseText from '../Generic/BaseText';

const AddRemoveButton = ({
  inCollection,
  collectionId,
  resourceId,
  addResourceToCollectionAction,
  removeResourceFromCollectionAction,
}) => {
  if (inCollection) {
    return (
      <Button
        transparent
        onPress={() => removeResourceFromCollectionAction(collectionId, resourceId)}
      >
        <BaseText style={styles.removeButton} variant="button">Remove From Details Panel</BaseText>
      </Button>
    );
  }
  return (
    <Button transparent onPress={() => addResourceToCollectionAction(collectionId, resourceId)}>
      <BaseText variant="button">Add To Details Panel</BaseText>
    </Button>
  );
};

AddRemoveButton.propTypes = {
  inCollection: bool.isRequired,
  collectionId: string.isRequired,
  resourceId: string.isRequired,
  addResourceToCollectionAction: func.isRequired,
  removeResourceFromCollectionAction: func.isRequired,
};

const mapDispatchToProps = {
  addResourceToCollectionAction: addResourceToCollection,
  removeResourceFromCollectionAction: removeResourceFromCollection,
};

export default connect(null, mapDispatchToProps)(AddRemoveButton);

const styles = StyleSheet.create({
  removeButton: {
    color: 'red',
  },
});
