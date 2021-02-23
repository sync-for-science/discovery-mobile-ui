import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, SectionList, SafeAreaView,
} from 'react-native';

import {
  getResources,
  getPatient,
  getPatientName,
  getPatientBirthDate,
  getPatientAge,
} from '../../resources/fhirReader';
import Colors from '../../constants/Colors';
import mockBundle from '../../../assets/mock_data/bundle-blake-eichmann.json';
import { clearPatient } from '../../features/patient/patientDataSlice';

const Demographics = ({
  navigation, patientData, clearAuthAction, clearPatientAction,
}) => {
  const resources = patientData ? getResources(patientData) : getResources(mockBundle);

  const patent = getPatient(resources);
  const birthDate = getPatientBirthDate(patent);
  const age = getPatientAge(patent);
  console.log(`Birthdate: ${birthDate}`);
  console.log(`Age: ${age}`);

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
      data: ['Female'],
    },
    {
      title: 'Address',
      data: ['432 Gaylord Station Suite 4\nLos Angeles, California 90001\nUS'],
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
