import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, SectionList,
} from 'react-native';

import {
  getResources,
  getPatient,
  getPatientGender,
  getPatientBirthDate,
  getPatientAge,
  getPatientAddresses,
  renderAddress,
} from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';
import { clearPatientData } from '../../features/patient/patientDataSlice';

const Demographics = ({
  patientData,
}) => {
  const resources = patientData ? getResources(patientData) : getResources(mockBundle);

  const patient = getPatient(resources);
  const birthDate = getPatientBirthDate(patient);
  const age = getPatientAge(patient);
  const gender = getPatientGender(patient);
  const address = renderAddress(getPatientAddresses(patient));

  const demographics = [
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

  // eslint-disable-next-line react/prop-types
  const Item = ({ title }) => (
    <View style={styles.demographicsRow}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.demographicsContainer}>
      <View style={styles.panelHeader}>
        <Text style={styles.panelText}>
          Demographics
        </Text>
      </View>
      <SectionList
        sections={demographics}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.demographicsHeader}>{title.toUpperCase()}</Text>
        )}
      />
    </View>
  );
};

Demographics.propTypes = {
  patientData: shape({}),
};

Demographics.defaultProps = {
  patientData: null,
};

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

const mapDispatchToProps = { clearPatientDataAction: clearPatientData };

export default connect(mapStateToProps, mapDispatchToProps)(Demographics);

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
  demographicsContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  demographicsHeader: {
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 12,
    backgroundColor: 'white',
    color: Colors.primary,
  },
  demographicsRow: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
  },
});
