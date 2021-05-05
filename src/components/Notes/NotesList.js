import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import { arrayOf, shape, bool, string } from 'prop-types';
import { deleteNoteFromRecord} from '../../redux/action-creators/index'

import Colors from '../../constants/Colors';
import { formatDate } from '../../resources/fhirReader';

const Note = ({ resourceId, note, deleteNoteFromRecordAction }) => {
  const displayDate = formatDate(note.dateCreated, true);
  const handleDelete = () => {
    deleteNoteFromRecordAction(resourceId, note.id)
  }
  return (
    <View style={styles.noteContainer}>
      <View style={styles.noteContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{displayDate}</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity>
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
  note: shape({}).isRequired,
};

const NotesList = ({ resourceId, recordNotes, fromNotesScreen, showNotes, deleteNoteFromRecordAction }) => {
  const renderNotes = recordNotes.map((note) => (
    <Note key={note.id} resourceId={resourceId} note={note} deleteNoteFromRecordAction={deleteNoteFromRecordAction}/>
  ));

  if (fromNotesScreen) {
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
  resourceId: string.isRequired,
  recordNotes: arrayOf(shape({}).isRequired).isRequired,
  fromNotesScreen: bool,
  showNotes: bool.isRequired,
};

NotesList.defaultProps = {
  fromNotesScreen: false,
};

const mapDispatchToProps = {
  deleteNoteFromRecordAction: deleteNoteFromRecord
}

export default connect(null, mapDispatchToProps)(NotesList);

const styles = StyleSheet.create({
  divider: {
    borderTopColor: Colors.lightgrey,
    borderTopWidth: 1,
  },
  noteContainer: {
    margin: 10,
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
});
