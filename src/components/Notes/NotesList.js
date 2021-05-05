import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { arrayOf, shape, bool } from 'prop-types';

import Colors from '../../constants/Colors';
import { formatDate } from '../../resources/fhirReader';

const Note = ({ note }) => {
  const displayDate = formatDate(note.dateCreated, true);
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
            <TouchableOpacity>
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

const NotesList = ({ recordNotes, fromNotesScreen, showNotes }) => {
  const renderNotes = recordNotes.map((note) => (
    <Note key={note.id} note={note} />
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
  recordNotes: arrayOf(shape({}).isRequired).isRequired,
  fromNotesScreen: bool,
  showNotes: bool.isRequired,
};

NotesList.defaultProps = {
  fromNotesScreen: false,
};

export default NotesList;

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
