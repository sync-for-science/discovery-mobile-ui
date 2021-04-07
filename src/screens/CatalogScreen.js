import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar, View, TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { func, shape, string } from 'prop-types';

import Timeline from '../components/Timeline';
import ResourceTypeSelector from '../components/ResourceTypeSelector/ResourceTypeSelector';
import SubTypeAccordionsContainer from '../components/SubTypeAccordion/SubTypeAccordionsContainer';
import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer/FilterDrawer';
import ContentPanel from '../components/ContentPanel/ContentPanel';
import { selectedFlattenedSubTypesSelector, collectionSelector } from '../redux/selectors';
import CatalogModal from '../components/Modals/CatalogModal';

const CatalogScreenHeader = ({ collection, handleOpenDrawer }) => (
  <Header style={styles.header}>
    <Left>
      <TouchableOpacity onPress={handleOpenDrawer} style={styles.drawerIcon}>
        <FontAwesome5 name="filter" size={24} color={Colors.darkgrey} />
      </TouchableOpacity>
    </Left>
    <View>
      <Title style={{ color: 'black' }}>{collection?.label}</Title>
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

const CatalogScreen = ({
  selectedResourceType, selectedFlattenedSubTypes, collection,
}) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Swiper
      loop={false}
      showsPagination={false}
      index={0}
    >
      <FilterDrawer>
        <CatalogScreenHeader collection={collection} />
        <View>
          <Timeline />
          <ResourceTypeSelector />
        </View>
        <ScrollView>
          { selectedResourceType && (
            <SubTypeAccordionsContainer subTypeData={selectedFlattenedSubTypes} />
          )}
        </ScrollView>
      </FilterDrawer>
      <ContentPanel />
    </Swiper>
  </SafeAreaView>
);

CatalogScreen.propTypes = {
  selectedResourceType: string,
  selectedFlattenedSubTypes: shape({}).isRequired,
  collection: shape({}).isRequired,
};

CatalogScreen.defaultProps = {
  selectedResourceType: null,
};

const mapStateToProps = (state) => ({
  selectedResourceType: state.selectedResourceType,
  selectedFlattenedSubTypes: selectedFlattenedSubTypesSelector(state),
  collection: collectionSelector(state),
});

export default connect(mapStateToProps, null)(CatalogScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
  },
  drawerIcon: {
    paddingLeft: 10,
  },
});
