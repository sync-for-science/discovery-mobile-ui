import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'

import { accordionsContainerDataSelector } from '../../redux/selectors'
import { SINGULAR_RESOURCE_TYPES } from '../../resources/resourceTypes'
import BaseText from '../Generic/BaseText'
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer'

const TypeGroupContainer = ({accordionsContainerData}) => {
  const sortTypes = (type1, type2) => type1 < type2 ? -1 : 1 
  return (
    Object.entries(accordionsContainerData).sort(sortTypes).map(([type, typeValues]) => (
      <View key={type}>
        <View>
          <BaseText>{SINGULAR_RESOURCE_TYPES[type]}</BaseText>
        </View>
        <SubTypeAccordionsContainer data={typeValues} />
      </View>
    ))
  )
}

const mapStateToProps = (state, ownProps) => ({
  accordionsContainerData: accordionsContainerDataSelector(state, ownProps),
})

export default connect(mapStateToProps, null)(TypeGroupContainer);

const styles = StyleSheet.create({})
