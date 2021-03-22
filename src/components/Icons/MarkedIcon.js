import {
  arrayOf, shape, func, string, bool,
} from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';

import Colors from '../../constants/Colors';
import { actionTypes } from '../../redux/action-types';
import {
  markedResourcesSelector,
} from '../../redux/selectors';

const MarkedIcon = ({
  resourceIds,
  showCount,
  updateMarkedResources,
  markedResources,
}) => {
  const markedCount = resourceIds.reduce((acc, id) => {
    const isMarked = markedResources[id];
    return isMarked ? acc + 1 : acc;
  }, 0);

  const allAreMarked = markedCount === resourceIds.length;

  const handlePress = () => {
    updateMarkedResources(resourceIds.reduce((acc, id) => ({
      ...acc,
      [id]: !allAreMarked,
    }), {}));
  };

  const iconCount = (showCount && markedCount) ? markedCount : null;
  // eslint-disable-next-line no-nested-ternary, max-len
  const iconStyle = markedCount ? styles.hasMarked : null;

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
  markedResources: shape({}).isRequired,
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
    borderColor: Colors.hasMarked,
  },
  hasMarked: {
    borderColor: Colors.hasMarked,
    backgroundColor: Colors.hasMarked,
  },
});
