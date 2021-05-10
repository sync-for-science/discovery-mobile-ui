import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { collectionNotesSelector } from '../../redux/selectors'

const CollectionNotes = ({collectionNotes}) => {
  return (
    <View style={{flex: 1}}>
      <Text>CollectionNotes</Text>
    </View>
  )
}

const mapStateToProps = (state) => ({
  collectionNotes: collectionNotesSelector(state)
})

export default connect(mapStateToProps, null)(CollectionNotes)

const styles = StyleSheet.create({})
