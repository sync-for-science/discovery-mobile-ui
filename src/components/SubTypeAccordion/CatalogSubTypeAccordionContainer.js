import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { shape, bool } from 'prop-types';

import { catalogSubTypeDataSelector } from '../../redux/selectors';
import SubTypeAccordion from './SubTypeAccordion';

const sortEntriesBySubType = ([s1], [s2]) => ((s1.toLowerCase() < s2.toLowerCase()) ? -1 : 1);

const CatalogSubTypeAccordionContainer = ({ catalogSubTypeData, fromContentPanel }) => (
  <View style={styles.root}>
    <View style={styles.container}>
      {Object.entries(catalogSubTypeData)
        .sort(sortEntriesBySubType)
        .map(([subType, values]) => {
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

CatalogSubTypeAccordionContainer.propTypes = {
  catalogSubTypeData: shape({}).isRequired,
  fromContentPanel: bool,
};

CatalogSubTypeAccordionContainer.defaultProps = {
  fromContentPanel: false,
};

const mapStateToProps = (state) => ({
  resourceTypeFilters: state.resourceTypeFilters,
  catalogSubTypeData: catalogSubTypeDataSelector(state),
});

export default connect(mapStateToProps, null)(CatalogSubTypeAccordionContainer);

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
