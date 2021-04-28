import React from 'react';
import {
  StyleSheet, View, KeyboardAvoidingView
} from 'react-native';
import { shape, arrayOf, bool } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';

const SubTypeAccordionsContainer = ({ data, fromDetailsPanel }) => (
    <View style={styles.root}>
      <View style={styles.container}>
        {data.map(({ subType, recordIds }) => (
          <SubTypeAccordion
            key={subType}
            subType={subType}
            resourceIds={recordIds}
            subTypeCount={recordIds.length}
            fromDetailsPanel={fromDetailsPanel}
          />
        ))}
      </View>
    </View>
);

SubTypeAccordionsContainer.propTypes = {
  data: arrayOf(shape({})).isRequired,
  fromDetailsPanel: bool,
};

SubTypeAccordionsContainer.defaultProps = {
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
