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
import CollectionRowActionIcon from '../Icons/CollectionRowActionIcon';
import { selectCollection } from '../../redux/action-creators';
import {
  collectionByIdSelector,
} from '../../redux/selectors';
import { formatDateShort } from '../../resources/fhirReader';
import PreBuiltDescriptionText from './PreBuiltDescriptionText';

const CountInfo = ({ count, label, color }) => (
  <View style={styles.countIconContainer}>
    <View style={[
      styles.countIcon,
      color ? { backgroundColor: color } : Colors.lightgrey2,
    ]}
    >
      <Text>{count}</Text>
    </View>
    {label && <Text style={styles.countIconText}>{label}</Text>}
  </View>
);

CountInfo.propTypes = {
  count: number.isRequired,
  label: string,
  color: string,
};

CountInfo.defaultProps = {
  label: null,
  color: null,
};

const DateInfo = ({ date, label, color }) => (
  <View style={styles.dateRow}>
    <Text style={color ? { color } : null}>
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
  label: string,
  color: string,
};

DateInfo.defaultProps = {
  label: null,
  color: null,
};

const CountInfo = ({ count, label, color }) => (
  <View style={styles.countIconContainer}>
    <View style={[
      styles.countIcon,
      color ? { backgroundColor: color } : Colors.lightgrey2,
    ]}
    >
      <Text>{count}</Text>
    </View>
    {label && <Text style={styles.countIconText}>{label}</Text>}
  </View>
);

CountInfo.propTypes = {
  count: number.isRequired,
  label: string,
  color: string,
};

CountInfo.defaultProps = {
  label: null,
  color: null,
};

const DateInfo = ({ date, label, color }) => (
  <View style={styles.dateRow}>
    <Text style={color ? { color } : null}>
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
  label: string,
  color: string,
};

DateInfo.defaultProps = {
  label: null,
  color: null,
};

const CollectionRow = ({
  collection,
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
  const createdDate = formatDateShort(collection.created);
  const modifiedDate = formatDateShort(collection.lastUpdated);
  const collectionNotesCount = Object.keys(collection.notes).length;
  const collectionRecords = Object.values(collection.records);
  const recordNotesCount = collectionRecords.reduce((acc, { notes }) => (
    notes ? acc.concat(Object.keys(notes)) : acc), []).length;
  const savedRecordsCount = collectionRecords.filter((record) => record.saved === true).length;

  return (
    <View style={styles.collectionRowContainer}>
      <View style={styles.dateInfoRow}>
        <View style={styles.dateInfoMargin}>
          <DateInfo date={modifiedDate} />
        </View>
        <DateInfo date={createdDate} color={Colors.darkgrey} />
      </View>
      <TouchableOpacity style={styles.collectionRow} onPress={handlePress}>
        <View style={styles.collectionRowCountIconsContainer}>
          <CountInfo count={savedRecordsCount} color={Colors.collectionYellow} />
          <CountInfo count={collectionNotesCount + recordNotesCount} color={Colors.mediumgrey} />
          <Text style={styles.labelText}>{label}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.infoIcon} onPress={() => setShowDetails(!showDetails)}>
            <Ionicons name="information-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <CollectionRowActionIcon collectionId={collectionId} collectionLabel={label} />
        </View>
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.detailsContainer}>
          {collection.preBuilt && (
            <View style={styles.descriptionContainer}>
              <Text>
                <PreBuiltDescriptionText collectionId={collectionId} />
              </Text>
            </View>
          )}
          <View>
            <CountInfo count={savedRecordsCount} label="Records In Collection" color={Colors.collectionYellow} />
            <CountInfo count={collectionNotesCount} label="Collection Notes" color={Colors.mediumgrey} />
            <CountInfo count={recordNotesCount} label="Record Notes" color={Colors.mediumgrey} />
            <View style={styles.dateInfoContainer}>
              <DateInfo date={modifiedDate} label="Last Modified" />
              <View style={styles.dateInfoContainer}>
                <DateInfo date={createdDate} label="Created" color={Colors.darkgrey2} />
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

CollectionRow.propTypes = {
  collection: shape({}).isRequired,
  collectionId: string.isRequired,
  label: string.isRequired,
  navigation: shape({}).isRequired,
  selectCollectionAction: func.isRequired,
};

CollectionRow.defaultProps = {
};

const mapStateToProps = (state, ownProps) => ({
  collection: collectionByIdSelector(state, ownProps),
});

const mapDispatchToProps = {
  selectCollectionAction: selectCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRow);

const styles = StyleSheet.create({
  collectionRowContainer: {
    width: '90%',
    paddingTop: 12,
  },
  collectionRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 12,
  },
  labelText: {
    fontSize: 16,
  },
  collectionRowCountIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  countIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginRight: 6,
  },
  countIconText: {
    marginLeft: 8,
  },
  detailsContainer: {
    borderColor: Colors.collectionYellow,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginTop: 4,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  dateText: {
    marginLeft: 8,
  },
  dateInfoContainer: {
    marginTop: 4,
  },
  dateInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateInfoMargin: {
    marginRight: 24,
  },
  labelText: {
    fontSize: 16,
  },
  collectionRowCountIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionContainer: {
    marginBottom: 12,
  },
});
