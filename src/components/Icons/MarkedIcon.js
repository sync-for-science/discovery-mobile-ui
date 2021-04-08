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
import { UNMARKED, FOCUSED } from '../../constants/marked-status';

const MarkedIcon = ({
  subType,
  resourceIds,
  isAccordion,
  updateMarkedResources,
  markedResources,
  collectionId,
  showMarkedOnly
}) => {
  const { marked } = markedResources;

  const markedOrFocusedCount = resourceIds.reduce((acc, id) => ((marked[id]) ? acc + 1 : acc), 0);
  const allAreMarked = markedOrFocusedCount === resourceIds.length;

  const handlePress = () => {
    if (isAccordion) { // could be one or more resourceId:
      const resourceIdsMap = resourceIds.reduce((acc, id) => ({
        ...acc,
        [id]: (allAreMarked ? UNMARKED : FOCUSED),
      }), {});
      const newSubType = allAreMarked ? '' : subType; // no subType if turning all off
      updateMarkedResources(newSubType, resourceIdsMap, collectionId);
    } else { // only one resourceId:
      if (markedOrFocusedCount) {
        updateMarkedResources(subType, { [resourceIds[0]]: UNMARKED }, collectionId);
      }
      if (!markedOrFocusedCount) { // one resourceId, that neither marked nor focused:
        updateMarkedResources(subType, { [resourceIds[0]]: FOCUSED }, collectionId);
      }
    }
  };

  const iconCount = (isAccordion && markedOrFocusedCount) ? markedOrFocusedCount : null;
  // eslint-disable-next-line no-nested-ternary, max-len
  const iconStyle = allAreMarked ? styles.fullyMarked : (markedOrFocusedCount ? styles.hasMarked : styles.unmarked);
  // eslint-disable-next-line no-nested-ternary, max-len
  const textStyle = allAreMarked ? textStyles.fullyMarked : (markedOrFocusedCount ? textStyles.hasMarked : textStyles.unmarked);

  return (
    <TouchableOpacity
      style={[
        styles.base,
        iconStyle,
      ]}
      onPress={handlePress}
      disabled={showMarkedOnly}
    >
      <Text style={[textStyle.base, textStyle]}>{iconCount}</Text>
    </TouchableOpacity>
  );
};

MarkedIcon.propTypes = {
  subType: string.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  isAccordion: bool.isRequired,
  updateMarkedResources: func.isRequired,
  markedResources: shape({
    focusedSubtype: string.isRequired,
    marked: shape({}).isRequired,
  }).isRequired,
  collectionId: string.isRequired,
  showMarkedOnly: bool.isRequired
};

MarkedIcon.defaultProps = {
};

const mapStateToProps = (state) => ({
  markedResources: markedResourcesSelector(state),
  collectionId: state.selectedCollection,
  showMarkedOnly: state.showMarkedOnly
});

const mapDispatchToProps = {
  updateMarkedResources: (subType, resourceIdsMap, collectionId) => ({
    type: actionTypes.UPDATE_MARKED_RESOURCES,
    payload: {
      subType,
      resourceIdsMap,
      collectionId,
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
