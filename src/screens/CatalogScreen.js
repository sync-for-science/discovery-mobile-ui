import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

import TimelineWidget from '../components/Timeline/TimelineWidget';
import ResourceTypeSelector from '../components/ResourceTypeSelector/ResourceTypeSelector';
import SubTypeAccordionsContainer from '../components/SubTypeAccordion/SubTypeAccordionsContainer';
import Colors from '../constants/Colors';
import FilterDrawer from '../components/FilterDrawer/FilterDrawer';
import ContentPanel from '../components/ContentPanel/ContentPanel';

const CatalogScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Swiper
      loop={false}
      showsPagination={false}
      index={0}
    >
      <FilterDrawer>
        <ScrollView>
          <TimelineWidget />
          <ResourceTypeSelector />
          <SubTypeAccordionsContainer />
        </ScrollView>
      </FilterDrawer>
      <ContentPanel />
    </Swiper>
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
});
