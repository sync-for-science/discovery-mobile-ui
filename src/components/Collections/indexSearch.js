import React,  { useState, useEffect } from 'react';

import {
  StyleSheet, ScrollView, SafeAreaView,KeyboardAvoidingView, View, TouchableOpacity, BaseText, TextInput, Text, Switch
} from 'react-native';
import { Chip } from 'react-native-paper';


import { shape } from 'prop-types';
import Colors from '../../constants/Colors';

import CollectionRow from '../CollectionRow/CollectionRow';
import Picker from '../TagInput/TagSearchView';
import {
  Header, Right, Title, Left,
} from 'native-base';

import { Ionicons, MaterialCommunityIcons, Feather} from '@expo/vector-icons';



const CollectionsIndexSearch = ({
  navigation,
  collections,
}) => {
  const [open, setOpen] = useState(false);


  var items_list =
    [

    ]
  var item_names = []
  var collection_names = []
  if (Object.keys(collections).length > 0){
    for (const [key, value] of Object.entries(collections)) {


      if (collections[key] != null){
      collection_names.push(collections[key].label);
      for (var j = 0; j < collections[key].tags.length; j++) {
        if (!item_names.includes(collections[key].tags[j])) {
          item_names.push(collections[key].tags[j])
        }
      }
    }
    }
  }

  for (var i in item_names) {
    items_list.push({label: item_names[i], value: item_names[i]})
  }
  const [items, setItems] = useState(items_list);
  const [value, setValue] = useState( []);
  const [current, currentSelection] = useState(false);
  const [urgent, urgentSelection] = useState(false);
  const [collectionsList, editCollectionsList] = useState(collections);
  const [showSearch, setShowSearch] = useState(false);
  const [title, onChangeTitle] = useState('');
  const [notCurrent, setNotCurrent] = useState('');
  const [notUrgent, setNotUrgent] = useState('');

  //console.log("HOME PAGE")
  //console.log(collection_names);
  useEffect(() => {
    var newCollectionsList = {}
    for (i in collections){
      var to_add = true
      if (title.length > 0 && to_add){
        if(!(collections[i].label.includes(title) )&& !(collections[i].purpose.includes(title))){
          to_add = false
          //console.log("oof urgent")

        }
      }
      for (j in value){

        if (to_add && !(collections[i].tags.includes(value[j]) )){
          to_add = false
          //console.log("oof current")


        }
      }

      if(urgent && !(collections[i].urgent)){
        to_add = false

      }else{
        if(current && !(collections[i].current)){
          to_add = false
        }
      }
      if(notCurrent && (collections[i].current)){
        to_add = false

      }else{
        if(notUrgent && (collections[i].urgent)){
          to_add = false
        }
      }

      if (to_add){

        newCollectionsList[i] = collections[i]
      }
    }

    //console.log(collectionsList)
    console.log(notCurrent)
    editCollectionsList(newCollectionsList)
  }, [title, value, current, urgent, notCurrent, notUrgent]);

  return (




  <SafeAreaView style={[styles.safeAreaView]}>
    <TouchableOpacity
      style={styles.expandIcon}
      onPress={() => setShowSearch(!showSearch)}
    >
      <View style={styles.root}>
        <View style={styles.dateRangeContainer}>

          <Left>
            <TouchableOpacity style = {styles.leftRightPadding}>
            <Feather name="search" size={24} color={Colors.primary} />

            </TouchableOpacity>
          </Left>
          <View><Text style={styles.dash}>Search Collections</Text></View>


          <Right>

                <Ionicons
                  name={showSearch ? 'chevron-up' : 'chevron-down'}
                  size={24}
                  color={Colors.expandTimeline}
                />
          </Right>
        </View>
      </View>
    </TouchableOpacity>

    {showSearch &&

    <KeyboardAvoidingView style ={[styles.searchItemsDiv, styles.zindex]} >


      <View style={styles.searchBoxDiv}>
        <Text style={styles.textInstructions}>Search for phrase in Collection name or purpose</Text>

          <View style={styles.textInputContainer}>
            <View style = {{paddingRight:10}}>
              <Feather name="search" size={18} />
            </View>
            <TextInput
              value={title}
              onChangeText={onChangeTitle}
              placeholder="search"
              autoFocus
            />
            </View>
      </View>
      <View style={styles.dropDown}>
        <Text style={styles.dropDowntextInstructions}>Specify tags that Collections must include</Text>

      </View>

      <Picker
          multiple={true}
          min={0}
          max={5}
          open={open}
          value={value}
          setOpen={setOpen}
          setValue={setValue}
          items={items}
          setItems={setItems}
          searchable={true}
          placeholder={"specify tags"}

      />

      <View>
      <Text style={styles.switchTextInstructions}>Collection must be</Text>


      <View style= {styles.switchRow} >
        <View styles = {styles.setChipWidth}>
          <Chip disabled = {(notCurrent)} selected = {urgent || current}  onPress={() => currentSelection(!current)}>Current</Chip>
        </View>
        <View style={styles.urgentPadding}>

          <Chip disabled = {(notCurrent || notUrgent)} selected = {urgent}  onPress={() => urgentSelection(!urgent)}>Urgent</Chip>
        </View>

      </View>
      <View style= {styles.switchRow} >
        <View tyles = {styles.setChipWidth}>
          <Chip disabled = {(current || urgent)} selected = {notCurrent}  onPress={() => setNotCurrent(!notCurrent)}>Not Current</Chip>
        </View>
        <View style={styles.notUrgentPadding}>
          <Chip disabled = {(urgent)} selected = {(notUrgent || notCurrent)}  onPress={() => setNotUrgent(!notUrgent)}>Not Urgent</Chip>
        </View>

      </View>
    </View>

    </KeyboardAvoidingView>


    }





    <ScrollView
      contentContainerStyle={styles.collectionRowContainer}
      keyboardShouldPersistTaps="handled"
    >
      {Object.entries(collectionsList).map(([id, { label }]) => (
        <CollectionRow
          key={id}
          collectionId={id}
          label={label}
          navigation={navigation}
        />
      ))}

    </ScrollView>


  </SafeAreaView>
)};

CollectionsIndexSearch.propTypes = {
  navigation: shape({}).isRequired,
  collections: shape({}).isRequired,
};

export default CollectionsIndexSearch;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  collectionRowContainer: {
    alignItems: 'center',
  },
  textInputContainer: {
    paddingHorizontal: 10,
    padding: 10,
    margin: 2,
    borderRadius:10,
    borderWidth:1,
    backgroundColor: 'white',
    flexDirection: 'row',

  },
  textInput: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
    padding: 8,
  },
  leftRightPadding:{
    paddingLeft: 10,
    paddingRight: 10
  },
  checkboxRow:{
    paddingTop: 40,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },

  root: {
    width: '100%',
    flexDirection: 'column',
    borderColor: 'gray',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  drawerIcon: {
    paddingLeft: 8,
  },
  expandIcon: {
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dash: {
    paddingLeft: Platform.OS === 'ios' ? 0 : 8,
    paddingRight: 8,
    fontSize: 16,
  },
  searchItemsDiv: {
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'gray'

  },
  searchBoxDiv:{
    paddingBottom:8,
  },
  dropDowntextInstructions:{
    paddingLeft: 2,
    paddingBottom: 4,
    paddingRight: 10,
    fontSize: 14,
  },

  switchTextInstructions:{
    paddingLeft: 2,
    paddingTop: 10,
    paddingRight: 10,
    fontSize: 14,
  },


  textInstructions: {
    paddingLeft: 5,
    paddingBottom: 1,
    paddingRight: 10,
    fontSize: 14,
  },
  switchRow:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginVertical: 4,
    paddingTop:0,
  },
  urgentPadding:{
    paddingRight:80,
    left:150,
    position:'absolute'

  },
  notUrgentPadding:{
    paddingRight:80,
    left:150,
    position:'absolute'
  },
  setChipWidth: {
    width: 100,
  },
  zindex:{
    zIndex: 100

  }

});
