import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Card, CardItem, Body, Text, } from 'native-base';

import {getResourceText} from '../../resources/fhirReader'

const CatalogScreen = ({resource}) => {
  console.log('resource', resource)
  const cardName = getResourceText(resource)
  return (
    <Card>
      <CardItem>
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
