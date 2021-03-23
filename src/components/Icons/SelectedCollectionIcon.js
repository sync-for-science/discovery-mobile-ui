import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/action-creators'

import Colors from '../../constants/Colors'

const SelectedCollectionIcon = ({collectionId, selectedCollectionId, selectCollectionAction}) => {
  const inCollectionStyle = selectedCollectionId === collectionId ? styles.inCollection : {}
  return (
    <TouchableOpacity style={[styles.base, inCollectionStyle]} onPress={() => selectCollectionAction(collectionId)} />
  )
}

const mapStateToProps = (state) => ({
  selectedCollectionId: state.selectedCollection
})

const mapDispatchToProps = {
  selectCollectionAction: selectCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCollectionIcon)

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
    borderColor: Colors.hasMarked,
  },
  inCollection: {
    borderColor: Colors.hasMarked,
    backgroundColor: Colors.hasMarked,
  },
})
