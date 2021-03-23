import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Colors from '../../constants/Colors'

const SelectedCollectionIcon = ({collectionId, selectedCollectionId}) => {
  const inCollectionStyle = selectedCollectionId === collectionId ? styles.inCollection : {}
  return (
    <TouchableOpacity style={[styles.base, inCollectionStyle]} />
  )
}

const mapStateToProps = (state) => ({
  selectedCollectionId: state.selectedCollection
})

export default connect(mapStateToProps, null)(SelectedCollectionIcon)

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
