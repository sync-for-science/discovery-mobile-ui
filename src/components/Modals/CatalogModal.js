import React, { useState } from 'react';
import {
  Alert, Modal, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';

import { func, string } from 'prop-types';
import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import CollectionSegmentControl from '../SegmentControl/CollectionSegmentControl';
import MarkedSegmentControl from '../SegmentControl/MarkedSegmentControl';
import { clearCollection, clearMarkedResources } from '../../redux/action-creators';

const CatalogModal = ({
  collectionId,
  clearCollectionAction,
  clearMarkedResourcesAction,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClearCollection = () => {
    const clearAndCloseModal = () => {
      clearCollectionAction(collectionId);
      setModalVisible(false);
    };

    Alert.alert(
      'Clear Collection',
      'Are you sure you want to clear the records saved to this collection?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: clearAndCloseModal,
          style: 'destructive',
        },
      ],
    );
  };

  const handleClearMarked = () => {
    const clearAndCloseModal = () => {
      clearMarkedResourcesAction(collectionId);
      setModalVisible(false);
    };

    Alert.alert(
      'Clear Highlighted Events',
      'Are you sure you want to clear the highlighted events?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: clearAndCloseModal,
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View style={styles.root}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeaderContainer}>
              <BaseText variant="sectionTitle">Record Filters</BaseText>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.controlsContainer}>
              <CollectionSegmentControl collection />
              <MarkedSegmentControl />
              <TouchableOpacity style={styles.button} onPress={handleClearCollection}>
                <BaseText variant="buttonDestructive">Clear Collection</BaseText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleClearMarked}>
                <BaseText variant="buttonDestructive">Clear Highlighted Records</BaseText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Entypo name="dots-three-vertical" size={24} color={Colors.darkgrey} />
      </TouchableOpacity>
    </View>
  );
};

CatalogModal.propTypes = {
  collectionId: string.isRequired,
  clearCollectionAction: func.isRequired,
  clearMarkedResourcesAction: func.isRequired,
};

const mapDispatchToProps = {
  clearCollectionAction: clearCollection,
  clearMarkedResourcesAction: clearMarkedResources,
};

export default connect(null, mapDispatchToProps)(CatalogModal);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    shadowColor: 'black',
  },
  modalView: {
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  controlsContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: Colors.lightgrey2,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
});
