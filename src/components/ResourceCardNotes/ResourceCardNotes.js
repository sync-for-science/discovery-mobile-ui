import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import {
  bool, shape, string, arrayOf,
} from 'prop-types';
import NotesList from '../Notes/NotesList';
import { recordNotesSelector } from '../../redux/selectors';
import ResourceCardNoteActions from './ResourceCardNoteActions';

const ResourceCardNotes = ({
  fromNotesScreen,
  resourceId,
  recordNotes,
  handleEditNote
}) => {
  const [showNotes, setShowNotes] = useState(false);
  const hasNotes = recordNotes.length > 0;

  return (
    <View>
      {!fromNotesScreen
        && (
          <View style={styles.noteActionsContainer}>
            <ResourceCardNoteActions
              hasNotes={hasNotes}
              showNotes={showNotes}
              setShowNotes={setShowNotes}
              resourceId={resourceId}
            />
          </View>
        )}
      <NotesList
        resourceId={resourceId}
        recordNotes={recordNotes}
        showNotes={showNotes}
        fromNotesScreen={fromNotesScreen}
        handleEditNote={handleEditNote}
      />
    </View>
  );
};

ResourceCardNotes.propTypes = {
  fromNotesScreen: bool,
  resourceId: string.isRequired,
  recordNotes: arrayOf(shape({}).isRequired).isRequired,
};

ResourceCardNotes.defaultProps = {
  fromNotesScreen: false,
};

const mapStateToProps = (state, ownProps) => ({
  recordNotes: recordNotesSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(ResourceCardNotes);

const styles = StyleSheet.create({
  noteActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
