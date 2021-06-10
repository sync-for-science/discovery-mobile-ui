import React, { useState } from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text,
} from 'react-native';
import {
  func, number, shape, string,
} from 'prop-types';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import Colors from '../../constants/Colors';
import BaseText from '../Generic/BaseText';
import CollectionRowActionIcon from '../Icons/CollectionRowActionIcon';
import { selectCollection } from '../../redux/action-creators';

const CountInfo = ({ count, label }) => (
  <View style={styles.countIconContainer}>
    <View style={[
      styles.countIcon,
      label === 'Records' ? styles.collectionColor : styles.notesColor,
    ]}
    >
      <Text>{count}</Text>
    </View>
    <Text style={styles.countIconText}>{label}</Text>
  </View>
);

CountInfo.propTypes = {
  count: number.isRequired,
  label: string.isRequired,
};

const DateInfo = ({ date, label }) => (
  <View style={styles.dateRow}>
    <Text style={label === 'Created' ? { color: Colors.darkgrey2 } : null}>
      {date}
    </Text>
    {label && (
      <Text style={styles.dateText}>
        {label}
      </Text>
    )}
  </View>
);

DateInfo.propTypes = {
  date: string.isRequired,
  label: string.isRequired,
};

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
          <CountInfo count={1} label="Records" />
          <CountInfo count={1} label="Notes" />
          <View style={styles.dateInfoContainer}>
            <DateInfo date="6/10/2021" label="Last Modified" />
            <DateInfo date="6/10/2021" label="Created" />
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
    marginTop: 4,
    backgroundColor: Colors.lightgrey3,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 8,
  },
  dateInfoContainer: {
    marginTop: 4,
  },
});
