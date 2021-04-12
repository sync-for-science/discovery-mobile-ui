import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
import { accordionsContainerDataSelector } from '../../redux/selectors';

import SubTypeAccordion from './SubTypeAccordion';

const sortEntriesBySubType = ([s1], [s2]) => ((s1.toLowerCase() < s2.toLowerCase()) ? -1 : 1);

const SubTypeAccordionsContainer = ({ accordionsContainerData }) => (
  <View style={styles.root}>
    <View style={styles.container}>
      {Object.entries(accordionsContainerData)
        .sort(sortEntriesBySubType)
        .map(([subType, values], index) => {
          if (values.length === 0) {
            return null;
          }
          return (
            <SubTypeAccordion
              key={subType}
              index={index}
              subType={subType}
              resourceIds={values.resourceIds}
              subTypeCount={values.subTypeCount}
            />
          );
        })}
    </View>
  </View>
);

SubTypeAccordionsContainer.propTypes = {
  accordionsContainerData: shape({}).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  accordionsContainerData: accordionsContainerDataSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(SubTypeAccordionsContainer);

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
