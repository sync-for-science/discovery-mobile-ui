import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { shape, string } from 'prop-types';

import { collectionFlattenedSubTypesSelector } from '../../redux/selectors';
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';
import Colors from '../../constants/Colors';

const ContentPanel = ({ collections, selectedCollection, collectionFlattenedSubTypes }) => {
  const collection = collections[selectedCollection];
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>{collection?.label}</Text>
      </View>
      { Object.keys(collectionFlattenedSubTypes).length > 0 ? (
        <SubTypeAccordionsContainer showAllSubTypes subTypeData={collectionFlattenedSubTypes} />
      ) : (
        <View style={styles.noRecordsContainer}>
          <Text style={styles.noRecordsText}>No Records Selected</Text>
        </View>
      )}
    </ScrollView>
  );
};

ContentPanel.propTypes = {
  collections: shape({}).isRequired,
  selectedCollection: string.isRequired,
  collectionFlattenedSubTypes: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collections: state.collections,
  selectedCollection: state.selectedCollection,
  collectionFlattenedSubTypes: collectionFlattenedSubTypesSelector(state),
});

export default connect(mapStateToProps, null)(ContentPanel);

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  noRecordsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  noRecordsText: {
    fontSize: 30,
    fontWeight: '500',
    color: Colors.lightgrey,
    fontStyle: 'italic',
  },
});
