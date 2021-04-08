import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bool, func, shape } from 'prop-types';
import BaseSegmentControl from '../Generic/BaseSegmentControl';

import BaseText from '../Generic/BaseText';
import { toggleShowCollectionOnly } from '../../redux/action-creators';
import { activeCollectionShowCollectionOnlySelector, filterTriggerDateRangeSelector } from '../../redux/selectors';
import { actionTypes } from '../../redux/action-types';

const allRecordsDescription = 'Displays all records.';
const collectionRecordsDescription = 'Only displays records saved to the collection.';

const CollectionSegmentControl = ({
  showCollectionOnly,
  toggleShowCollectionOnlyAction,
  updateDateRangeFilter,
  filterTriggerDateRange
}) => {
  const segControlIndex = showCollectionOnly ? 1 : 0;
  const description = segControlIndex === 0 ? allRecordsDescription : collectionRecordsDescription;
  const handleChange = (selectedSegmentIndex) => {
    toggleShowCollectionOnlyAction(selectedSegmentIndex !== 0);
    updateDateRangeFilter(filterTriggerDateRange);
  };

  return (
    <View style={styles.root}>
      <BaseSegmentControl
        values={['All Records', 'Collection Records']}
        selectedIndex={segControlIndex}
        onChange={handleChange}
      />
      <BaseText style={styles.descriptionText}>{description}</BaseText>
    </View>
  );
};

CollectionSegmentControl.propTypes = {
  showCollectionOnly: bool.isRequired,
  toggleShowCollectionOnlyAction: func.isRequired,
  collectionDateRange: shape({}).isRequired,
  updateDateRangeFilter: func.isRequired,
};

const mapStateToProps = (state) => ({
  showCollectionOnly: activeCollectionShowCollectionOnlySelector(state),
  filterTriggerDateRange: filterTriggerDateRangeSelector(state, ownProps)
});

const mapDispatchToProps = {
  toggleShowCollectionOnlyAction: toggleShowCollectionOnly,
  updateDateRangeFilter: ({ dateRangeStart, dateRangeEnd }) => ({
    type: actionTypes.UPDATE_DATE_RANGE_FILTER,
    payload: {
      dateRangeStart,
      dateRangeEnd,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionSegmentControl);

const styles = StyleSheet.create({
  root: {
    marginBottom: 30,
  },
  descriptionText: {
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
  },
});
