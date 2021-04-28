import React, { useState, useEffect } from 'react';
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
          <Text>CollectionNotesScreen</Text>
          <TouchableOpacity onPress={() => setEnableShift(true)}>
            <Text>CreateNote</Text>
          </TouchableOpacity>
          <Text>enableShift: {enableShift.toString()}</Text>
        </View>
      </ScrollView>
    </View>
    {enableShift && (
      <KeyboardAvoidingView 
        behavior="position" 
        style={{
          width: '100%', 
          zIndex: 1
        }} 
        enabled={enableShift} 
        keyboardVerticalOffset={0}
      >
          <TextInput 
            style={{
              backgroundColor: 'lightblue', 
              height: 50, 
              width: '100%',  
            }} 
            autoFocus={enableShift}
          />
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
