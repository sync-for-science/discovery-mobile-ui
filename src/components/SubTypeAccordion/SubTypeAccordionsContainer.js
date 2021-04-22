import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { shape, bool } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';

const sortEntriesBySubType = ([s1], [s2]) => ((s1.toLowerCase() < s2.toLowerCase()) ? -1 : 1);

const SubTypeAccordionsContainer = ({
  isDescending,
  fromDetailsPanel,
  data
}) => {
  return (
  <View style={styles.root}>
    <View style={styles.container}>
      {Object.entries(data)
        .sort(sortEntriesBySubType)
        .map(([subType, values]) => {
          if (values.length === 0) {
            return null;
          }
          let orderedResourceIds;
          if (!fromDetailsPanel) {
            orderedResourceIds = values.resourceIds;
          } else {
            orderedResourceIds = isDescending
              ? values.resourceIds
              : [...values.resourceIds].reverse();
          }

          return (
            <SubTypeAccordion
              key={subType}
              subType={subType}
              resourceIds={orderedResourceIds}
              subTypeCount={values.subTypeCount}
              fromDetailsPanel={fromDetailsPanel}
            />
          );
        })}
    </View>
  </View>
)};

SubTypeAccordionsContainer.propTypes = {
  accordionsContainerData: shape({}).isRequired,
  isDescending: bool,
  fromDetailsPanel: bool,
};

SubTypeAccordionsContainer.defaultProps = {
  isDescending: false,
  fromDetailsPanel: false,
};

export default SubTypeAccordionsContainer;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
});
