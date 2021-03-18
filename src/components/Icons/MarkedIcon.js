import {
  arrayOf, shape, func, string, bool,
} from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';

import Colors from '../../constants/Colors';
import { actionTypes } from '../../redux/epics';
import {
  markedResourcesSelector,
} from '../../redux/selectors';

const MarkedIcon = ({
  resourceIds,
  showCount,
  updateMarkedResources,
  markedResources,
}) => {
  const markedResourceCount = resourceIds.reduce((acc, id) => {
    const isMarked = markedResources.marked[id];
    return isMarked ? acc + 1 : acc;
  }, 0);

  const handlePress = () => {
    updateMarkedResources(resourceIds.reduce((acc, id) => ({
      ...acc,
      [id]: !markedResourceCount,
    }), {}));
  };

  const iconCount = (showCount) ? markedResourceCount : null;
  const iconStyle = (markedResourceCount > 0) ? styles.hasMarked : null;

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

MarkedIcon.propTypes = {
  resourceIds: arrayOf(string.isRequired).isRequired,
  showCount: bool.isRequired,
  updateMarkedResources: func.isRequired,
  markedResources: shape({
    marked: shape({}).isRequired,
    lastMarked: shape({}).isRequired,
  }).isRequired,
};

MarkedIcon.defaultProps = {
};

const mapStateToProps = (state) => ({
  markedResources: markedResourcesSelector(state),
});

const mapDispatchToProps = {
  updateMarkedResources: (resourceIdsMap) => ({
    type: actionTypes.UPDATE_MARKED_RESOURCES,
    payload: resourceIdsMap,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MarkedIcon));

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  base: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  hasMarked: {
    backgroundColor: Colors.primary,
  },
});
