import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bool, func, string } from 'prop-types'

import { selectCollection } from '../../redux/action-creators'
import Colors from '../../constants/Colors'

const SelectedCollectionIcon = ({collectionId, selected, selectCollectionAction}) => {
  const inCollectionStyle = selected ? styles.inCollection : {}
  return (
    <TouchableOpacity style={[styles.base, inCollectionStyle]} onPress={() => selectCollectionAction(collectionId)} />
  )
}

SelectedCollectionIcon.propTypes = {
  collectionId: string.isRequired,
  selected: bool.isRequired,
  selectCollection: func.isRequired
}

const mapDispatchToProps = {
  selectCollectionAction: selectCollection
}

export default connect(null, mapDispatchToProps)(SelectedCollectionIcon)

const styles = StyleSheet.create({
  base: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.lightgrey,
  },
  inCollection: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
})
