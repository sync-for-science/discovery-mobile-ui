import React from 'react'
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native'
import { func, string } from 'prop-types';
import { Entypo } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies


import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText'
import SelectedCollectionIcon from '../Icons/SelectedCollectionIcon'

const CollectionRow = ({ collectionId, label, handlePress }) => (
  <TouchableOpacity style={styles.collectionRow} onPress={handlePress}>
    <View style={styles.selectedAndTitleContainer}>
      <SelectedCollectionIcon collectionId={collectionId}/>
      <BaseText>{label}</BaseText>
    </View>
    <TouchableOpacity>
      <Entypo name="dots-three-horizontal" size={24} color={Colors.darkgrey} />
    </TouchableOpacity>
  </TouchableOpacity>
);

CollectionRow.propTypes = {
  label: string.isRequired,
  handlePress: func.isRequired,
};

export default CollectionRow

const styles = StyleSheet.create({
  collectionRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
    width: '90%'
  },
  selectedAndTitleContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  }
})
