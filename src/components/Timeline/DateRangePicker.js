import React from 'react';
import { func, shape, string } from 'prop-types';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { min, max } from 'date-fns';

import DatePicker from './DatePicker';
import { timelinePropsSelector, dateRangeFilterFiltersSelector } from '../../redux/selectors';
import { actionTypes } from '../../redux/epics';

const DateRangePicker = ({ timelineProps, dateRangeFilter, updateDateRangeFilter }) => {
  const { minimumDate, maximumDate } = timelineProps;
  if (!minimumDate || !maximumDate) {
    return null;
  }

  const { dateRangeStart, dateRangeEnd } = dateRangeFilter;
  const activeDateStart = dateRangeStart || minimumDate;
  const activeDateEnd = dateRangeEnd || maximumDate;

  return (
    <SafeAreaView style={styles.container}>
      <DatePicker
        label="start date"
        activeDate={activeDateStart}
        minimumDate={minimumDate}
        maximumDate={min([maximumDate, activeDateEnd])}
        onDateSelect={(d) => updateDateRangeFilter('dateRangeStart', d)}
      />
      <DatePicker
        label="end date"
        activeDate={activeDateEnd}
        minimumDate={max([minimumDate, activeDateStart])}
        maximumDate={maximumDate}
        onDateSelect={(d) => updateDateRangeFilter('dateRangeEnd', d)}
      />
    </SafeAreaView>
  );
};

DateRangePicker.propTypes = {
  timelineProps: shape({
    minimumDate: string.isRequired,
    maximumDate: string.isRequired,
  }).isRequired,
  dateRangeFilter: shape({
    // dateRangeStart: string.isRequired,
    // dateRangeEnd: string.isRequired,
  }).isRequired,
  updateDateRangeFilter: func.isRequired,
};

const mapStateToProps = (state) => ({
  timelineProps: timelinePropsSelector(state),
  dateRangeFilter: dateRangeFilterFiltersSelector(state),
});

const mapDispatchToProps = {
  updateDateRangeFilter: (fieldKey, date) => ({
    type: actionTypes.UPDATE_DATE_RANGE_FILTER,
    payload: { [fieldKey]: date },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePicker);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 0,
  },
  picker: {
  },
});
