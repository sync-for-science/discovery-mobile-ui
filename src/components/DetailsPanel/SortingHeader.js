import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { func, shape, string } from 'prop-types';

import BaseText from '../Generic/BaseText';
import { SORT_DESC } from '../../constants/sorting';

const SORTING_TEXT = {
  'record-type': {
    label: 'Record Type',
    asc: 'Sorted by Record Type in ascending order.',
    desc: 'Sorted by Record Type in descending order.',
  },
  'record-date': {
    label: 'Record Date',
    asc: 'Sorted by Record Date in ascending order.',
    desc: 'Sorted by Record Date in descending order.',
  },
  'time-saved': {
    label: 'Time Saved',
    asc: 'Sorted by Time Saved in ascending order.',
    desc: 'Sorted by Time Saved in descending order.',
  },
};

const SortingHeader = ({ sortingState, onChange }) => {
  const { activeSortField, sortDirections } = sortingState;

  const sortConfig = Object.entries(sortDirections).map(([sortField, sortDir]) => ({
    sortField,
    sortDir,
    isPicked: activeSortField === sortField,
  }));

  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        { sortConfig.map(({ sortField, sortDir, isPicked }) => (
          <TouchableOpacity
            key={sortField}
            style={styles.button}
            onPress={() => onChange(sortField)}
          >
            <BaseText variant={isPicked ? 'title' : ''}>{SORTING_TEXT[sortField].label}</BaseText>
            {isPicked && (
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
    activeSortField: string.isRequired,
    sortDirections: shape({}).isRequired,
  }).isRequired,
  onChange: func.isRequired,
};

export default SortingHeader;

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  descriptionContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  descriptionText: {
    fontStyle: 'italic',
  },
});
