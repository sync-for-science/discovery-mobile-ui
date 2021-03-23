import React from 'react'
import { StyleSheet, TouchableOpacity, ActionSheetIOS, View, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux'

import {deleteCollection, renameCollection} from '../../redux/action-creators'
import { collectionsCountSelector} from '../../redux/selectors'
import Colors from '../../constants/Colors';

const CollectionRowActionIcon = ({
  collectionId, 
  deleteCollectionAction, 
  collectionsCount,
  renameCollectionAction
}) => {
  const handlePress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Rename Collection", "Delete Collection"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark'
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          Alert.prompt( 
            'Rename Collection', 
            'Enter name for this new collection.', 
            [
              {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
              },
              {
                text: "Rename",
                onPress: (text) => renameCollectionAction(collectionId, text),
              }
            ]
          )
        } else if (buttonIndex === 2) {
          if (collectionsCount <= 1) {
            Alert.alert( 'Delete Error', 'Cannot delete last collection.')
          } else {
            Alert.alert( 
              'Delete Collection', 
              'Are you sure you want to delete this collection?',
              [
                {
                  text: "Cancel",
                  onPress: () => {},
                  style: "cancel"
                },
                {
                  text: "Delete",
                  onPress: () => deleteCollectionAction(collectionId),
                  style: 'destructive'
                }
              ]
            )
          }
        }
      }
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Entypo name="dots-three-horizontal" size={24} color={Colors.darkgrey} />
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state) => ({
  collectionsCount: collectionsCountSelector(state)
})

const mapDispatchToProps = {
  deleteCollectionAction: deleteCollection,
  renameCollectionAction: renameCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRowActionIcon)

const styles = StyleSheet.create({})
