import {
  arrayOf, shape, func, string, bool,
} from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../constants/Colors';
import { actionTypes } from '../../redux/action-types';
import {
  activeCollectionIdSelector,
  activeCollectionMarkedResourcesSelector,
} from '../../redux/selectors';
import { MARKED, FOCUSED } from '../../constants/marked-status';

const FocusedIcon = ({
  subType,
  resourceIds,
  isAccordion,
  updateFocusedResources,
  markedResources,
  collectionId,
}) => {
  const { marked } = markedResources;
  const markedOrFocusedCount = resourceIds.reduce((acc, id) => (marked[id] ? acc + 1 : acc), 0);
  const focusedCount = resourceIds.reduce((acc, id) => (marked[id] === FOCUSED ? acc + 1 : acc), 0);
  const markedCount = resourceIds.reduce((acc, id) => (marked[id] === MARKED ? acc + 1 : acc), 0);
  const allAreFocused = resourceIds.length === focusedCount;
  const fullyFocused = focusedCount && (markedCount === 0);

  const handlePress = () => {
    if (isAccordion) { // could be one or more resourceId:
      const newSubType = allAreFocused ? '' : subType; // no subType if turning all off
      const resourceIdsMap = resourceIds.reduce((acc, id) => ({
        ...acc,
        // eslint-disable-next-line max-len, no-nested-ternary
        [id]: (marked[id] && fullyFocused) ? MARKED : (marked[id] === MARKED ? FOCUSED : marked[id]),
      }), {});
      updateFocusedResources(newSubType, resourceIdsMap, collectionId);
    } else {
      // (unmarked or marked) > focused > marked
      updateFocusedResources(
        subType,
        { [resourceIds[0]]: (focusedCount ? MARKED : FOCUSED) },
        collectionId,
      );
    }
  };

  // eslint-disable-next-line no-nested-ternary, max-len
  const iconColor = (fullyFocused ? Colors.fullyFocused : (focusedCount ? Colors.hasFocused : (markedOrFocusedCount) ? Colors.hasMarked : 'white'));

  return (
    <TouchableOpacity
      {...{ onPress: (iconColor === 'white' ? undefined : handlePress) }}
    >
      <MaterialIcons name="center-focus-strong" size={24} color={iconColor} />
    </TouchableOpacity>
  );
};

FocusedIcon.propTypes = {
  subType: string.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  isAccordion: bool.isRequired,
  updateFocusedResources: func.isRequired,
  markedResources: shape({
    focusedSubtype: string.isRequired,
    marked: shape({}).isRequired,
  }).isRequired,
  collectionId: string.isRequired,
};

FocusedIcon.defaultProps = {
};

const mapStateToProps = (state) => ({
  markedResources: activeCollectionMarkedResourcesSelector(state),
  collectionId: activeCollectionIdSelector(state),
});

const mapDispatchToProps = {
  updateFocusedResources: (subType, resourceIdsMap, collectionId) => ({
    type: actionTypes.UPDATE_MARKED_RESOURCES,
    payload: {
      subType,
      resourceIdsMap,
      collectionId,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(FocusedIcon));
