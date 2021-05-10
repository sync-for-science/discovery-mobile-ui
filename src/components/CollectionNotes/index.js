import React from 'react';
import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';
import { connect } from 'react-redux';

import { collectionNotesSelector } from '../../redux/selectors';
import NotesList from '../Notes/NotesList';

const CollectionNotes = ({
  collectionNotes, editNoteId, handleEditNote, fromNotesScreen,
}) => (
  <NotesList
    notes={collectionNotes}
    editNoteId={editNoteId}
    handleEditNote={handleEditNote}
    fromNotesScreen={fromNotesScreen}
    isCollectionNotes
  />
);

const mapStateToProps = (state) => ({
  collectionNotes: collectionNotesSelector(state),
});

CollectionNotes.propTypes = {
  collectionNotes: arrayOf(shape({}).isRequired).isRequired,
  editNoteId: string,
  handleEditNote: func.isRequired,
  fromNotesScreen: bool.isRequired,
};

CollectionNotes.defaultProps = {
  editNoteId: null,
};

export default connect(mapStateToProps, null)(CollectionNotes);
