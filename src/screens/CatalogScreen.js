import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import Swiper from 'react-native-swiper';

import Colors from '../constants/Colors';
import Catalog from '../components/Catalog';

const CatalogScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Swiper
      loop={false}
      showsPagination={false}
      index={0}
    >
      <Catalog />
    </Swiper>
  </SafeAreaView>
);

export default CatalogScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
