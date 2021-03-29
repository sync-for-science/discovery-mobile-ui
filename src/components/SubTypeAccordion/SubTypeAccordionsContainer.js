import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { shape, bool } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';

const sortEntriesBySubType = ([s1], [s2]) => ((s1.toLowerCase() < s2.toLowerCase()) ? -1 : 1);

const SubTypeAccordionsContainer = ({ subTypeData, showAllSubTypes, previewCollection }) => (
  <View style={styles.root}>
    <View style={styles.container}>
      {Object.entries(subTypeData)
        .sort(sortEntriesBySubType)
        .map(([subType, values]) => {
          const resourceIds = showAllSubTypes
            ? values.collectionDateFilteredResourceIds
            : values.dateFilteredResourceIds;

          if (resourceIds.length === 0) {
            return null;
          }
          return (
            <SubTypeAccordion
              key={subType}
              subType={subType}
              resourceIds={resourceIds}
              dateFilteredCount={values.dateFilteredCount}
              previewCollection={previewCollection}
            />
          );
        })}
    </View>
  </View>
);

SubTypeAccordionsContainer.propTypes = {
  subTypeData: shape({}).isRequired,
  showAllSubTypes: bool,
};

SubTypeAccordionsContainer.defaultProps = {
  showAllSubTypes: false,
};

const mapStateToProps = (state) => ({
  resourceTypeFilters: state.resourceTypeFilters,
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
