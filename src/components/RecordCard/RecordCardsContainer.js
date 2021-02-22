import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import RecordCard from './RecordCard';

const CatalogScreen = () => (
  <View style={styles.root}>
    <Text>RecordCards Container</Text>
    <View style={styles.container}>
      <RecordCard />
      <RecordCard />
      <RecordCard />
      <RecordCard />
      <RecordCard />
      <RecordCard />
      <RecordCard />
    </View>
  </View>
);

export default CatalogScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 10,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
});
