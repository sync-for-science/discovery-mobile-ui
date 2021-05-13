import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, View, TouchableOpacity,
  ScrollView, TextInput, KeyboardAvoidingView, Alert,
} from 'react-native';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { connect } from 'react-redux';
import { Entypo, Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { useNavigation, useRoute } from '@react-navigation/native';
import { func, shape } from 'prop-types';
import { resourceByRoutePropsSelector, activeCollectionSelector } from '../redux/selectors';
import {
  createRecordNote, editRecordNote, createCollectionNote, editCollectionNote,
} from '../redux/action-creators';

import Colors from '../constants/Colors';
import ResourceCard from '../components/ResourceCard';
import BaseText from '../components/Generic/BaseText';
import CollectionNotes from '../components/CollectionNotes';

const NotesScreen = ({
  resource,
  createRecordNoteAction,
  editRecordNoteAction,
  collection,
  createCollectionNoteAction,
  editCollectionNoteAction,
}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const editingNote = route?.params?.editingNote;
  const [text, onChangeText] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const isResourceNotes = !!resource;

  const closeInput = () => {
    onChangeText('');
    setEditNoteId(null);
    setShowNoteInput(false);
  };

  const discardInputAlert = () => {
    Alert.alert(
      'Discard Edits',
      'Are you sure you want to discard edits to this note?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Discard',
          onPress: () => closeInput(),
          style: 'destructive',
        },
      ],
    );
  };

  const handleCloseInput = ({ alert }) => {
    if (alert) {
      discardInputAlert();
    } else {
      closeInput();
    }
  };

  const handleSave = () => {
    if (isResourceNotes) {
      if (editNoteId) {
        editRecordNoteAction(resource.id, text, editNoteId);
      } else {
        createRecordNoteAction(resource.id, text);
      }
    } else if (editNoteId) {
      editCollectionNoteAction(editNoteId, text);
    } else {
      createCollectionNoteAction(text);
    }
    closeInput();
  };

  const handleCreateNote = () => {
    setShowNoteInput(true);
  };

  const handleEditNote = (noteId, noteText) => {
    setEditNoteId(noteId);
    onChangeText(noteText);
    setShowNoteInput(true);
  };

  useEffect(() => {
    if (editingNote) {
      handleEditNote(editingNote.id, editingNote.text);
    } else {
      handleCreateNote();
    }
  }, []);

  const newNoteIconColor = showNoteInput ? Colors.mediumgrey : Colors.primary;
  const hasTextValue = text.length > 0;
  const saveButtonTextStyle = hasTextValue ? styles.saveButtonText : styles.disabledSaveButtonText;
  // const headerTitle = isResourceNotes ? resource.subType : collection.label;

  return (
    <SafeAreaView style={styles.root}>
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={20} color={Colors.headerIcon} />
          </TouchableOpacity>
        </Left>
        <View>
          <Title style={styles.headerText}>Notes</Title>
        </View>
        <Right>
          <TouchableOpacity onPress={handleCreateNote} disabled={showNoteInput}>
            <Entypo name="squared-plus" size={24} color={newNoteIconColor} />
          </TouchableOpacity>
        </Right>
      </Header>
      <ScrollView>
        {isResourceNotes && (
        <ResourceCard
          resourceId={resource.id}
          resource={resource}
          handleEditNote={handleEditNote}
          editNoteId={editNoteId}
          fromNotesScreen
        />
        )}
        {!isResourceNotes && (
          <>
            <View style={styles.collectionHeaderContainer}>
              <BaseText variant="title">{collection.label}</BaseText>
            </View>
            <CollectionNotes
              editNoteId={editNoteId}
              handleEditNote={handleEditNote}
              fromNotesScreen
            />
          </>
        )}
      </ScrollView>
      {showNoteInput && (
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.noteEditingActions}>
          <TouchableOpacity onPress={() => handleCloseInput({ alert: true })}>
            <Ionicons name="ios-close-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={!hasTextValue}>
            <BaseText variant="title" style={saveButtonTextStyle}>Save</BaseText>
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            multiline
            value={text}
            autoFocus
          />
        </View>
      </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

NotesScreen.propTypes = {
  resource: shape({}),
  createRecordNoteAction: func.isRequired,
  editRecordNoteAction: func.isRequired,
  collection: shape({}).isRequired,
  createCollectionNoteAction: func.isRequired,
  editCollectionNoteAction: func.isRequired,
};

NotesScreen.defaultProps = {
  resource: null,
};

const mapStateToProps = (state, ownProps) => ({
  resource: resourceByRoutePropsSelector(state, ownProps),
  collection: activeCollectionSelector(state),
});

const mapDispatchToProps = {
  createRecordNoteAction: createRecordNote,
  editRecordNoteAction: editRecordNote,
  createCollectionNoteAction: createCollectionNote,
  editCollectionNoteAction: editCollectionNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 0,
  },
  headerText: {
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: Colors.lightgrey,
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
    padding: 8,
  },
  saveButton: {
    marginLeft: 10,
  },
  saveButtonText: {
    color: Colors.primary,
  },
  disabledSaveButtonText: {
    color: Colors.darkgrey2,
  },
  noteEditingActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightgrey,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  collectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
