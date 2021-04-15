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
import { activeCollectionSelector } from '../redux/selectors';
import CatalogModal from '../components/Modals/CatalogModal';

const CatalogScreenHeader = ({ collectionName, handleOpenDrawer }) => (
  <Header style={styles.header}>
    <Left>
      <TouchableOpacity onPress={handleOpenDrawer} style={styles.drawerIcon}>
        <FontAwesome5 name="filter" size={24} color={Colors.darkgrey} />
      </TouchableOpacity>
    </Left>
    <View>
      <Title style={styles.headerTitleText}>{collectionName}</Title>
    </View>
    <Right>
      <CatalogModal />
    </Right>
  </Header>
);

CatalogScreenHeader.propTypes = {
  collectionName: string,
  handleOpenDrawer: func,
};

CatalogScreenHeader.defaultProps = {
  collectionName: 'Untitled',
  handleOpenDrawer: null,
};

const CatalogScreen = ({ collection }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Swiper
      loop={false}
      showsPagination={false}
      index={0}
    >
      <FilterDrawer>
        <CatalogScreenHeader collectionName={collection?.label} />
        <Timeline />
        <ResourceTypeSelector />
        <ScrollView style={styles.scrollView}>
          <SubTypeAccordionsContainer />
        </ScrollView>
      </FilterDrawer>
      <ContentPanel />
    </Swiper>
  </SafeAreaView>
);

CatalogScreen.propTypes = {
  collection: shape({}).isRequired,
};

CatalogScreen.defaultProps = {
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
});

export default connect(mapStateToProps, null)(CatalogScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  headerTitleText: {
    color: 'black'
  }
});
