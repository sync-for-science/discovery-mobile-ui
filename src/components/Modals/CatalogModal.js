import React, { useState } from 'react';
import {
  Alert, Modal, StyleSheet, TouchableOpacity, View, Text
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';

import { func, shape, string } from 'prop-types';
import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import CollectionSegmentControl from '../SegmentControl/CollectionSegmentControl';
import MarkedSegmentControl from '../SegmentControl/MarkedSegmentControl';
import { clearCollection, clearMarkedResources } from '../../redux/action-creators';
import { activeCollectionSelector } from '../../redux/selectors';

const scDesc1 = "All Records specified by the Filters and the interval in the Datepicker are available for putting in/removing from the Collection or highlighting/unhighlighting in the Timeline."
const scDesc2 = "Only the Records in the Collection are available for Preview, but you can highlight/unhighlight them in the Timeline."
const scDesc3 = "Only the Records in the Collection that are also highlighted are available for Preview."
const scDesc4 = "All Records specified by the Filters and the interval in the Datepicker are available for putting in/removing from the Collection, but you can only Preview the highlights."

const SegmentControlDescription = ({showCollectionOnly, showMarkedOnly}) => {
  let description
  if (!showCollectionOnly && !showMarkedOnly) {
    description =  scDesc1
  } if (showCollectionOnly && !showMarkedOnly) {
    description =  scDesc2
  } if (showCollectionOnly && showMarkedOnly) {
    description =  scDesc3
  } if (!showCollectionOnly && showMarkedOnly) {
    description = scDesc4
  }
  return ( 
    <View style={styles.segmentControlDescriptionContainer}>
      <BaseText style={styles.segmentControlDescriptionText}>{description}</BaseText>
    </View>
  )
}


const CatalogModal = ({
  collectionId,
  clearCollectionAction,
  clearMarkedResourcesAction,
  collection
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { showCollectionOnly, showMarkedOnly } = collection

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
      'Are you sure you want to clear the highlighted records?',
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
              <SegmentControlDescription showCollectionOnly={showCollectionOnly} showMarkedOnly={showMarkedOnly} />
              <View style={styles.segmentControlContainer}>
                <CollectionSegmentControl />
                <MarkedSegmentControl />
              </View>
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
        <Entypo name="dots-three-vertical" size={20} color={Colors.headerIcon} />
      </TouchableOpacity>
    </View>
  );
};

CatalogModal.propTypes = {
  collectionId: string.isRequired,
  clearCollectionAction: func.isRequired,
  clearMarkedResourcesAction: func.isRequired,
  collection: shape({}).isRequired
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state)
})

const mapDispatchToProps = {
  clearCollectionAction: clearCollection,
  clearMarkedResourcesAction: clearMarkedResources,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogModal);

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
    marginBottom: 10,
  },
  segmentControlDescriptionContainer: {
    marginBottom: 20,
    height: 80,
    justifyContent: 'center'
  },
  segmentControlDescriptionText: {
    textAlign: 'center',
    fontStyle: 'italic'
  },
  segmentControlContainer: {
    marginBottom: 20,
  }
});
