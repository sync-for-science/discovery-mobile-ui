import React from 'react';
import { arrayOf, shape } from 'prop-types';
import {
  StyleSheet, View, TouchableOpacity, ScrollView,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Timeline from '../Timeline';
import ResourceTypePicker from '../ResourceTypePicker';
import SubTypeAccordionsContainer from '../SubTypeAccordionsContainer';
import { activeCollectionSelector, selectedRecordsGroupedByTypeSelector } from '../../redux/selectors';
import CatalogModal from '../Modals/CatalogModal';
import FilterDrawer from '../FilterDrawer';
import Colors from '../../constants/Colors';

const CatalogScreenHeader = ({ collection, navigation }) => (
  <Header style={styles.header}>
    <Left>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={20} color={Colors.headerIcon} />
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
  navigation: shape({}).isRequired,
};

CatalogScreenHeader.defaultProps = {
};

const Catalog = ({ collection, selectedRecordsGroupedByType, navigation }) => (
  <PanGestureHandler
    activeOffsetX={-10}
    failOffsetX={[-20, 0]}
    onGestureEvent={() => navigation.navigate('CollectionDetails')}
  >
    <View style={styles.drawerContainer}>
      <FilterDrawer>
        <CatalogScreenHeader collection={collection} navigation={navigation} />
        <Timeline />
        <ResourceTypePicker />
        <ScrollView style={styles.scrollView}>
          <SubTypeAccordionsContainer data={selectedRecordsGroupedByType} />
        </ScrollView>
      </FilterDrawer>
    </View>
  </PanGestureHandler>
);

Catalog.propTypes = {
  collection: shape({}).isRequired,
  selectedRecordsGroupedByType: arrayOf(shape({}).isRequired).isRequired,
  navigation: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
  selectedRecordsGroupedByType: selectedRecordsGroupedByTypeSelector(state),
});

export default connect(mapStateToProps, null)(Catalog);

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.headerBackground,
    alignItems: 'center',
    elevation: 0,
    height: 50
  },
  scrollView: {
    flex: 1,
  },
  collectionLabel: {
    color: 'black',
    fontSize: 18,
  },
  drawerContainer: {
    flex: 1,
  },
});
