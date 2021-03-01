import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { string, shape } from 'prop-types';
import { Card, CardItem, Button } from 'native-base';
import { connect } from 'react-redux'

import BaseText from '../Generic/BaseText'
import BaseDivider from '../Generic/BaseDivider'
import RESOURCE_TYPES from '../../resources/resourceTypes'
import { getResourceDate } from '../../resources/fhirReader'
import GenericCardBody from '../ResourceCardBody/GenericCardBody'

const ResourceCard = ({resourceId, resources}) => {
  const resource = resources[resourceId]
  const resourceType = RESOURCE_TYPES[resource?.resourceType]
  const resourceDate = getResourceDate(resource)
  console.log('resource', resource)
  console.log('resourceDate', resourceDate)
  return (
    <Card>
      <CardItem style={styles.header}>
        <BaseText variant='header'>{resourceType}</BaseText>
        <BaseText>{resourceDate}</BaseText>
      </CardItem>
      <CardItem >
        <View style={styles.cardBody}>
          <GenericCardBody resource={resource}/>
        </View>
      </CardItem>
      <BaseDivider />
      <View style={styles.button}>
        <Button transparent>
          <BaseText variant="button">Add To Collection</BaseText>
        </Button>
      </View>
    </Card>
  )
}

ResourceCard.propTypes = {
  resourceId: string.isRequired,
  resources: shape({}).isRequired
}

const mapStateToProps = (state) => ({
  resources: state.resources
})

export default connect(mapStateToProps, null)(ResourceCard);

const styles = StyleSheet.create({
  cardSelected: {
    backgroundColor: 'blue'
  },
  header: {
    flex: 1,
    justifyContent: 'space-between'
  },
  button: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },
  cardBody: {
    width: '100%'
  }
});
