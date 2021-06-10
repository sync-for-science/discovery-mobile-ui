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
import { activeCollectionSelector} from '../../redux/selectors'

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


  return (
    <View style={styles.collectionRowContainer}>
      <View style={styles.dateInfoRow}>
        <View style={styles.dateInfoMargin}>
          <DateInfo date="5/10/21" />
        </View>
        <DateInfo date="5/10/21" color={Colors.darkgrey} />
      </View>
      <TouchableOpacity style={styles.collectionRow} onPress={handlePress}>
        <View style={styles.collectionRowCountIconsContainer}>
          <CountInfo count={1} color={Colors.collectionYellow} />
          <CountInfo count={1} color={Colors.mediumgrey} />
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
          <CountInfo count={1} label="Records" color={Colors.collectionYellow} />
          <CountInfo count={1} label="Collection Notes" color={Colors.mediumgrey} />
          <CountInfo count={1} label="Record Notes" color={Colors.mediumgrey} />
          <View style={styles.dateInfoContainer}>
            <DateInfo date="6/10/2021" label="Last Modified" />
            <DateInfo date="6/10/2021" label="Created" color={Colors.darkgrey2} />
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

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state)
})

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
    marginTop: 4,

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
    marginRight: 6,
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
});
