import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { string, shape, bool } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';
import { flattenedSubTypeResourcesSelector, selectedSubTypeResourcesSelector } from '../../redux/selectors';

const SubTypeAccordionsContainer = ({
  selectedResourceType,
  resourceTypeFilters,
  showAllResourceTypes,
  flattenedSubTypeResources,
  selectedSubTypeResources,
}) => {
  let resourceSubTypes = {};
  if (!showAllResourceTypes) {
    // show only selectedResourceType
    if (!selectedResourceType || !resourceTypeFilters[selectedResourceType]) {
      return null;
    }
    resourceSubTypes = selectedSubTypeResources;
  } else {
    // show all resourceTypes
    resourceSubTypes = flattenedSubTypeResources;
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
  resourceTypeFilters: shape({}).isRequired,
  showAllResourceTypes: bool,
  flattenedSubTypeResources: shape({}).isRequired,
  selectedSubTypeResources: shape({}),
};

SubTypeAccordionsContainer.defaultProps = {
  selectedResourceType: null,
  selectedSubTypeResources: null,
  showAllResourceTypes: false,
};

const mapStateToProps = (state) => ({
  selectedResourceType: state.selectedResourceType,
  resourceTypeFilters: state.resourceTypeFilters,
  flattenedSubTypeResources: flattenedSubTypeResourcesSelector(state),
  selectedSubTypeResources: selectedSubTypeResourcesSelector(state),
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
