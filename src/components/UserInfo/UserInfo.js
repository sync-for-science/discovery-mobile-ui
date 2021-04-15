import React from 'react';
import { instanceOf, shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { format } from 'date-fns';

import {
  getPatientName,
} from '../../resources/fhirReader';
import { patientSelector, dateRangeForAllRecordsSelector } from '../../redux/selectors';

const UI_DATE_FORMAT = 'MMM d, Y';

const formatDate = (d) => format(d, UI_DATE_FORMAT);

const UserInfo = ({
  patientResource, timelineProps,
}) => {
  const name = getPatientName(patientResource);
  const { minimumDate, maximumDate } = timelineProps;
  const dateRangeLabel = !(minimumDate && maximumDate) ? '' : 'Data range';
  const dateRange = !(minimumDate && maximumDate) ? '' : `${formatDate(minimumDate)} - ${formatDate(maximumDate)}`;

  return (
    <View>
      <View style={styles.userContainer}>
        <Ionicons name="person-circle-outline" size={40} color="black" />
        <Text style={styles.userName}>
          {name}
        </Text>
      </View>
      <View style={styles.dataRange}>
        <Text style={styles.dataRangeLabel}>{dateRangeLabel}</Text>
        <Text style={styles.dataRangeValue}>
          {dateRange}
        </Text>
      </View>
    </View>
  );
};

UserInfo.propTypes = {
  patientResource: shape({}),
  timelineProps: shape({
    minimumDate: instanceOf(Date),
    maximumDate: instanceOf(Date),
  }).isRequired,
};

UserInfo.defaultProps = {
  patientResource: null,
};

const mapStateToProps = (state) => ({
  patientResource: patientSelector(state),
  timelineProps: dateRangeForAllRecordsSelector(state),
});

export default connect(mapStateToProps, null)(UserInfo);

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    textAlign: 'center',
    padding: 15,
    paddingTop: 20,
  },
  userIcon: {
  },
  dataRange: {
    flexDirection: 'row',
  },
  dataRangeLabel: {
    textTransform: 'uppercase',
    color: 'grey',
    padding: 10,
  },
  dataRangeValue: {
    padding: 10,
  },
});
