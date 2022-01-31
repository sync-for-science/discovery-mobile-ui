import React from 'react';
import { arrayOf, shape } from 'prop-types';
import {
  StyleSheet, View, TouchableOpacity, ScrollView, Text,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { connect, useSelector } from 'react-redux';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Timeline from '../Timeline';
import ResourceTypePicker from '../ResourceTypePicker';
import SubTypeAccordionsContainer from '../SubTypeAccordionsContainer';
import {
  activeCollectionSelector, selectedRecordsGroupedByTypeSelector,
  savedRecordsSelector, timelineIntervalsSelector,
} from '../../redux/selectors';
import CatalogModal from '../Modals/CatalogModal';
import FilterDrawer from '../FilterDrawer';
import Colors from '../../constants/Colors';
import HeaderCountIcon from '../Icons/HeaderCountIcon';
import TextStyles from '../../constants/TextStyles';

const CatalogScreenHeader = ({ collection, navigation }) => {
  const savedRecords = useSelector(savedRecordsSelector).length;
  return (
    <Header style={styles.header}>
      <Left>
        {/* }<TouchableOpacity onPress={() => navigation.goBack()}> */}
        <TouchableOpacity onPress={() => navigation.navigate('CollectionsList')}>
          <Entypo name="chevron-thin-left" size={20} color={Colors.headerIcon} />
        </TouchableOpacity>
      </Left>
      <View style={styles.headerTitleContainer}>
        <HeaderCountIcon count={savedRecords} outline />
        <Title style={styles.collectionLabel}>{collection?.label}</Title>
      </View>
      <Right>

        <CatalogModal collectionId={collection.id} />
      </Right>
    </Header>
  );
};

CatalogScreenHeader.propTypes = {
  collection: shape({}).isRequired,
  navigation: shape({}).isRequired,
};

CatalogScreenHeader.defaultProps = {
};

const Catalog = ({
  collection, selectedRecordsGroupedByType, navigation, timelineIntervals,
}) => {
  const noRecords = timelineIntervals.recordCount === 0;
  return (
    <PanGestureHandler
      activeOffsetX={-10}
      failOffsetX={[-20, 0]}
      onGestureEvent={() => navigation.navigate('CollectionDetails')}
    >
      <View style={styles.drawerContainer}>
        <FilterDrawer>
          <CatalogScreenHeader collection={collection} navigation={navigation} />
          <Timeline noRecords={noRecords} />
          {noRecords && (
          <View style={styles.zeroStateContainer}>
            <Text style={styles.zeroStateText}>
              No Records available based on the Filters or the time interval.
            </Text>
          </View>
          )}
          {!noRecords && (
          <>
            <ResourceTypePicker />
            <SubTypeAccordionsContainer data={selectedRecordsGroupedByType} />
          </>
          )}
        </FilterDrawer>
      </View>
    </PanGestureHandler>
  );
};

Catalog.propTypes = {
  collection: shape({}).isRequired,
  selectedRecordsGroupedByType: arrayOf(shape({}).isRequired).isRequired,
  navigation: shape({}).isRequired,
  timelineIntervals: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
  selectedRecordsGroupedByType: selectedRecordsGroupedByTypeSelector(state),
  timelineIntervals: timelineIntervalsSelector(state),
});

export default connect(mapStateToProps, null)(Catalog);

const { h5 } = TextStyles;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.headerBackground,
    alignItems: 'center',
    elevation: 0,
    height: 50,
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
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  zeroStateContainer: {
    flex: 1,
    paddingTop: 28,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  zeroStateText: {
    ...h5,
    fontWeight: '300',
    textAlign: 'center',
    color: Colors.darkgrey,
  },
});
