import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Note = ({note}) => (
  <View>
    <Text>{note.noteText}</Text>
  </View>
)

const NotesList = ({recordNotes}) => {
  return (
    <View style={styles.root}>
      {recordNotes.map(note => (
        <Note note={note} />
      ))}
    </View>
  )
}

export default NotesList

const styles = StyleSheet.create({
  root: {
    padding: 10
  }
})
