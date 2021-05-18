import { shape } from 'prop-types';
import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import DetailsPanel from '../components/DetailsPanel/index';

const CollectionDetailsScreen = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <DetailsPanel navigation={navigation} />
  </SafeAreaView>
);

CollectionDetailsScreen.propTypes = {
  navigation: shape({}).isRequired,
};

export default CollectionDetailsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});
