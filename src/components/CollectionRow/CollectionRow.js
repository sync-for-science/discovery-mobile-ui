import React, { useState } from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text,
} from 'react-native';
import { func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import CollectionRowActionIcon from '../Icons/CollectionRowActionIcon';
import { selectCollection } from '../../redux/action-creators';

const CollectionRow = ({
  collectionId,
  label,
  navigation,
  selectCollectionAction,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const handlePress = () => {
    selectCollectionAction(collectionId);
    navigation.navigate('Catalog');
  };

  return (
    <View style={styles.collectionRowContainer}>
      <TouchableOpacity style={styles.collectionRow} onPress={handlePress}>
        <BaseText style={styles.labelText}>{label}</BaseText>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.infoIcon} onPress={() => setShowDetails(!showDetails)}>
            <Ionicons name="information-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <CollectionRowActionIcon collectionId={collectionId} collectionLabel={label} />
        </View>
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.detailsContainer}>
          <View style={styles.countIconContainer}>
            <View style={[styles.countIcon, styles.collectionColor]}>
              <Text>1</Text>
            </View>
            <Text style={styles.countIconText}>Records</Text>
          </View>
          <View style={styles.countIconContainer}>
            <View style={[styles.countIcon, styles.notesColor]}>
              <Text>1</Text>
            </View>
            <Text style={styles.countIconText}>Notes</Text>
          </View>
        </View>
      )}
    </View>
  );
};

CollectionRow.propTypes = {
  collectionId: string.isRequired,
  label: string.isRequired,
  navigation: shape({}).isRequired,
  selectCollectionAction: func.isRequired,
};

const mapDispatchToProps = {
  selectCollectionAction: selectCollection,
};

export default connect(null, mapDispatchToProps)(CollectionRow);

const styles = StyleSheet.create({
  collectionRowContainer: {
    width: '90%',
  },
  collectionRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 12,
  },
  labelText: {
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 8,
  },
  countIcon: {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  collectionColor: {
    backgroundColor: Colors.collectionIcon,
  },
  notesColor: {
    backgroundColor: Colors.mediumgrey,
  },
  countIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  countIconText: {
    marginLeft: 8,
  },
  detailsContainer: {
    borderColor: Colors.mediumgrey,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: Colors.lightgrey3,
  },
});
