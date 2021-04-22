import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

import { accordionsContainerDataSelector } from '../../redux/selectors'

const TypeGroupedSubTypeAccordionsContainer = ({accordionsContainerData}) => {
  console.log('accordionsContainerData', accordionsContainerData)
  return (
    <View>
      <Text>TypeGroupedSubTypeAccordionsContainer</Text>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  accordionsContainerData: accordionsContainerDataSelector(state, ownProps),
})

export default connect(mapStateToProps, null)(TypeGroupedSubTypeAccordionsContainer);

const styles = StyleSheet.create({})
