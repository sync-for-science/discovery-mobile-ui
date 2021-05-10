import React from 'react';
import { arrayOf, shape } from 'prop-types';
import {
  StyleSheet, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  Header, Right, Title, Left,
} from 'native-base';

import Timeline from '../Timeline';
import ResourceTypePicker from '../ResourceTypePicker';
import SubTypeAccordionsContainer from '../SubTypeAccordionsContainer';
import { activeCollectionSelector, selectedRecordsGroupedByTypeSelector } from '../../redux/selectors';
import CatalogModal from '../Modals/CatalogModal';
import FilterDrawer from '../FilterDrawer';

const CatalogScreenHeader = ({ collection }) => (
  <Header style={styles.header}>
    <Left />
    <View>
      <Title style={styles.collectionLabel}>{collection?.label}</Title>
    </View>
    <Right>
      <CatalogModal collectionId={collection.id} />
    </Right>
  </Header>
);

CatalogScreenHeader.propTypes = {
  collection: shape({}).isRequired,
};

CatalogScreenHeader.defaultProps = {
};

const Catalog = ({ collection, selectedRecordsGroupedByType }) => (
  <FilterDrawer>
    <CatalogScreenHeader collection={collection} />
    <Timeline />
    <ResourceTypePicker />
    <ScrollView style={styles.scrollView}>
      <SubTypeAccordionsContainer data={selectedRecordsGroupedByType} />
    </ScrollView>
  </FilterDrawer>
);

Catalog.propTypes = {
  collection: shape({}).isRequired,
  selectedRecordsGroupedByType: arrayOf(shape({}).isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
  selectedRecordsGroupedByType: selectedRecordsGroupedByTypeSelector(state),
});

export default connect(mapStateToProps, null)(Catalog);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 0,
  },
  scrollView: {
    flex: 1,
  },
  collectionLabel: {
    color: 'black',
    fontSize: 18,
  },
});
