import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  arrayOf, shape, bool, string, func,
} from 'prop-types';

import { deleteRecordNote, editRecordNote } from '../../redux/action-creators/index';

import Colors from '../../constants/Colors';
import { formatDate } from '../../resources/fhirReader';

const Note = ({
  resourceId, note, deleteRecordNoteAction, handleEditNote, fromNotesScreen, editNoteId,
}) => {
  const navigation = useNavigation();
  const displayDate = formatDate(note.dateCreated, true);
  const handleDelete = () => Alert.alert(
    'Delete Note',
    'Are you sure you want to delete this note?',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => deleteRecordNoteAction(resourceId, note.id),
        style: 'destructive',
      },
    ],
  );

  const hasBeenEdited = note.dateCreated !== note.dateEdited;
  const displayEdited = hasBeenEdited ? ' (Edited)' : '';
  const isEditing = note.id === editNoteId;
  const editingStyle = isEditing ? styles.editing : {};

  const handleEdit = () => {
    if (fromNotesScreen) {
      handleEditNote(note.id, note.text);
    } else {
      navigation.navigate('Notes', { resourceId, editingNote: { id: note.id, text: note.text } });
    }
  };

  return (
    <View style={[styles.noteContainer, editingStyle]}>
      <View style={styles.noteContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {displayDate}
            <Text style={styles.editedText}>{displayEdited}</Text>
          </Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={handleEdit}>
              <Text style={[styles.headerText, styles.headerActions]}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Text style={[styles.headerText, styles.headerActions, styles.deleteText]}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>{note.text}</Text>
      </View>
    </View>
  );
};

Note.propTypes = {
  resourceId: string,
  note: shape({}).isRequired,
  deleteRecordNoteAction: func.isRequired,
  handleEditNote: func,
  fromNotesScreen: bool,
  editNoteId: string,
};

Note.defaultProps = {
  resourceId: null,
  handleEditNote: undefined,
  fromNotesScreen: false,
  editNoteId: null,
};

const NotesList = ({
  resourceId,
  notes,
  fromNotesScreen,
  showNotes,
  deleteRecordNoteAction,
  handleEditNote,
  editNoteId,
  isCollectionNotes
}) => {
  console.log('isCollectionNotes', isCollectionNotes)
  const renderNotes = notes.map((note) => (
    <Note
      key={note.id}
      resourceId={resourceId}
      note={note}
      deleteRecordNoteAction={deleteRecordNoteAction}
      handleEditNote={handleEditNote}
      fromNotesScreen={fromNotesScreen}
      editNoteId={editNoteId}
    />
  ));

  if (fromNotesScreen || isCollectionNotes) {
    return renderNotes;
  }

  if (showNotes) {
    return (
      <>
        <View style={styles.divider} />
        {renderNotes}
      </>
    );
  }

  return null;
};

NotesList.propTypes = {
  resourceId: string,
  notes: arrayOf(shape({}).isRequired).isRequired,
  fromNotesScreen: bool,
  showNotes: bool,
  deleteRecordNoteAction: func.isRequired,
  handleEditNote: func,
  editNoteId: string,
  isCollectionNotes: bool
};

NotesList.defaultProps = {
  resourceId: null,
  fromNotesScreen: false,
  handleEditNote: undefined,
  editNoteId: null,
  showNotes: false,
  isCollectionNotes: false
};

const mapDispatchToProps = {
  deleteRecordNoteAction: deleteRecordNote,
  editRecordNoteAction: editRecordNote,
};

export default connect(null, mapDispatchToProps)(NotesList);

const styles = StyleSheet.create({
  divider: {
    borderTopColor: Colors.lightgrey,
    borderTopWidth: 1,
  },
  noteContainer: {
    margin: 10,
    paddingVertical: 5,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 3,
  },
  noteContent: {
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 12,
    color: Colors.darkgrey2,
  },
  headerContainer: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerActions: {
    fontWeight: '700',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  deleteText: {
    marginLeft: 15,
  },
  editedText: {
    paddingLeft: 10,
    fontStyle: 'italic',
  },
  editing: {
    backgroundColor: Colors.editingBackground,
  },
});
