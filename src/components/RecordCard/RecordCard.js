import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux'

import { getResources, getPatient, getPatientName } from '../../resources/fhirReader'

const CatalogScreen = ({patientData}) => {
  const resources = getResources(patientData)
  const patient = getPatient(resources);
  const patientName = getPatientName(patient)


  return (
    <View style={styles.root}>
      <Text>{patientName}</Text>
    </View>
  )
}

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData
})

export default connect(mapStateToProps, null)(CatalogScreen);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 15,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
