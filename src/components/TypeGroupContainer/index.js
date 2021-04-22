import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { collectionRecordsGroupedByTypeSelector } from '../../redux/selectors';
import BaseText from '../Generic/BaseText';
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';

const TypeGroupContainer = ({ collectionRecords, isDescending, fromDetailsPanel }) => {
  console.log('collectionRecords', collectionRecords)
  return (
    collectionRecords.map(({type, label, subTypes}, index) => {
      console.log('type', type)
      const firstGroupStyle = index === 0 ? styles.firstGroupContainer : {};
      return (
        <View key={type} style={[styles.groupContainer, firstGroupStyle]}>
          <View style={styles.typeTextContainer}>
            <BaseText variant="title" style={styles.typeText}>
              {label}
            </BaseText>
          </View>
          {/* <SubTypeAccordionsContainer
            data={subTypes}
            isDescending={isDescending}
            fromDetailsPanel={fromDetailsPanel}
          /> */}
        </View>
      );
    })
  );
};

const mapStateToProps = (state) => ({
  collectionRecords: collectionRecordsGroupedByTypeSelector(state)
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