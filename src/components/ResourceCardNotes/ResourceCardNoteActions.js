import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/native';

import BaseText from '../Generic/BaseText'
import Colors from '../../constants/Colors'

const ResourceCardNoteActions = ({hasNotes, showNotes, setShowNotes, resourceId}) => {
  const navigation = useNavigation();
  
  if (!hasNotes) {
    return (
      <TouchableOpacity style={styles.addNoteButton} onPress={() => navigation.navigate('Notes', { resourceId })}>
        <FontAwesome name="sticky-note-o" size={20} color={Colors.darkgrey} />
        <BaseText variant="title" style={{ color: Colors.darkgrey, marginLeft: 10 }}>Add Note</BaseText>
      </TouchableOpacity>
    )
  }

  const showNotesText = showNotes ? 'Hide Notes' : 'Show Notes'
  const showNotesIcon = showNotes ? "eye-off-outline" : 'eye-outline'
  return (
    <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>
      <TouchableOpacity style={styles.addNoteButton} onPress={() => navigation.navigate('Notes', { resourceId })}>
        <FontAwesome name="sticky-note-o" size={16} color={Colors.darkgrey} />
        <BaseText variant="title" style={{ color: Colors.darkgrey, marginLeft: 10 }}>Add Note</BaseText>
      </TouchableOpacity>
      <View style={{borderLeftWidth: 1, borderLeftColor: Colors.lightgrey}}/>
      <TouchableOpacity style={styles.addNoteButton} onPress={() => setShowNotes(!showNotes)}>
        <Ionicons name={showNotesIcon} size={20} color={Colors.darkgrey} />
        <BaseText variant="title" style={{ color: Colors.darkgrey, marginLeft: 10 }}>{showNotesText}</BaseText>
      </TouchableOpacity>
    </View>
  )
}

export default ResourceCardNoteActions

const styles = StyleSheet.create({
  addNoteButton: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 200,
  },
})
