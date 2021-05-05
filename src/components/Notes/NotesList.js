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
      <View style={styles.noteBody}>
        <View style={styles.noteDateContainer}>
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
        <Text>{note.noteText}</Text>
      </View>
    </View>
  );
};

Note.propTypes = {
  note: shape({}).isRequired,
};

const NotesList = ({ recordNotes, fromNotesScreen }) => (
  <>
    {!fromNotesScreen && <View style={styles.divider} />}
    <View style={styles.root}>
      {recordNotes.map((note) => (
        <Note note={note} />
      ))}
    </View>
  </>
);

NotesList.propTypes = {
  recordNotes: arrayOf(shape({}).isRequired).isRequired,
  fromNotesScreen: bool,
};

NotesList.defaultProps = {
  fromNotesScreen: false,
};

export default NotesList;

const styles = StyleSheet.create({
  root: {
    margin: 10,
  },
  divider: {
    borderTopColor: Colors.lightgrey,
    borderTopWidth: 1,
  },
  noteContainer: {
    marginVertical: 10,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 3,
  },
  noteBody: {
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 12,
    color: Colors.darkgrey2,
  },
  noteDateContainer: {
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
