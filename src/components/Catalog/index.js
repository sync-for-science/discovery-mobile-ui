import React from 'react';
import { arrayOf, func, shape } from 'prop-types';
import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Timeline from '../Timeline';
import ResourceTypePicker from '../ResourceTypePicker';
import SubTypeAccordionsContainer from '../SubTypeAccordionsContainer';
import Colors from '../../constants/Colors';
import { activeCollectionSelector, selectedRecordsGroupedByTypeSelector } from '../../redux/selectors';
import CatalogModal from '../Modals/CatalogModal';
import FilterDrawer from '../FilterDrawer';

const CatalogScreenHeader = ({ collection, handleOpenDrawer }) => (
  <Header style={styles.header}>
    <Left>
      <TouchableOpacity onPress={handleOpenDrawer} style={styles.drawerIcon}>
        <MaterialCommunityIcons name="filter-outline" size={24} color={Colors.headerIcon} />
      </TouchableOpacity>
    </Left>
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
  handleOpenDrawer: func,
};

CatalogScreenHeader.defaultProps = {
  handleOpenDrawer: null,
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
  drawerIcon: {
    paddingLeft: 10,
  },
  scrollView: {
    flex: 1,
  },
  collectionLabel: {
    color: 'black',
    fontSize: 18,
  },
});
