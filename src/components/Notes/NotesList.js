import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Colors from '../../constants/Colors'
import {formatDate} from '../../resources/fhirReader'

const Note = ({note}) => {
  const displayDate = formatDate(note.dateCreated)
  return (
  <View style={styles.noteContainer}>
    <View style={styles.noteBody}>
      <View style={styles.noteDateContainer}>
        <Text style={styles.headerText}>{displayDate}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style={[styles.headerText, styles.headerActions]}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.headerText, styles.headerActions, styles.deleteText]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>{note.noteText}</Text>
    </View>
  </View>
)}

const NotesList = ({recordNotes, fromNotesScreen}) => {
  return (
    <>
      {!fromNotesScreen && <View style={styles.divider}/>}
      <View style={styles.root}>
        {recordNotes.map(note => (
          <Note note={note} />
        ))}
      </View>
    </>
  )
}

export default NotesList

const styles = StyleSheet.create({
  root: {
    margin: 10,
  },
  divider: {
    borderTopColor: Colors.lightgrey, 
    borderTopWidth: 1
  },
  noteContainer: {
    marginVertical: 10,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 3,
  },
  noteBody: {
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 12,
    color: Colors.darkgrey2
  },
  noteDateContainer: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerActions: {
    fontWeight: '700',
  },
  deleteText: {
    marginLeft: 15,
  }
})
