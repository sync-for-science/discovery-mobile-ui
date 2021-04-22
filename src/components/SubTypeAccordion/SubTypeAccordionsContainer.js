import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { shape, arrayOf } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';

const SubTypeAccordionsContainer = ({ data }) => (
  <View style={styles.root}>
    <View style={styles.container}>
      {data.map(({ subType, recordIds }) => (
        <SubTypeAccordion
          key={subType}
          subType={subType}
          resourceIds={recordIds}
          subTypeCount={recordIds.length}
        />
      ))}
    </View>
  </View>
);

SubTypeAccordionsContainer.propTypes = {
  data: arrayOf(shape({})).isRequired,
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
