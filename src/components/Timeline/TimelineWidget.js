import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

const CatalogScreen = () => (
    <View style={styles.root}>
      <Text>Timeline Widget</Text>
    </View>
);

export default CatalogScreen;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 150,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
