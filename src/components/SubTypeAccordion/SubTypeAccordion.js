import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SubTypeAccordion = ({subType, resourcesIds}) => {
  console.log('subType', subType)
  console.log('resourcesIds', resourcesIds)
  return (
    <View>
      <Text>{subType}</Text>
    </View>
  )
}

export default SubTypeAccordion

const styles = StyleSheet.create({})
