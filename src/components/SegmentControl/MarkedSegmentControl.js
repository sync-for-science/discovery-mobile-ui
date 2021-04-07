import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bool, func, shape } from 'prop-types';

import BaseSegmentControl from '../Generic/BaseSegmentControl';
import BaseText from '../Generic/BaseText';
import { toggleShowMarkedOnly } from '../../redux/action-creators';
import { filterTriggerDateRangeSelector, markedDateRangeSelector } from '../../redux/selectors';
import { actionTypes } from '../../redux/action-types';

const allRecordsDescription = 'Displays all records.';
const highlightedRecordsDescription = 'Only displays highlighted records.';

const MarkedSegmentControl = ({
  showMarkedOnly,
  toggleShowMarkedOnlyAction,
  markedDateRange,
  updateDateRangeFilter,
  filterTriggerDateRange,
}) => {
  const segControlIndex = showMarkedOnly ? 1 : 0;
  const description = segControlIndex === 0 ? allRecordsDescription : highlightedRecordsDescription;
  const handleChange = (event) => {
    if (event === 0) {
      toggleShowMarkedOnlyAction(false);
      updateDateRangeFilter({ dateRangeStart: undefined, dateRangeEnd: undefined });
    } else {
      toggleShowMarkedOnlyAction(true);
      updateDateRangeFilter(markedDateRange);
    }
  };

  return (
    <View style={styles.root}>
      <BaseSegmentControl
        values={['All Records', 'Highlighted Records']}
        selectedIndex={segControlIndex}
        onChange={handleChange}
      />
      <BaseText style={styles.descriptionText}>{description}</BaseText>
    </View>
  );
};

MarkedSegmentControl.propTypes = {
  showMarkedOnly: bool.isRequired,
  toggleShowMarkedOnlyAction: func.isRequired,
  markedDateRange: shape({}).isRequired,
  updateDateRangeFilter: func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  showMarkedOnly: state.showMarkedOnly,
  markedDateRange: markedDateRangeSelector(state),
  filterTriggerDateRange: filterTriggerDateRangeSelector(state, ownProps)
});

const mapDispatchToProps = {
  toggleShowMarkedOnlyAction: toggleShowMarkedOnly,
  updateDateRangeFilter: ({ dateRangeStart, dateRangeEnd }) => ({
    type: actionTypes.UPDATE_DATE_RANGE_FILTER,
    payload: {
      dateRangeStart,
      dateRangeEnd,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkedSegmentControl);

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
