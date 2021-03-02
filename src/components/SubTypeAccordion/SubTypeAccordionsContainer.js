import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { string, shape, bool } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';
import { supportedResourceTypeFiltersSelector, flattenedSubTypeResourcesSelector } from '../../redux/selectors';

const SubTypeAccordionsContainer = ({
  selectedResourceType,
  resourceTypeFilters,
  resourceIdsGroupedByType,
  showAllResourceTypes,
  flattenedSubTypes,
}) => {
  let resourceSubTypes = {};
  if (!showAllResourceTypes) {
    // show only selectedResourceType
    if (!selectedResourceType || !resourceTypeFilters[selectedResourceType]) {
      return null;
    }
    resourceSubTypes = resourceIdsGroupedByType[selectedResourceType];
  } else {
    // show all resourceTypes
    // const resourceTypes = Object.keys(resourceIdsGroupedByType);
    // resourceTypes.forEach((resourceType) => {
    //   const subTypes = Object.keys(resourceIdsGroupedByType[resourceType]);
    //   subTypes.forEach((subType) => {
    //     resourceSubTypes[subType] = resourceIdsGroupedByType[resourceType][subType];
    //   });
    // });
    resourceSubTypes = flattenedSubTypes
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {Object.keys(resourceSubTypes).map((subType) => {
          const resourcesIds = Array.from(resourceSubTypes[subType]);
          return (
            <SubTypeAccordion key={subType} subType={subType} resourcesIds={resourcesIds} />
          );
        })}
      </View>
    </View>
  );
};

SubTypeAccordionsContainer.propTypes = {
  selectedResourceType: string,
  resourceIdsGroupedByType: shape({}).isRequired,
  resourceTypeFilters: shape({}).isRequired,
  showAllResourceTypes: bool,
};

SubTypeAccordionsContainer.defaultProps = {
  selectedResourceType: null,
  showAllResourceTypes: false,
};

const mapStateToProps = (state) => ({
  selectedResourceType: state.selectedResourceType,
  resourceTypeFilters: supportedResourceTypeFiltersSelector(state),
  resourceIdsGroupedByType: state.resourceIdsGroupedByType,
  flattenedSubTypes: flattenedSubTypeResourcesSelector(state)
});

export default connect(mapStateToProps, null)(SubTypeAccordionsContainer);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
});
