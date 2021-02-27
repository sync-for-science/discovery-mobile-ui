import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar, ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import { shape } from 'prop-types';
import TimelineWidget from '../components/Timeline/TimelineWidget';
import CategorySelector from '../components/CategorySelector/CategorySelector';
import SubTypeAccordionsContainer from '../components/SubTypeAccordion/SubTypeAccordionsContainer';
import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer/FilterDrawer';
import { supportedResourceTypeFiltersSelector } from '../redux/selectors';

const CatalogScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <FilterDrawer>
        <ScrollView>
          <TimelineWidget />
          <CategorySelector />
          <SubTypeAccordionsContainer />
        </ScrollView>
      </FilterDrawer>
    </SafeAreaView>
  );
};

CatalogScreen.propTypes = {
  resourceIdsGroupedByType: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  resourceTypeFilters: supportedResourceTypeFiltersSelector(state),
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
