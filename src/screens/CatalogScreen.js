import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';

import Colors from '../constants/Colors';
import Catalog from '../components/Catalog';

const CatalogScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Catalog />
  </SafeAreaView>
);

export default CatalogScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
