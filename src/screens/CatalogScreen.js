import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar, ScrollView,
} from 'react-native';

import TimelineWidget from '../components/Timeline/TimelineWidget';
import CategorySelector from '../components/CategorySelector/CategorySelector';
import RecordCardsContainer from '../components/RecordCard/RecordCardsContainer';
import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer/FilterDrawer';

const CatalogScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <FilterDrawer>
      <ScrollView style={styles.content}>
        <TimelineWidget />
        <CategorySelector />
        <RecordCardsContainer />
      </ScrollView>
    </FilterDrawer>
  </SafeAreaView>
);

export default CatalogScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
  },
});
