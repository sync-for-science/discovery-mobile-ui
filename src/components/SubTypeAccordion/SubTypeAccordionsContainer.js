import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { shape, bool } from 'prop-types';
import { accordionsContainerDataSelector} from '../../redux/selectors'

import SubTypeAccordion from './SubTypeAccordion';

const sortEntriesBySubType = ([s1], [s2]) => ((s1.toLowerCase() < s2.toLowerCase()) ? -1 : 1);

const SubTypeAccordionsContainer = ({ subTypeData, fromContentPanel, showCollectionOnly, showMarkedOnly, accordionsContainerData }) => {
  console.log('fromContentPanel', fromContentPanel, accordionsContainerData)
  return (
  <View style={styles.root}>
    <View style={styles.container}>
      {Object.entries(accordionsContainerData)
        .sort(sortEntriesBySubType)
        .map(([subType, values]) => {
          console.log('values', values)

          const resourceIds = fromContentPanel
            ? values.collectionDateFilteredResourceIds
            : values.dateFilteredResourceIds;
          // this is where separate SubTypeAccordionContainer components would be helpful
          // one for displaying just CollectionPreview
          // one for displaying showCollectionOnly and showMarkedOnly in CatalogScreen
          // let resourceIds
          // if (fromContentPanel) {
          //   resourceIds = values.collectionDateFilteredResourceIds
          // } else if (showCollectionOnly && !showMarkedOnly) {
          //   resourceIds = values.collectionDateFilteredResourceIds
          // } else if (!showCollectionOnly && showMarkedOnly) {
          //   resourceIds = values.markedDateFilteredResourceIds
          // } else if (showCollectionOnly && showMarkedOnly) {
          //   resourceIds = values.collectionAndMarkedResourceIds
          // }

          // return null
          if (values.length === 0) {
            return null;
          }
          return (
            <SubTypeAccordion
              key={subType}
              subType={subType}
              resourceIds={values.resourceIds}
              dateFilteredCount={values.subTypeCount}
            />
          );
        })}
    </View>
  </View>
)};

SubTypeAccordionsContainer.propTypes = {
  subTypeData: shape({}).isRequired,
  fromContentPanel: bool,
  showCollectionOnly: bool.isRequired,
  showMarkedOnly: bool.isRequired
};

SubTypeAccordionsContainer.defaultProps = {
  fromContentPanel: false,
};

const mapStateToProps = (state, ownProps) => ({
  resourceTypeFilters: state.resourceTypeFilters,
  showCollectionOnly: state.showCollectionOnly,
  showMarkedOnly: state.showMarkedOnly,
  accordionsContainerData: accordionsContainerDataSelector(state, ownProps)
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
