import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

const CatalogScreen = ({resourceId}) => (
  <View style={styles.root}>
    <Text>{resourceId}</Text>
  </View>
);

export default CatalogScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
