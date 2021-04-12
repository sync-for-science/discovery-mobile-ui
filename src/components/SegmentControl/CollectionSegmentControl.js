import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bool, func, shape } from 'prop-types';
import BaseSegmentControl from '../Generic/BaseSegmentControl';

import BaseText from '../Generic/BaseText';
import { toggleShowCollectionOnly } from '../../redux/action-creators';
import { activeCollectionShowCollectionOnlySelector, filterTriggerDateRangeSelector, activeCollectionResourceIdsSelector } from '../../redux/selectors';
import { actionTypes } from '../../redux/action-types';

const allRecordsDescription = 'Displays all records.';
const collectionRecordsDescription = 'Only displays records saved to the collection.';

const CollectionSegmentControl = ({
  showCollectionOnly,
  toggleShowCollectionOnlyAction,
  updateDateRangeFilter,
  filterTriggerDateRange,
  collectionResourceIdObjects,
}) => {
  const segControlIndex = showCollectionOnly ? 1 : 0;
  const description = segControlIndex === 0 ? allRecordsDescription : collectionRecordsDescription;
  const handleChange = (selectedSegmentIndex) => {
    toggleShowCollectionOnlyAction(selectedSegmentIndex !== 0);
    updateDateRangeFilter(filterTriggerDateRange);
  };

  const collectionResourceIds = Object.keys(collectionResourceIdObjects)
  const isEnabled = collectionResourceIds.length > 0

  // reset SegmentControl and TimelineRange when user
  // clears Collection Records while in Show Collection Only view
  useEffect(() => {
    if (showCollectionOnly && collectionResourceIds.length === 0) {
      toggleShowCollectionOnlyAction(false);
      updateDateRangeFilter(filterTriggerDateRange);
    }
  }, [showCollectionOnly, collectionResourceIds]);

  return (
    <View style={styles.root}>
      <BaseSegmentControl
        values={['All Records', 'Collection Records']}
        selectedIndex={segControlIndex}
        onChange={handleChange}
        enabled={isEnabled}
      />
      <BaseText style={styles.descriptionText}>{description}</BaseText>
    </View>
  );
};

CollectionSegmentControl.propTypes = {
  showCollectionOnly: bool.isRequired,
  toggleShowCollectionOnlyAction: func.isRequired,
  filterTriggerDateRange: shape({}).isRequired,
  updateDateRangeFilter: func.isRequired,
  collectionResourceIdObjects: shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  showCollectionOnly: activeCollectionShowCollectionOnlySelector(state),
  filterTriggerDateRange: filterTriggerDateRangeSelector(state, ownProps),
  collectionResourceIdObjects: activeCollectionResourceIdsSelector(state)
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
