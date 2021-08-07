import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, View, TouchableOpacity,
  ScrollView, TextInput, KeyboardAvoidingView, Alert, Text, CheckBox,Switch
} from 'react-native';
import { Checkbox } from 'react-native-paper';

import {
  Header, Right, Title, Left,
} from 'native-base';
import { connect } from 'react-redux';
import { Entypo, Ionicons, Feather } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { useNavigation, useRoute } from '@react-navigation/native';
import { func, shape } from 'prop-types';
import { resourceByRoutePropsSelector, activeCollectionSelector,  creatingCollectionSelector,
  collectionsLabelsSelector,customCollectionsSelector
 } from '../redux/selectors';
import {
  createRecordNote, createCollectionNote, createCollection, selectCollection, editCollectionDetails,renameCollection
} from '../redux/action-creators';
import CollectionsDialog, { COLLECTIONS_DIALOG_ACTIONS, CollectionsDialogText } from '../components/Dialog/CollectionsDialog';

import Colors from '../constants/Colors';
import ResourceCard from '../components/ResourceCard';
import BaseText from '../components/Generic/BaseText';
import CollectionNotes from '../components/CollectionNotes';
import HeaderCountIcon from '../components/Icons/HeaderCountIcon';
//import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Picker from '../components/TagInput/TagInputView';

const CollectionInputScreen = ({
  resource,
  collection,
  createCollectionAction,
  selectCollectionAction,
  editCollectionDetailsAction,
  creatingCollection,
  collectionsLabels,
  collections,
  renameCollectionAction
}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const editingNote = route?.params?.editingNote;
  const [title, onChangeTitle] = useState(creatingCollection ? 'Untitled Collection' : collection.label);
  const [purpose, onChangePurpose] = useState(creatingCollection ? '' : collection.purpose);
  const [tags, onChangeTags] = useState(creatingCollection ? [] : collection.tags);
  const [current, currentSelection] = useState(creatingCollection ? false : collection.current);
  const [urgent, urgentSelection] = useState(creatingCollection ? false : collection.urgent);
  const [editNoteId, setEditNoteId] = useState(null);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [inputText, setInputText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [newCollectionID, setCollectionID] = useState('');
  const [isAddingCollection, setIsAddingCollection] = useState(false);
  const [collectionsDialogText, setCollectionsDialogText] = useState(null);
  const [open, setOpen] = useState(false);
  const [hasTextValue, setHasTextValue]= useState(false);
  const [sameName, setSameName]= useState(false);

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
  const [value, setValue] = useState( creatingCollection ? [] : collection.tags );
  DropDownPicker.setMode("BADGE");
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
    if (creatingCollection){
      if (!collection_names.includes(title)){
      if (hasTextValue) {
        if (hasInputErrors({ text: title, isRename: false, label: title })) {
          return;
        }
        createCollectionAction(title);
        setIsAddingCollection(true);
      }

    }
    }else{
      if (hasInputErrors({ text: title, isRename: true, label: title })) {
        return;
      }
      renameCollectionAction(newCollectionID, title);

      editCollectionDetailsAction(purpose,value,(current || urgent), urgent);
    }
  };
  const saveCollection = () => {
    handleSave();
    navigation.navigate('CollectionsList');

  };
  const saveAndContinue = () => {
    handleSave();
    navigation.navigate('Catalog');

  };
  const discardChanges = () => {
    setCollectionsDialogText(CollectionsDialogText[COLLECTIONS_DIALOG_ACTIONS.DISCARD]);


  };
    //selectCollectionAction(title);

    //console.log(collection)
    //collection.purpose = purpose
    //collection.label = title
    //collection.tags = tags

  useEffect(() => {
    if (Object.keys(collections).length > 0){
      setCollectionID(Object.keys(collections)[Object.keys(collections).length - 1])

      if(isAddingCollection){
        // console.log(collections[Object.keys(collections)[Object.keys(collections).length - 1]].label)
        //console.log(collections[Object.keys(collections)[Object.keys(collections).length - 1]].id)
        selectCollectionAction(Object.keys(collections)[Object.keys(collections).length - 1]);
        editCollectionDetailsAction(purpose,value,(current || urgent), urgent);
        setIsAddingCollection(false);


      }
    }

    //if (useState(collections )!== collections) {
    //}
  }, [collections]);

  useEffect(() => {
    setSameName(false)
    if (title.length > 0){
      setHasTextValue(true)
    }
    if (creatingCollection){1
      for (i in collection_names){
        if (collection_names[i].toLowerCase() == title.toLowerCase()){
          setHasTextValue(false)
          setSameName(true)
        }
      }
    }
  }, [title])


  const saveButtonTextStyle = hasTextValue ? styles.saveButtonText : styles.disabledSaveButtonText;
  //const noteCount = isResourceNotes
    //? collection.records[resource.id]?.notes && Object.keys(collection.records[resource?.id]?.notes).length // eslint-disable-line max-len
    //: Object.keys(collection.notes).length;

  //PLACEHOLDERS
  const placeholder_title = creatingCollection ? '' : collection.label ;

  const current_header = creatingCollection ? 'Search Collections' : 'Edit Collection';
  const isUniqueName = ({ text, isRename, label }) => {
    // if action is rename, new label can be same as old label
    if (isRename && (text.toLowerCase() === label.toLowerCase())) {
      return true;
    }
    return !collectionsLabels.includes(text.toLowerCase());
  };
  const UNIQUE_ERROR = 'Collection name must be unique.';
  const LABEL_LENGTH_ERROR = 'Collection name must be at least 1 character';
  const hasMinLength = (text) => text.length > 0;

  const hasInputErrors = ({ text, isRename, label }) => {
    if (!hasMinLength(text)) {
      setErrorText(LABEL_LENGTH_ERROR);
      return true;
    }
    if (!isUniqueName({ text, isRename, label })) {
      setErrorText(UNIQUE_ERROR);
      return true;
    }
    return false;
  };



  return (
    <SafeAreaView style={styles.root}>
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={20} color="black" />
          </TouchableOpacity>
        </Left>
        <View style={styles.headerTitleContainer}>
          <Title style={styles.headerText}><Text>{title}</Text></Title>
        </View>
        <Right>

        </Right>
      </Header>

      <View style={styles.inputField}>

        <KeyboardAvoidingView behavior="padding">

          <View style={styles.textInputDiv}>
            <TouchableOpacity style={styles.textInputHeader} disabled={true}>
            <Text variant="title" style={styles.formHeader}>Title</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleTextInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeTitle}
              placeholder = {placeholder_title}
              value={title}
              autoFocus
            />
          </View>
          <View style = {styles.titleFooter}>
          {sameName &&
            <View style = {styles.sameNameAlertContainer}>
                <Text style={{color: Colors.destructive}}>Collection Name Must Be Unique</Text>
            </View>
          }
          </View>

        </KeyboardAvoidingView>


        <KeyboardAvoidingView behavior="padding">
          <View style={styles.textInputDiv}>

            <TouchableOpacity style={styles.textInputHeader}  disabled={true}>
              <Text variant="title" style={styles.formHeader}>Purpose</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.purposeTextInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangePurpose}
              placeholder = {'add purpose'}
              value={purpose}
              autoFocus
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.tagTextHeader}>
          <TouchableOpacity style={styles.textInputHeader}  disabled={true}>
          <Text variant="title" style={styles.formHeader}>Collection Tags</Text>
          </TouchableOpacity>
        </View>
        <View style = {{zIndex: 100, backgroundColor:"#fff"}}>
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
          placeholder={"add tags"}
        />
        </View>
        <View style={styles.switchTextHeader}>
          <TouchableOpacity style={styles.textInputHeader}  disabled={true}>
            <Text variant="title" style={styles.formHeader}>Set Collection As</Text>
          </TouchableOpacity>
        </View>
        <View style= {styles.switchRow} >
          <View style={styles.currentTextField}>

              <Feather name="watch" size={18} color={Colors.currentCollectionColor} />

              <Text style={styles.switchText}>Current</Text>
          </View>

              <Switch
              trackColor={{
                false: Colors.mediumgrey,
                true: Platform.OS === 'ios' ? Colors.primary : Colors.primaryLight,
                }}
                thumbColor={(Platform.OS === 'ios') ? 'white' : Colors[(current ? 'primary' : 'primaryLight')]}
                onValueChange={() => currentSelection(!current)}
                value={current || urgent}
                disabled={urgent}
                />
            <View style={styles.leftRightPadding}>
              <Feather name="alert-triangle" size={18} color={Colors.destructive} />

              <Text variant="title" style={styles.switchText}>Urgent</Text>
            </View>

            <Switch
              trackColor={{
                false: Colors.mediumgrey,
                true: Platform.OS === 'ios' ? Colors.primary : Colors.primaryLight,
              }}
              thumbColor={(Platform.OS === 'ios') ? 'white' : Colors[(urgent ? 'primary' : 'primaryLight')]}
              onValueChange={() => urgentSelection(!urgent)}
              value={urgent}
              />
        </View>
      </View>




      <View style={styles.textRow}>
            <TouchableOpacity style={styles.saveButton} onPress={discardChanges}>
              <BaseText variant="title" style={styles.discardButtonText}>Discard</BaseText>
            </TouchableOpacity>

            {collectionsDialogText && (
              <CollectionsDialog

                collectionsDialogText={collectionsDialogText}
                setCollectionsDialogText={setCollectionsDialogText}
              />
            )}

          <TouchableOpacity style={styles.saveButton} onPress={saveCollection} disabled={!hasTextValue}>
            <BaseText variant="title" style={saveButtonTextStyle}>Save</BaseText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton} onPress={saveAndContinue} disabled={!hasTextValue}>
            <BaseText variant="title" style={saveButtonTextStyle}>Save and Continue</BaseText>
          </TouchableOpacity>
      </View>
      {/*<DropDownPicker
        multiple={true}
        min={0}
        max={5}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
      />*/}

    </SafeAreaView>
  );
};

CollectionInputScreen.propTypes = {
  resource: shape({}),
  createCollectionAction: func.isRequired,
  collection: shape({}).isRequired,
};

CollectionInputScreen.defaultProps = {
  resource: null,
};

const mapStateToProps = (state, ownProps) => ({
  collectionsLabels: collectionsLabelsSelector(state),
  resource: resourceByRoutePropsSelector(state, ownProps),
  collection: activeCollectionSelector(state),
  creatingCollection: creatingCollectionSelector(state, ownProps),
  collections: customCollectionsSelector(state, ownProps),


});


const mapDispatchToProps = {
  createCollectionAction: createCollection,
  selectCollectionAction: selectCollection,
  editCollectionDetailsAction: editCollectionDetails,
  renameCollectionAction: renameCollection,


};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionInputScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: Colors.collectionYellow,
    alignItems: 'center',
    elevation: 0,
    height: 50,
  },
  headerText: {
    fontSize: 18,
  },
  titleTextInputContainer: {
    marginHorizontal:5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderRadius:10,
    borderWidth:1,
  },
  titleFooter:{
    marginHorizontal:5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderRadius:10,
    paddingBottom: 25,
  },
  sameNameAlertContainer:{
    paddingTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  purposeTextInputContainer: {
    marginHorizontal:5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderRadius:10,
    borderWidth:1,
    marginBottom: 25,

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
  textInputHeader:{

  },
  saveButtonText: {
    color: Colors.primary,
  },
  discardButtonText:{
    color: Colors.destructive,
  },
  disabledSaveButtonText: {
    color: Colors.darkgrey2,
  },
  noteEditingActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textInputDiv:{
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  collectionLabelContainer: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: Colors.collectionYellow,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resourceCardContainer: {
    backgroundColor: Colors.primaryLight,
    paddingTop: 10,
  },
  checkboxContainer:{
    borderWidth: 2,
    borderRadius: 20,
    width: 40,
    height: 40,
    marginLeft: 50
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingRight:20,
    marginVertical: 4,
    paddingTop: 20,
    zIndex:-1,
    width:  '100%'

  },
  leftRightPadding:{
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentTextField:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputField: {
    padding:10,
  },
  tagTextHeader:{
    padding:10,

  },
  switchTextHeader:{
    padding:10,
    marginTop:25,

  },
  formHeader:{
    fontSize:16,
  },

  switchText:{
    paddingLeft: 5,
  }

});
