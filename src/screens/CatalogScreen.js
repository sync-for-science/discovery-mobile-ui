import React from 'react';
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';

import { shape } from 'prop-types';
import Colors from '../constants/Colors';
import Catalog from '../components/Catalog';

const CatalogScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <Catalog navigation={navigation} />
  </SafeAreaView>
);

CatalogScreen.propTypes = {
  navigation: shape({}).isRequired,
};

export default CatalogScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
