import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { collectionNotesSelector } from '../../redux/selectors'
import NotesList from '../Notes/NotesList'

const CollectionNotes = ({collectionNotes}) => {
  return (
    <View style={{flex: 1}}>
      <NotesList notes={collectionNotes} fromNotesScreen isCollectionNotes/>
    </View>
  )
}

const mapStateToProps = (state) => ({
  collectionNotes: collectionNotesSelector(state)
})

export default connect(mapStateToProps, null)(CollectionNotes)

const styles = StyleSheet.create({})
