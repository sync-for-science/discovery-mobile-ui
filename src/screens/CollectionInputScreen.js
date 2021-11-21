import React, { useState, useEffect } from 'react';
import {
  Platform, SafeAreaView, StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback,
  TextInput, KeyboardAvoidingView, Alert, Text, Switch, Keyboard,
} from 'react-native';

import {
  Header, Right, Title, Left,
} from 'native-base';
import { connect } from 'react-redux';
import { Entypo, Feather } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/native';
import {
  func, shape, bool,
} from 'prop-types';
import {
  activeCollectionSelector, creatingCollectionSelector,
  collectionsLabelsSelector, customCollectionsSelector,
} from '../redux/selectors';
import {
  createCollection, selectCollection, editCollectionDetails, renameCollection,
} from '../redux/action-creators';
import CollectionsDialog, {
  COLLECTIONS_DIALOG_ACTIONS,
  CollectionsDialogText,
} from '../components/Dialog/CollectionsDialog';

import Colors from '../constants/Colors';
import BaseText from '../components/Generic/BaseText';
import Picker from '../components/TagInput/TagInputView';

const CollectionInputScreen = ({
  collection,
  createCollectionAction,
  selectCollectionAction,
  editCollectionDetailsAction,
  creatingCollection,
  collectionsLabels,
  collections,
  renameCollectionAction,
}) => {
  const navigation = useNavigation();
  const [title, onChangeTitle] = useState(creatingCollection ? 'Untitled Collection' : collection.label);
  const [purpose, onChangePurpose] = useState(creatingCollection ? '' : collection?.purpose);
  const [current, currentSelection] = useState(creatingCollection ? false : collection?.current);
  const [urgent, urgentSelection] = useState(creatingCollection ? false : collection?.urgent);
  const [newCollectionID, setCollectionID] = useState('');
  const [isAddingCollection, setIsAddingCollection] = useState(false);
  const [collectionsDialogText, setCollectionsDialogText] = useState(null);
  const [open, setOpen] = useState(false);
  const [hasTextValue, setHasTextValue] = useState(false);
  const [sameName, setSameName] = useState(false);
  const [moveToCatalog, setMoveToCatalog] = useState(false);

  const itemsList = [

  ];
  const itemNames = [];
  const collectionNames = [];
  if (Object.keys(collections).length > 0) {
    Object.keys(collections).forEach((key) => {
      if (collections[key] != null) {
        collectionNames.push(collections[key].label);
        for (let j = 0; j < collections[key].tags.length; j += 1) {
          if (!itemNames.includes(collections[key].tags[j])) {
            itemNames.push(collections[key].tags[j]);
          }
        }
      }
    });
  }
  for (let i = 0; i < itemNames.length; i += 1) {
    itemsList.push({ label: itemNames[i], value: itemNames[i] });
  }
  const [items, setItems] = useState(itemsList);
  const [value, setValue] = useState(creatingCollection ? [] : collection.tags);

  const discardInputAlert = () => {
    Alert.alert(
      'Discard Edits',
      'Are you sure you want to discard edits to this collection?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Discard',
          onPress: () => handleCloseInput(),
          style: 'destructive',
        },
      ],
    );
  };

  const handleCloseInput = ({ alert }) => {
    if (alert) {
      discardInputAlert();
    }
  };

  const handleSave = () => {
    if (creatingCollection) {
      if (!collectionNames.includes(title)) {
        if (hasTextValue) {
          if (hasInputErrors({ text: title, isRename: false, label: title })) {
            return;
          }
          createCollectionAction(title);
          setIsAddingCollection(true);
        }
      }
    } else {
      if (hasInputErrors({ text: title, isRename: true, label: title })) {
        return;
      }
      renameCollectionAction(newCollectionID, title);

      editCollectionDetailsAction(purpose, value, (current || urgent), urgent);
    }
  };
  const saveCollection = () => {
    handleSave();
    navigation.navigate('CollectionsList');
  };
  const saveAndContinue = () => {
    if (creatingCollection) {
      if (!collectionNames.includes(title)) {
        if (hasTextValue) {
          if (hasInputErrors({ text: title, isRename: false, label: title })) {
            return;
          }
          createCollectionAction(title);
          setIsAddingCollection(true);
        }
      }
    } else {
      if (hasInputErrors({ text: title, isRename: true, label: title })) {
        return;
      }
      renameCollectionAction(newCollectionID, title);

      editCollectionDetailsAction(purpose, value, (current || urgent), urgent);
    }
    setMoveToCatalog(true);
    //
  };
  const discardChanges = () => {
    setCollectionsDialogText(CollectionsDialogText[COLLECTIONS_DIALOG_ACTIONS.DISCARD]);
  };

  const discardChangesCreate = () => {
    setCollectionsDialogText(CollectionsDialogText[COLLECTIONS_DIALOG_ACTIONS.DISCARD_CREATE]);
  };
    // selectCollectionAction(title);

  // console.log(collection)
  // collection.label = title
  // collection.tags = tags

  useEffect(() => {
    if (Object.keys(collections).length > 0) {
      setCollectionID(Object.keys(collections)[Object.keys(collections).length - 1]);

      if (isAddingCollection) {
        selectCollectionAction(Object.keys(collections)[Object.keys(collections).length - 1]);
        editCollectionDetailsAction(purpose, value, (current || urgent), urgent);
        setIsAddingCollection(false);
      }
    }
    if (moveToCatalog) {
      navigation.navigate('Catalog');
    }

    // if (useState(collections )!== collections) {
    // }
  }, [collections, isAddingCollection, moveToCatalog]);

  useEffect(() => {
    setSameName(false);
    if (title.length > 0) {
      setHasTextValue(true);
    }
    if (creatingCollection) {
      for (let i = 0; i < collectionNames.length; i += 1) {
        if (collectionNames[i].toLowerCase() === title.toLowerCase()) {
          setHasTextValue(false);
          setSameName(true);
        }
      }
    }
  }, [title]);

  const saveButtonTextStyle = hasTextValue ? styles.saveButtonText : styles.disabledSaveButtonText;

  // PLACEHOLDERS
  const placeholderTitle = creatingCollection ? '' : collection.label;

  const isUniqueName = ({ text, isRename, label }) => {
    // if action is rename, new label can be same as old label
    if (isRename && (text.toLowerCase() === label.toLowerCase())) {
      return true;
    }
    return !((collectionsLabels).includes(text.toLowerCase()));
  };
  const hasMinLength = (text) => text.length > 0;

  const hasInputErrors = ({ text, isRename, label }) => {
    if (!hasMinLength(text)) {
      return true;
    }
    if (!isUniqueName({ text, isRename, label })) {
      return true;
    }
    return false;
  };
  const reduceInputs = () => {
    Keyboard.dismiss();
    setOpen(false);
  };

  return (

    <SafeAreaView style={styles.root}>

      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={20} color="black" />
          </TouchableOpacity>
        </Left>
        <TouchableWithoutFeedback onPress={reduceInputs}>
          <View style={styles.headerTitleContainer}>
            <Title style={styles.headerText}><Text>{title}</Text></Title>
          </View>
        </TouchableWithoutFeedback>
        <Right>
          <TouchableWithoutFeedback style={styles.empty_toucable} onPress={reduceInputs}>
            <View style={styles.headerTitleContainer}>

              <Text style={styles.header_empty_text}> </Text>

            </View>

          </TouchableWithoutFeedback>
        </Right>
      </Header>

      <View style={styles.inputField}>

        <KeyboardAvoidingView behavior="padding">
          <TouchableWithoutFeedback onPress={reduceInputs}>

            <View style={styles.textInputDiv}>
              <Text variant="title" style={styles.formHeader}>Title</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.titleTextInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeTitle}
              placeholder={placeholderTitle}
              value={title}
              onTouchStart={() => setOpen(false)}
              multiline={false}
              autoFocus
            />
          </View>

          <View style={styles.titleFooter}>
            {sameName
            && (
            <View style={styles.sameNameAlertContainer}>
              <Text style={{ color: Colors.destructive }}>Collection name must be unique</Text>
            </View>
            )}
          </View>

        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior="padding">

          <TouchableWithoutFeedback onPress={reduceInputs}>

            <View style={styles.textInputDiv}>

              <TouchableOpacity style={styles.textInputHeader} disabled>
                <Text variant="title" style={styles.formHeader}>Purpose</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.purposeTextInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangePurpose}
              placeholder="add purpose"
              onSubmitEditing={Keyboard.dismiss}
              value={purpose}
              onTouchStart={() => setOpen(false)}
              multiline={false}
              autoFocus
            />
          </View>
        </KeyboardAvoidingView>

        <View style={styles.tagTextHeader}>
          <TouchableWithoutFeedback disabled onPress={reduceInputs}>
            <Text variant="title" style={styles.formHeader}>Collection Tags</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={{ zIndex: 100, backgroundColor: '#fff' }}>
          <Picker
            multiple
            min={0}
            max={5}
            open={open}
            value={value}
            setOpen={setOpen}
            setValue={setValue}
            items={items}
            setItems={setItems}
            searchable
            placeholder="add new or existing tags "
          />
        </View>
        <View style={styles.switchTextHeader}>
          <TouchableWithoutFeedback disabled onPress={reduceInputs}>

            <Text variant="title" style={styles.formHeader}>Priority</Text>
          </TouchableWithoutFeedback>

        </View>

        <View style={styles.switchRow}>
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

      <KeyboardAvoidingView style={styles.textRow}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            if (creatingCollection) {
              discardChangesCreate();
            } else {
              discardChanges();
            }
          }}
        >
          <BaseText variant="title" style={styles.discardButtonText}>Discard</BaseText>
        </TouchableOpacity>

        {collectionsDialogText && (
        <CollectionsDialog
          collectionsDialogText={collectionsDialogText}
          setCollectionsDialogText={setCollectionsDialogText}
        />
        )}
        <View style={styles.saveCol}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={saveCollection}
            disabled={!hasTextValue}
          >
            <BaseText variant="title" style={saveButtonTextStyle}>Save</BaseText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={saveAndContinue}
            disabled={!hasTextValue}
          >
            <BaseText variant="title" style={saveButtonTextStyle}>Save and Continue</BaseText>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

CollectionInputScreen.propTypes = {
  createCollectionAction: func.isRequired,
  collection: shape({}).isRequired,
  selectCollectionAction: func.isRequired,
  editCollectionDetailsAction: func.isRequired,
  creatingCollection: bool.isRequired,
  collections: shape({}).isRequired,
  renameCollectionAction: func.isRequired,
  collectionsLabels: shape([]).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  collectionsLabels: collectionsLabelsSelector(state),
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
    marginHorizontal: 0,
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.5,
    height: 34,
    width: '100%',
    paddingTop: 2,

  },
  titleFooter: {
    marginHorizontal: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderRadius: 10,
    paddingBottom: 12,
  },
  sameNameAlertContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  purposeTextInputContainer: {
    marginHorizontal: 0,
    paddingHorizontal: 5,
    paddingTop: 1,
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    width: '100%',

  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    flex: 1,
    alignItems: 'stretch',
  },
  saveButton: {
    marginLeft: 10,
    paddingBottom: 10,
  },
  textInputHeader: {

  },
  saveButtonText: {
    color: Colors.primary,
  },
  discardButtonText: {
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
  textInputDiv: {
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
  checkboxContainer: {
    borderWidth: 2,
    borderRadius: 20,
    width: 40,
    height: 40,
    marginLeft: 50,
  },
  switchTextInstructions: {
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
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingRight: 20,
    marginVertical: 4,
    paddingTop: 20,
    zIndex: -1,
    width: '100%',

  },
  leftRightPadding: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentTextField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputField: {
    padding: 10,
  },
  tagTextHeader: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 8,

  },
  switchTextHeader: {
    paddingTop: 6,
    paddingBottom: 3,
    marginTop: 15,
    paddingLeft: 8,

  },
  formHeader: {
    fontSize: 16,
  },

  switchText: {
    paddingLeft: 5,
  },
  empty_toucable: {
    width: '400%',
    height: '400%',
    marginTop: -5,
    padding: 0,

  },
  header_empty_text: {
    width: '100%',
    height: '200%',
    marginVertical: -100,
  },

});
