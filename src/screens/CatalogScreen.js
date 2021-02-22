import React from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar,
} from 'react-native';

import TimelineWidget from '../components/Timeline/TimelineWidget';
import CategorySelector from '../components/CategorySelector/CategorySelector';
import RecordCardsContainer from '../components/RecordCard/RecordCardsContainer';
import Colors from '../constants/Colors';

const CatalogScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.content}>
      <TimelineWidget />
      <CategorySelector />
      <RecordCardsContainer />
    </View>
  </SafeAreaView>
);

export default CatalogScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
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
