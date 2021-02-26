import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { string, shape } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';

const SubTypeAccordionsContainer = ({ selectedCategory, resourceIdsGroupedByType }) => {
  const categorySubTypes = resourceIdsGroupedByType[selectedCategory];

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {Object.keys(categorySubTypes).map((subType) => {
          const resourcesIds = Array.from(categorySubTypes[subType]);
          return (
            <SubTypeAccordion subType={subType} resourcesIds={resourcesIds} />
          );
        })}
      </View>
    </View>
  );
};

SubTypeAccordionsContainer.propTypes = {
  selectedCategory: string,
  resourceIdsGroupedByType: shape({}).isRequired
}

SubTypeAccordionsContainer.defaultProps = {
  selectedCategory: null
}

const mapStateToProps = (state) => ({
  resourceIdsGroupedByType: state.resourceIdsGroupedByType,
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
