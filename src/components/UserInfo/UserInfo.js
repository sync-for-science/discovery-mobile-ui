import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, SectionList,
} from 'react-native';

import {
  getResources,
  getPatient,
  getPatientName,
  getDataRange,
} from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';
import { clearPatientData } from '../../features/patient/patientDataSlice';

const UserInfo = ({
  patientData,
}) => {
  const resources = patientData ? getResources(patientData) : getResources(mockBundle);

  const patient = getPatient(resources);
  const name = getPatientName(patient);
  const [dataStart, dataEnd] = getDataRange(resources);

  return (
    <View>
      <Text style={styles.userName}>
        {name}
      </Text>
      <View style={styles.dataRange}>
        <Text style={styles.dataRangeLabel}>Data range</Text>
        <Text style={styles.dataRangeValue}>
          {dataStart}
          {' '}
          -
          {' '}
          {dataEnd}
        </Text>
      </View>
    </View>
  );
};

UserInfo.propTypes = {
  patientData: shape({}),
};

UserInfo.defaultProps = {
  patientData: null,
};

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

const mapDispatchToProps = { clearPatientDataAction: clearPatientData };

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

const styles = StyleSheet.create({
  userName: {
    fontSize: 24,
    textAlign: 'center',
    padding: 20,
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
