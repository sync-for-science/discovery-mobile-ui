import React from 'react';
import {
  StyleSheet, View, SafeAreaView,
} from 'react-native';
import { shape } from 'prop-types';

import CollectionsIndexHeader from './CollectionsIndexHeader';
import CollectionRow from '../CollectionRow/CollectionRow';

const CollectionsIndex = ({
  navigation,
  collections,
}) => (
  <SafeAreaView style={styles.safeAreaView}>
    <CollectionsIndexHeader />
    <View style={styles.collectionRowContainer}>
      {Object.entries(collections).map(([id, { label }]) => (
        <CollectionRow
          key={id}
          collectionId={id}
          label={label}
          navigation={navigation}
        />
      ))}
    </View>
  </SafeAreaView>
);

CollectionsIndex.propTypes = {
  navigation: shape({}).isRequired,
  collections: shape({}).isRequired,
};

export default CollectionsIndex;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  collectionRowContainer: {
    alignItems: 'center',
  },
});
