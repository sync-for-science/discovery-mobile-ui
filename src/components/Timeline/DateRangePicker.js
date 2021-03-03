import React from 'react';
import { func, instanceOf, shape } from 'prop-types';
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
    minimumDate: instanceOf(Date),
    maximumDate: instanceOf(Date),
  }).isRequired,
  dateRangeFilter: shape({
    dateRangeStart: instanceOf(Date),
    dateRangeEnd: instanceOf(Date),
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  picker: {
  },
});
