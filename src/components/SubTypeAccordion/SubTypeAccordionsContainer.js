import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { shape, arrayOf, bool } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';

const SubTypeAccordionsContainer = ({ data, isDescending, fromDetailsPanel }) => (
  <View style={styles.root}>
    <View style={styles.container}>
      {data.map(({ subType, recordIds }) => {
        // eslint-disable-next-line no-nested-ternary, max-len
        const sortedRecordIds = !fromDetailsPanel
          ? recordIds
          : (isDescending ? recordIds : [...recordIds].reverse());

        return (
          <SubTypeAccordion
            key={subType}
            subType={subType}
            resourceIds={sortedRecordIds}
            subTypeCount={recordIds.length}
            fromDetailsPanel={fromDetailsPanel}
          />
        );
      })}
    </View>
  </View>
);

SubTypeAccordionsContainer.propTypes = {
  data: arrayOf(shape({})).isRequired,
  isDescending: bool,
  fromDetailsPanel: bool,
};

SubTypeAccordionsContainer.defaultProps = {
  isDescending: null,
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
