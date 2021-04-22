import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { accordionsContainerDataSelector } from '../../redux/selectors';
import { SINGULAR_RESOURCE_TYPES } from '../../resources/resourceTypes';
import BaseText from '../Generic/BaseText';
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';

const TypeGroupContainer = ({ accordionsContainerData, isDescending, fromDetailsPanel }) => {
  const sortTypes = (type1, type2) => (type1 < type2 ? -1 : 1);
  return (
    Object.entries(accordionsContainerData).sort(sortTypes).map(([type, typeValues], index) => {
      const firstGroupStyle = index === 0 ? styles.firstGroupContainer : {};
      return (
        <View key={type} style={[styles.groupContainer, firstGroupStyle]}>
          <View style={styles.typeTextContainer}>
            <BaseText variant="title" style={styles.typeText}>
              {SINGULAR_RESOURCE_TYPES[type]}
            </BaseText>
          </View>
          <SubTypeAccordionsContainer
            data={typeValues}
            isDescending={isDescending}
            fromDetailsPanel={fromDetailsPanel}
          />
        </View>
      );
    })
  );
};

const mapStateToProps = (state, ownProps) => ({
  accordionsContainerData: accordionsContainerDataSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(TypeGroupContainer);

const styles = StyleSheet.create({
  groupContainer: {
    marginTop: 20,
  },
  firstGroupContainer: {
    marginTop: 0,
  },
  typeTextContainer: {
    marginLeft: 5,
  },
  typeText: {
    textTransform: 'uppercase',
  },
});
