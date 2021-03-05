import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { string, shape, bool } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';
import {
  selectedSubTypeResourcesSelector,
  collectionFlattenedSubTypeResourcesSelector,
  filteredResourceTypesSelector,
  selectedFlattenedSubTypesSelector
} from '../../redux/selectors';

const SubTypeAccordionsContainer = ({
  selectedResourceType,
  resourceTypeFilters,
  showCollectionResourceTypes,
  selectedSubTypeResources,
  collectionFlattenedSubTypeResources,
  filteredResourceTypes,
  selectedFlattenedSubTypes
}) => {
  // console.log('selectedFlattenedSubTypes', selectedFlattenedSubTypes)
  let resourceSubTypes = {};
  if (!showCollectionResourceTypes) {
    // show only selectedResourceType
    if (selectedFlattenedSubTypes === {}) {
      return null;
    }
    resourceSubTypes = selectedFlattenedSubTypes;
  } else {
    // show collection included resourceTypes
    resourceSubTypes = collectionFlattenedSubTypeResources;
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {Object.entries(resourceSubTypes).map(([subType, values]) => {
          const resourcesIds = values.dateFilteredResourceIds
          return (
            <SubTypeAccordion key={subType} subType={subType} subTypeValues={values} />
          );
        })}
      </View>
    </View>
  );
};

SubTypeAccordionsContainer.propTypes = {
  selectedResourceType: string,
  resourceTypeFilters: shape({}).isRequired,
  showCollectionResourceTypes: bool,
  selectedSubTypeResources: shape({}),
  collectionFlattenedSubTypeResources: shape({}),
};

SubTypeAccordionsContainer.defaultProps = {
  selectedResourceType: null,
  selectedSubTypeResources: null,
  showCollectionResourceTypes: false,
  collectionFlattenedSubTypeResources: {},
};

const mapStateToProps = (state) => ({
  selectedResourceType: state.selectedResourceType,
  resourceTypeFilters: state.resourceTypeFilters,
  selectedSubTypeResources: selectedSubTypeResourcesSelector(state),
  collectionFlattenedSubTypeResources: collectionFlattenedSubTypeResourcesSelector(state),
  filteredResourceTypes: filteredResourceTypesSelector(state),
  selectedFlattenedSubTypes: selectedFlattenedSubTypesSelector(state)
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
