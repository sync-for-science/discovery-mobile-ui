import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import {
  oneOf, func, shape, bool,
} from 'prop-types';
import { connect } from 'react-redux';

import BaseText from '../Generic/BaseText';
import { SORT_DESC, sortFields, orderedSortFields } from '../../constants/sorting';
import { toggleSortingState } from '../../redux/action-creators';
import Colors from '../../constants/Colors';

const { RECORD_TYPE, RECORD_DATE, TIME_SAVED } = sortFields;

const SORTING_TEXT = {
  [RECORD_TYPE]: {
    label: 'Record Type',
    asc: 'Sorted by Record Type in ascending order.',
    desc: 'Sorted by Record Type in descending order.',
  },
  [RECORD_DATE]: {
    label: 'Record Date',
    asc: 'Sorted by Record Date in ascending order.',
    desc: 'Sorted by Record Date in descending order.',
  },
  [TIME_SAVED]: {
    label: 'Time Saved',
    asc: 'Sorted by Time Saved in ascending order.',
    desc: 'Sorted by Time Saved in descending order.',
  },
};

const SortingHeader = ({ sortingState, toggleSortingStateAction, hasMultipleSavedRecords }) => {
  const { activeSortField, sortDirections } = sortingState;

  const sortConfig = orderedSortFields.map((sortField) => ({
    sortField,
    sortDir: sortDirections[sortField],
    isPicked: activeSortField === sortField,
  }));

  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        { sortConfig.map(({ sortField, sortDir, isPicked }) => (
          <TouchableOpacity
            key={sortField}
            style={styles.button}
            onPress={() => toggleSortingStateAction(sortField)}
            disabled={!hasMultipleSavedRecords && (sortField === activeSortField)}
          >
            <BaseText variant={isPicked ? 'title' : ''}>{SORTING_TEXT[sortField].label}</BaseText>
            {isPicked && hasMultipleSavedRecords && (
              <Ionicons
                name={sortDir === SORT_DESC ? 'arrow-down' : 'arrow-up'}
                size={20}
                color="black"
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.descriptionContainer}>
        <BaseText style={styles.descriptionText}>
          {SORTING_TEXT[activeSortField][sortDirections[activeSortField]]}
        </BaseText>
      </View>
    </View>

  );
};

SortingHeader.propTypes = {
  sortingState: shape({
    activeSortField: oneOf(Object.values(sortFields)).isRequired,
    sortDirections: shape({}).isRequired,
  }).isRequired,
  toggleSortingStateAction: func.isRequired,
  hasMultipleSavedRecords: bool.isRequired,
};

const mapDispatchToProps = {
  toggleSortingStateAction: toggleSortingState,
};

export default connect(null, mapDispatchToProps)(SortingHeader);

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  descriptionContainer: {
    paddingBottom: 15,
    alignItems: 'center',
    borderBottomColor: Colors.mediumgrey,
    borderBottomWidth: 1,
  },
  descriptionText: {
    fontStyle: 'italic',
  },
});
