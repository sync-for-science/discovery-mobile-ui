import {
  arrayOf, shape, func, string, bool, number,
} from 'prop-types';
import React from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text,
} from 'react-native';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import { actionTypes } from '../../redux/action-types';
import {
  activeCollectionIdSelector,
  activeCollectionMarkedResourcesSelector,
  activeCollectionShowMarkedOnlySelector,
} from '../../redux/selectors';
import { UNMARKED, FOCUSED } from '../../constants/marked-status';
import MarkedIconSVG from '../../../assets/icons/marked-icon.svg';
import MarkedIconOutlineSVG from '../../../assets/icons/marked-icon-outline.svg';

const MarkedIcon = ({
  subType,
  resourceIds,
  isAccordion,
  updateMarkedResources,
  markedResources,
  collectionId,
  showMarkedOnly,
  subTypeCount,
}) => {
  const { marked } = markedResources;
  const markedOrFocusedCount = resourceIds.reduce((acc, id) => ((marked[id]) ? acc + 1 : acc), 0);
  const totalCount = isAccordion ? subTypeCount : resourceIds.length;
  const allAreMarked = markedOrFocusedCount === totalCount;

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

  const markedIconFill = showMarkedOnly ? Colors.hasMarkedDisabled : null;

  const markedIconDisplay = markedOrFocusedCount
    ? <MarkedIconSVG height={25} width={25} fill={markedIconFill} />
    : <MarkedIconOutlineSVG height={25} width={25} />;

  return (
    <>
      {isAccordion && (
      <View style={styles.countContainer}>
        <Text style={[textStyles.text, showMarkedOnly ? textStyles.textDisabled : {}]}>
          {iconCount}
        </Text>
      </View>
      )}
      <TouchableOpacity
        style={styles.base}
        onPress={handlePress}
        disabled={showMarkedOnly}
      >
        {markedIconDisplay}
      </TouchableOpacity>
    </>
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
  showMarkedOnly: bool.isRequired,
  subTypeCount: number,
};

MarkedIcon.defaultProps = {
  subTypeCount: null,
};

const mapStateToProps = (state) => ({
  markedResources: activeCollectionMarkedResourcesSelector(state),
  collectionId: activeCollectionIdSelector(state),
  showMarkedOnly: activeCollectionShowMarkedOnlySelector(state),
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
    borderRadius: 25,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },
  fullyMarked: {
    borderColor: Colors.fullyMarked,
    borderWidth: 2,
  },
  hasMarked: {
    borderColor: Colors.fullyMarked,
  },
  fullyMarkedDisabled: {
    borderColor: Colors.lightgrey,
    borderWidth: 2,
  },
  hasMarkedDisabled: {
    borderColor: Colors.lightgrey,
  },
  unmarked: {
    borderColor: Colors.unmarked,
  },
  countContainer: {
    minWidth: 20,
    alignItems: 'flex-end',
  },
});

const textStyles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: '700',
  },
  textDisabled: {
    color: Colors.darkgrey2,
  },
  // base: {
  //   color: 'transparent',
  // },
  // fullyMarked: {
  //   color: 'black',
  //   fontWeight: 'bold',
  // },
  // hasMarked: {
  //   color: 'black',
  // },
  // fullyMarkedDisabled: {
  //   color: Colors.lightgrey,
  //   fontWeight: 'bold',
  // },
  // hasMarkedDisabled: {
  //   color: Colors.lightgrey,
  // },
  // unmarked: {
  // },
});
