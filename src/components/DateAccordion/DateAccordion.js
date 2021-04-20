import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { activeCollectionSelector } from '../../redux/selectors'

const DateAccordion = ({label, resourceIds, collection}) => {
  const collectionResourceIds = collection.resourceIds
  return (
    <View>
      <Text>{label}</Text>
      {resourceIds.map(resourceId => <Text>{collectionResourceIds[resourceId].toString()}</Text>)}
    </View>
  )
}

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state)
})

export default connect(mapStateToProps, null)(DateAccordion)

const styles = StyleSheet.create({})
