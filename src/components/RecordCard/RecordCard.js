import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import {getResourceText} from '../../resources/fhirReader'

const CatalogScreen = ({resource}) => {
  console.log('resource', resource)
  const cardName = getResourceText(resource)
  return (
    <View style={styles.root}>
      <Text>Record Card</Text>
      <Text>{cardName}</Text>
    </View>
  )
}

export default CatalogScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 15,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
