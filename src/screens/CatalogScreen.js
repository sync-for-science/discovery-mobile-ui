import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { shape } from 'prop-types';

import Colors from '../constants/Colors';
import DetailsPanel from '../components/DetailsPanel';
import Catalog from '../components/Catalog';

const CatalogScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Swiper
      loop={false}
      showsPagination={false}
      index={0}
    >
      <Catalog />
      <DetailsPanel navigation={navigation} />
    </Swiper>
  </SafeAreaView>
);

CatalogScreen.propTypes = {
  navigation: shape({}).isRequired,
};

CatalogScreen.defaultProps = {
};

export default CatalogScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
