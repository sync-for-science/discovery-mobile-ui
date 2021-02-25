import React from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

const CatalogScreen = () => (
  <ScrollView style={styles.root} horizontal>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Category</Text>
    </View>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Category</Text>
    </View>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Category</Text>
    </View>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Category</Text>
    </View>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Category</Text>
    </View>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Category</Text>
    </View>
  </ScrollView>
);

export default CatalogScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    flexDirection: 'row',
    padding: 10,
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
