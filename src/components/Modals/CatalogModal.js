import React, { useState } from 'react';
import {
  shape, func, string, bool,
} from 'prop-types';
import {
  Alert, Modal, StyleSheet, TouchableOpacity, View, Text,
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import CollectionSegmentControl from '../SegmentControl/CollectionSegmentControl';
import MarkedSegmentControl from '../SegmentControl/MarkedSegmentControl';
import { clearCollection, clearMarkedResources } from '../../redux/action-creators';
import { activeCollectionSelector, hasAnyHighlightedRecordInScope, hasAnyCollectionRecordInScope } from '../../redux/selectors';
import TextStyles from '../../constants/TextStyles';

const scDesc1 = (
  <>
    <Text style={{ fontWeight: '700' }}>Editing the Collection and Highlights</Text>
    {'\n'}
    Add/remove Records to/from the Collection, or highlight/unhighlight Records of interest.
  </>
);
const scDesc2 = (
  <>
    <Text style={{ fontWeight: '700' }}>Previewing the Collection and editing the Highlights</Text>
    {'\n'}
    Only view Records in the Collection and highlight/unhighlight
    Records of interest inside the Collection.
  </>
);
const scDesc3 = (
  <>
    <Text style={{ fontWeight: '700' }}>Previewing the Collection and the Highlights</Text>
    {'\n'}
    Only view Records in the Collection that are highlighted.
  </>
);
const scDesc4 = (
  <>
    <Text style={{ fontWeight: '700' }}>Editing the Collection and previewing the Highlights</Text>
    {'\n'}
    From all highlighted Records, add/remove Records to/from the Collection.
  </>
);

const SegmentControlDescription = ({ showCollectionOnly, showMarkedOnly }) => {
  let description;
  if (!showCollectionOnly && !showMarkedOnly) {
    description = scDesc1;
  } if (showCollectionOnly && !showMarkedOnly) {
    description = scDesc2;
  } if (showCollectionOnly && showMarkedOnly) {
    description = scDesc3;
  } if (!showCollectionOnly && showMarkedOnly) {
    description = scDesc4;
  }
  return (
    <View style={styles.segmentControlDescriptionContainer}>
      <Text style={styles.segmentControlDescriptionText}>{description}</Text>
    </View>
  );
};

SegmentControlDescription.propTypes = {
  showCollectionOnly: bool.isRequired,
  showMarkedOnly: bool.isRequired,
};

const CatalogModal = ({
  collectionId,
  clearCollectionAction,
  clearMarkedResourcesAction,
  collection,
  clearHighlightedEnabled,
  hasCollectionRecordsInScope,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { showCollectionOnly, showMarkedOnly } = collection;
  const clearCollectionEnabled = hasCollectionRecordsInScope && !collection.preBuilt;

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
              <BaseText variant="sectionTitle">Workspaces</BaseText>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.controlsContainer}>
              <SegmentControlDescription
                showCollectionOnly={showCollectionOnly}
                showMarkedOnly={showMarkedOnly}
              />
              <View style={styles.segmentControlContainer}>
                <CollectionSegmentControl
                  readOnly={collection.preBuilt}
                />
                <MarkedSegmentControl />
              </View>
              <TouchableOpacity
                disabled={!clearCollectionEnabled}
                style={[
                  styles.clearButtonBase,
                  clearCollectionEnabled ? null : styles.clearButtonDisabled,
                ]}
                onPress={handleClearCollection}
              >
                <BaseText variant={clearCollectionEnabled ? 'buttonDestructive' : 'buttonDisabled'}>Clear Collection</BaseText>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!clearHighlightedEnabled}
                style={[
                  styles.clearButtonBase,
                  clearHighlightedEnabled ? null : styles.clearButtonDisabled,
                ]}
                onPress={handleClearMarked}
              >
                <BaseText variant={clearHighlightedEnabled ? 'buttonDestructive' : 'buttonDisabled'}>Clear Highlights</BaseText>
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
  collection: shape({}).isRequired,
  clearHighlightedEnabled: bool.isRequired,
  hasCollectionRecordsInScope: bool.isRequired,
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
  clearHighlightedEnabled: hasAnyHighlightedRecordInScope(state),
  hasCollectionRecordsInScope: hasAnyCollectionRecordInScope(state),
});

const mapDispatchToProps = {
  clearCollectionAction: clearCollection,
  clearMarkedResourcesAction: clearMarkedResources,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogModal);

const { body1 } = TextStyles;

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
    height: 475,
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
  clearButtonBase: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: Colors.lightgrey2,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  segmentControlDescriptionText: {
    ...body1,
  },
  segmentControlDescriptionContainer: {
    marginBottom: 20,
    height: hp('13%'),
    justifyContent: 'center',
  },
  segmentControlContainer: {
    marginBottom: 20,
  },
  clearButtonDisabled: {
    backgroundColor: Colors.lightgrey2,
  },
});
