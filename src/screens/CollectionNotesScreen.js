import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const CollectionNotesScreen = () => (
  <SafeAreaView style={styles.root}>
    <Text>CollectionNotesScreen</Text>
  </SafeAreaView>
);

export default CollectionNotesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
