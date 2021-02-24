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
    <View style={styles.UserInfoContainer}>
      <Text style={styles.welcome}>
        {name}
      </Text>
      <Text>Data range</Text>
      <Text>
        {dataStart}
        {' '}
        -
        {' '}
        {dataEnd}
      </Text>
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
  panelHeader: {
    padding: 5,
    backgroundColor: Colors.secondary,
  },
  panelText: {
    color: 'white',
    fontSize: 16,
    padding: 5,
  },
  UserInfoContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  UserInfoHeader: {
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 12,
    backgroundColor: 'white',
    color: Colors.primary,
  },
  UserInfoRow: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
  },
});
