import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet, View, Text, SafeAreaView, Keyboard, KeyboardAvoidingView, TextInput
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { shape } from 'prop-types';
import produce from 'immer';

import Colors from '../../constants/Colors';
import SortingHeader from './SortingHeader';
import { SORT_ASC, SORT_DESC, sortFields } from '../../constants/sorting';
import TypeGroupContainer from '../TypeGroupContainer';
import BaseText from '../Generic/BaseText';

const { RECORD_TYPE, RECORD_DATE, TIME_SAVED } = sortFields;

const defaultSortingState = {
  activeSortField: 'record-type',
  sortDirections: {
    [RECORD_TYPE]: SORT_DESC,
    [RECORD_DATE]: SORT_DESC,
    [TIME_SAVED]: SORT_DESC,
  },
};

const DetailsPanel = ({ navigation, collection }) => {
  const [sortingState, setSortingState] = useState(defaultSortingState);
  const [enableShift, setEnableShift] = useState(false)
  const [notes, setNotes] = useState([])
  const handlePressNoteIcon = () => {
    navigation.navigate('CollectionNotes');
  };
  const handleSortChange = (sortField) => {
    setSortingState((state) => produce(state, (draft) => {
      if (state.activeSortField === sortField) {
        const prevDir = state.sortDirections[sortField];
        // eslint-disable-next-line no-param-reassign
        draft.sortDirections[sortField] = (prevDir === SORT_ASC) ? SORT_DESC : SORT_ASC;
      }
      draft.activeSortField = sortField; // eslint-disable-line no-param-reassign
    }));
  };

  const displayAccordion = () => {
    switch (sortingState.activeSortField) {
      case RECORD_TYPE:
        return (
          <TypeGroupContainer
            isDescending={sortingState.sortDirections[RECORD_TYPE] === SORT_DESC}
            fromDetailsPanel
          />
        );
      case RECORD_DATE:
        return <Text>RecordDate</Text>;
      case TIME_SAVED:
        return <Text>TimeSaved</Text>;
      default:
        console.warn('No activeSortField in DetailsPanel'); // eslint-disable-line no-console
        return null;
    }
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", () => setEnableShift(false));

    return () => {
      Keyboard.removeListener("keyboardDidHide", () => setKeyboardStatus(false));
    };
  }, [])


  const textInputRef = useRef(null)
  const handleSave = () => {
    console.log('textInputRef', textInputRef.current)
    setNotes([...notes, 'something'])
  }
  return (
    <SafeAreaView style={styles.root}>
        <Header style={styles.header}>
          <Left />
          <View>
            <Title>{collection?.label}</Title>
          </View>
          <Right>
            <TouchableOpacity onPress={handlePressNoteIcon}>
              <SimpleLineIcons name="note" size={20} color={Colors.headerIcon} />
            </TouchableOpacity>
          </Right>
        </Header>
        <View>
          <SortingHeader
            sortingState={sortingState}
            onChange={handleSortChange}
          />
          <ScrollView style={{backgroundColor: 'red'}}>
            {displayAccordion()}
          </ScrollView>
        </View>
      <View>
      <ScrollView>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => setEnableShift(true)} style={{padding: 10, backgroundColor: Colors.primary, borderRadius: 5}}>
            <Text style={{color: 'white'}}>Create Note</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNotes([])} style={{marginTop: 10, padding: 10, backgroundColor: Colors.destructive, borderRadius: 5}}>
            <Text style={{color: 'black'}}>Clear Notes</Text>
          </TouchableOpacity>
          <Text>enableShift: {enableShift.toString()}</Text>
      {notes.map((note, index) => (
        <View key={index} style={{margin: 20, borderRadius: 10, backgroundColor: Colors.lightgrey, padding: 20}}>
          <Text>
            {note}
          </Text>
        </View>
      ))}
        </View>
      </ScrollView>
    </View>
    {enableShift && (
      <KeyboardAvoidingView 
        behavior="position" 
        style={{
          width: '100%', 
          zIndex: 1,
        }} 
        enabled={enableShift} 
        keyboardVerticalOffset={0}
      >
        <View style={{padding: 10, backgroundColor: Colors.lightgrey, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TextInput 
            ref={textInputRef}
            style={{
              backgroundColor: 'white', 
              flex: 1,  
              borderRadius: 10,
              padding: 10,
            }} 
            autoFocus={enableShift}
          />
          <TouchableOpacity style={{marginLeft: 10}} onPress={handleSave}>
            <BaseText variant="title">Save</BaseText>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )}
        
    </SafeAreaView>
    
  );
};

DetailsPanel.propTypes = {
  navigation: shape({}).isRequired,
  collection: shape({}).isRequired,
};

export default DetailsPanel;

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
  content: {
    flex: 1,
    height: 40000,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});


// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: 'pink'
//   },
//   header: {
//     backgroundColor: 'white',
//     alignItems: 'center',
//     elevation: 0,
//   },
//   content: {
//     flex: 1,
//     height: 4000,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
// });
