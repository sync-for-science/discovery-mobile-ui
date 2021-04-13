import React from 'react';
import { func, instanceOf, shape } from 'prop-types';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { connect } from 'react-redux';
import {
  min, max, startOfDay, endOfDay,
} from 'date-fns';

import { updateDateRange } from '../../redux/action-creators';
import DatePicker from './DatePicker';
import { timelinePropsSelector, activeCollectionDateRangeFilterSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';

const DateRangePicker = ({ timelineProps, dateRangeFilter, updateDateRangeFilter }) => {
  const { minimumDate, maximumDate } = timelineProps;
  if (!minimumDate || !maximumDate) {
    return null;
  }

  const { dateRangeStart = minimumDate, dateRangeEnd = maximumDate } = dateRangeFilter;

  return (
    <View style={styles.container}>
      <DatePicker
        activeDate={dateRangeStart}
        minimumDate={minimumDate}
        maximumDate={min([maximumDate, dateRangeEnd])}
        onDateSelect={(d) => updateDateRangeFilter('dateRangeStart', startOfDay(d))}
      />
      <View><Text style={styles.dash}>-</Text></View>
      <DatePicker
        activeDate={dateRangeEnd}
        minimumDate={max([minimumDate, dateRangeStart])}
        maximumDate={maximumDate}
        onDateSelect={(d) => updateDateRangeFilter('dateRangeEnd', endOfDay(d))}
      />
    </View>
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
  dateRangeFilter: activeCollectionDateRangeFilterSelector(state),
});

const mapDispatchToProps = {
  updateDateRangeFilter: updateDateRange,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePicker);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dash: {
    fontSize: 30,
    color: Colors.dash,
  },
});
