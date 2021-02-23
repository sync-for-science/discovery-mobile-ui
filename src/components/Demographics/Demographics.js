import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, SectionList, SafeAreaView,
} from 'react-native';

import {
  getResources,
  getPatient,
  getPatientGender,
  getPatientBirthDate,
  getPatientAge,
  getPatientAddresses,
  renderAddress
} from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';
import { clearPatient } from '../../features/patient/patientDataSlice';

const Demographics = ({
  navigation, patientData, clearAuthAction, clearPatientAction,
}) => {
  const resources = patientData ? getResources(patientData) : getResources(mockBundle);

  const patient = getPatient(resources);
  const birthDate = getPatientBirthDate(patient);
  const age = getPatientAge(patient);
  const gender = getPatientGender(patient);
  // console.log(getPatientGender(patient));
  console.log(getPatientAddresses(patient));
  const address = renderAddress(getPatientAddresses(patient));

  const DATA = [
    {
      title: 'Birth date',
      data: [birthDate],
    },
    {
      title: 'Age',
      data: [age],
    },
    {
      title: 'Gender',
      data: [gender],
    },
    {
      title: 'Address',
      data: [address],
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.demographicsRow} >
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.demographicsContainer}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title.toUpperCase()}</Text>
        )}
      />
    </SafeAreaView>
  );
};

Demographics.propTypes = {
  navigation: shape({}).isRequired,
  patientData: shape({}),
  clearPatientAction: func.isRequired,
};

Demographics.defaultProps = {
  patientData: null,
};

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

const mapDispatchToProps = { clearPatientAction: clearPatient };

export default connect(mapStateToProps, mapDispatchToProps)(Demographics);

const styles = StyleSheet.create({
  demographicsContainer: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  demographicsRow: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 3,
    marginVertical: 10,
    justifyContent: 'left',
    // alignItems: 'center',
  },
});
