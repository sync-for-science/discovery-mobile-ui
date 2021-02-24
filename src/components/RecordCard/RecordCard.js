import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Card, CardItem, Body, Text, } from 'native-base';

import {getResourceText, getFormattedResourceType} from '../../resources/fhirReader'
import Colors from '../../constants/Colors'

const CatalogScreen = ({resource}) => {
  console.log('getFormattedResourceType(resource)', getFormattedResourceType(resource))
  const cardName = getResourceText(resource)
  const resourceType = getFormattedResourceType(resource)
  const cardActiveStyle = styles.cardInactive

  return (
    <Card style={styles.card}>
      <CardItem style={{...cardActiveStyle, ...styles.header}}>
        <Text>{resourceType}</Text>
        <Text>NativeBase</Text>
      </CardItem>
      <CardItem style={{...cardActiveStyle}}>
        <Body>
          <Text>
            {cardName}
          </Text>
        </Body>
      </CardItem>
    </Card>
  )
}

export default CatalogScreen;

const styles = StyleSheet.create({
  cardSelected: {
    backgroundColor: 'blue'
  },
  header: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
