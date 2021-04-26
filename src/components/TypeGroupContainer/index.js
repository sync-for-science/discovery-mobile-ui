import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { collectionRecordsGroupedByTypeSelector } from '../../redux/selectors';
import BaseText from '../Generic/BaseText';
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';

const TypeGroupContainer = ({ collectionRecords, fromDetailsPanel }) => (
  collectionRecords.map(({ type, label, subTypes }, index) => {
    const firstGroupStyle = index === 0 ? styles.firstGroupContainer : {};
    return (
      <View key={type} style={[styles.groupContainer, firstGroupStyle]}>
        <View style={styles.typeTextContainer}>
          <BaseText variant="title" style={styles.typeText}>
            {label}
          </BaseText>
        </View>
        <SubTypeAccordionsContainer
          data={subTypes}
          fromDetailsPanel={fromDetailsPanel}
        />
      </View>
    );
  })
);

const mapStateToProps = (state, ownProps) => ({
  collectionRecords: collectionRecordsGroupedByTypeSelector(state, ownProps),
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
