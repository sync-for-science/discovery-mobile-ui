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
  focusedSubtypeSelector,
} from '../../redux/selectors';

const MarkedIcon = ({
  subType,
  resourceIds,
  isAccordion,
  updateFocusedSubtype,
  updateMarkedResources,
  updateFocusedResources,
  focusedSubtype,
  markedResources,
}) => {
  const markedCount = resourceIds.reduce((acc, id) => (markedResources[id] ? acc + 1 : acc), 0);
  const allAreMarked = markedCount === resourceIds.length;

  const handlePress = () => {
    if (isAccordion) { // could be one or more resourceId:
      const resourceIdsMap = resourceIds.reduce((acc, id) => ({ ...acc, [id]: !allAreMarked }), {});
      const newSubType = allAreMarked ? '' : subType; // no subType if turning all off
      updateFocusedSubtype(newSubType, resourceIdsMap);
    } else { // only one resourceId:
      // console.info('markedCount: ', markedCount);
      if (markedCount) {
        updateMarkedResources(subType, { [resourceIds[0]]: false });
      }
      if (!markedCount) { // one resourceId, that neither marked nor focused:
        const isNewSubtype = (subType !== focusedSubtype);
        updateFocusedResources(isNewSubtype ? '' : subType, { [resourceIds[0]]: true }, true);
      }
    }
  };

  const iconCount = (isAccordion && markedCount) ? markedCount : null;
  // eslint-disable-next-line no-nested-ternary, max-len
  const iconStyle = allAreMarked ? styles.fullyMarked : (markedCount ? styles.hasMarked : styles.unmarked);
  // eslint-disable-next-line no-nested-ternary, max-len
  const textStyle = allAreMarked ? textStyles.fullyMarked : (markedCount ? textStyles.hasMarked : textStyles.unmarked);

  return (
    <TouchableOpacity
      style={[
        styles.base,
        iconStyle,
      ]}
      onPress={handlePress}
    >
      <Text style={[textStyle.base, textStyle]}>{iconCount}</Text>
    </TouchableOpacity>
  );
};

MarkedIcon.propTypes = {
  subType: string.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  isAccordion: bool.isRequired,
  focusedSubtype: string.isRequired,
  updateFocusedSubtype: func.isRequired,
  updateMarkedResources: func.isRequired,
  updateFocusedResources: func.isRequired,
  markedResources: shape({}).isRequired,
};

MarkedIcon.defaultProps = {
};

const mapStateToProps = (state) => ({
  focusedSubtype: focusedSubtypeSelector(state),
  markedResources: markedResourcesSelector(state),
});

const mapDispatchToProps = {
  updateFocusedSubtype: (subType, resourceIdsMap) => ({
    type: actionTypes.UPDATE_FOCUSED_SUBTYPE,
    payload: {
      subType,
      resourceIdsMap,
    },
  }),
  updateMarkedResources: (subType, resourceIdsMap) => ({
    type: actionTypes.UPDATE_MARKED_RESOURCES,
    payload: {
      subType,
      resourceIdsMap,
    },
  }),
  updateFocusedResources: (subType, resourceIdsMap, force) => ({
    type: actionTypes.UPDATE_FOCUSED_RESOURCES,
    payload: {
      subType,
      resourceIdsMap,
      force,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MarkedIcon));

const styles = StyleSheet.create({
  base: {
    borderColor: 'transparent',
    borderWidth: 0.5,
    borderRadius: 30,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 5,
  },
  fullyMarked: {
    borderColor: Colors.fullyMarked,
    borderWidth: 2,
  },
  hasMarked: {
    borderColor: Colors.fullyMarked,
  },
  unmarked: {
    borderColor: Colors.unmarked,
  },
});

const textStyles = StyleSheet.create({
  base: {
    color: 'transparent',
  },
  fullyMarked: {
    color: Colors.fullyMarked,
    fontWeight: 'bold',
  },
  hasMarked: {
    color: Colors.fullyMarked,
  },
  unmarked: {
  },
});
