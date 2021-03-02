import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar, ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import TimelineWidget from '../components/Timeline/TimelineWidget';
import ResourceTypeSelector from '../components/ResourceTypeSelector/ResourceTypeSelector';
import SubTypeAccordionsContainer from '../components/SubTypeAccordion/SubTypeAccordionsContainer';
import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer/FilterDrawer';
import { resourceTypeFiltersSelector } from '../redux/selectors';

const CatalogScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <FilterDrawer>
      <ScrollView>
        <TimelineWidget />
        <ResourceTypeSelector />
        <SubTypeAccordionsContainer />
      </ScrollView>
    </FilterDrawer>
  </SafeAreaView>
);

const mapStateToProps = (state) => ({
  resourceTypeFilters: resourceTypeFiltersSelector(state),
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
});
