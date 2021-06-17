import React from 'react';
import {
  StyleSheet, ScrollView, SafeAreaView,
} from 'react-native';
import { shape } from 'prop-types';

import CollectionRow from '../CollectionRow/CollectionRow';

const CollectionsIndex = ({
  navigation,
  collections,
}) => (
  <SafeAreaView style={styles.safeAreaView}>
    <ScrollView contentContainerStyle={styles.collectionRowContainer}>
      {Object.entries(collections).map(([id, { label }]) => (
        <CollectionRow
          key={id}
          collectionId={id}
          label={label}
          navigation={navigation}
        />
      ))}
    </ScrollView>
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
