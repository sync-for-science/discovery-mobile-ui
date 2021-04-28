import React, {useState, useRef, useEffect} from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, Keyboard
} from 'react-native';
import {
  Header, Right, Title, Left,
} from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { shape } from 'prop-types';

import { activeCollectionSelector } from '../redux/selectors';
import Colors from '../constants/Colors';

const CollectionNotesScreen = ({ collection }) => {
  const [enableShift, setEnableShift] = useState(false)

  const handleShowTextInput = () => {
    setEnableShift(true)
  }

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
        <TouchableOpacity>
          <SimpleLineIcons name="note" size={20} color={Colors.headerIcon} />
        </TouchableOpacity>
      </Right>
    </Header>
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
      // <KeyboardAvoidingView behavior="position" style={{position: 'relative', backgroundColor: 'yellow', width: '100%', zIndex: 1}} enabled={enableShift}>
      //     <TextInput style={{backgroundColor: 'lightblue', height: 50, width: '100%',  borderBottomColor: 'black', borderBottomWidth: 1}} autoFocus={enableShift}/>
      // </KeyboardAvoidingView>
      <KeyboardAvoidingView 
        behavior="position" 
        style={{
          position: 'relative', 
          backgroundColor: 'yellow', 
          width: '100%', zIndex: 1
        }} 
        enabled={enableShift} 
        keyboardVerticalOffset={0}
      >
          <TextInput 
            style={{
              backgroundColor: 'lightblue', 
              height: 50, width: '100%',  
              borderBottomColor: 'black', 
              borderBottomWidth: 1
            }} 
            autoFocus={enableShift}
          />
      </KeyboardAvoidingView>
    )}
  </SafeAreaView>
)};

CollectionNotesScreen.propTypes = {
  collection: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
});

export default connect(mapStateToProps, null)(CollectionNotesScreen);

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
