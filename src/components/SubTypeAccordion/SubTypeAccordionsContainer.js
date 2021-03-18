import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { shape, bool } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';

const SubTypeAccordionsContainer = ({ subTypeData, fromContentPanel }) => {
  if (subTypeData === {}) {
    return null;
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {Object.entries(subTypeData).map(([subType, values]) => {
          const resourceIds = fromContentPanel
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
            />
          );
        })}
      </View>
    </View>
  );
};

SubTypeAccordionsContainer.propTypes = {
  subTypeData: shape({}).isRequired,
  fromContentPanel: bool,
};

SubTypeAccordionsContainer.defaultProps = {
  fromContentPanel: false,
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
