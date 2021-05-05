import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import NotesList from '../Notes/NotesList'
import { recordNotesSelector } from '../../redux/selectors';
import ResourceCardNoteActions from './ResourceCardNoteActions'

const ResourceCardNotes = ({
  fromNotesScreen,
  resourceId,
  recordNotes
}) => {
  const [showNotes, setShowNotes] = useState(false)
  const hasNotes = recordNotes.length > 0;

  return (
    <View>
      {!fromNotesScreen && 
        <ResourceCardNoteActions 
          hasNotes={hasNotes} 
          showNotes={showNotes} 
          setShowNotes={setShowNotes} 
          resourceId={resourceId}
        />
      }
      <NotesList recordNotes={recordNotes} showNotes={showNotes} fromNotesScreen={fromNotesScreen}/>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  recordNotes: recordNotesSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(ResourceCardNotes)

const styles = StyleSheet.create({})
