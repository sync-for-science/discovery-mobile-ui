import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import {
  getPatientName,
  getDataRange,
} from '../../resources/fhirReader';
import { patientSelector } from '../../redux/selectors';
import { clearPatientData } from '../../features/patient/patientDataSlice';

const UserInfo = ({
  patientResource, resources,
}) => {
  const name = getPatientName(patientResource);
  const [dataStart, dataEnd] = getDataRange(resources);

  return (
    <View>
      <View style={styles.userContainer}>
        <Ionicons name="person-circle-outline" size={40} color="black" />
        <Text style={styles.userName}>
          {name}
        </Text>
      </View>
      <View style={styles.dataRange}>
        <Text style={styles.dataRangeLabel}>Data range</Text>
        <Text style={styles.dataRangeValue}>
          {`${dataStart} - ${dataEnd}`}
        </Text>
      </View>
    </View>
  );
};

UserInfo.propTypes = {
  resources: shape({}),
  patientResource: shape({}),
};

UserInfo.defaultProps = {
  resources: null,
  patientResource: null,
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  patientResource: patientSelector(state),
});

const mapDispatchToProps = { clearPatientDataAction: clearPatientData };

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

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
