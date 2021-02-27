import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { string, shape } from 'prop-types';

import SubTypeAccordion from './SubTypeAccordion';
import { selectedResourceTypeSelector } from '../../redux/selectors';

const SubTypeAccordionsContainer = ({ selectedResourceType, resourceIdsGroupedByType }) => {
  if (!selectedResourceType) {
    return null;
  }
  const resourceSubTypes = resourceIdsGroupedByType[selectedResourceType];

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {Object.keys(resourceSubTypes).map((subType) => {
          if (subType === 'total') {
            return null
          }
          const resourcesIds = Array.from(resourceSubTypes[subType]);
          return (
            <SubTypeAccordion subType={subType} resourcesIds={resourcesIds} />
          );
        })}
      </View>
    </View>
  );
};

SubTypeAccordionsContainer.propTypes = {
  selectedResourceType: string,
  resourceIdsGroupedByType: shape({}).isRequired,
};

SubTypeAccordionsContainer.defaultProps = {
  selectedResourceType: null,
};

const mapStateToProps = (state) => ({
  selectedResourceType: selectedResourceTypeSelector(state),
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
