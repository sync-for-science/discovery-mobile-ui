import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import {getResources, getPatient, getPatientAge} from '../../../resources/fhirReader'
import CardBodyField from './CardBodyField'

const GenericCardBody = ({resource, patientData}) => {
  const resources = getResources(patientData)
  const patient = getPatient(resources);
  const patientAge = getPatientAge(patient)

  return (
    <View>
      <CardBodyField 
        dependency={patientAge}
        label={"AGE"}
        value={patientAge}
      />
    </View>
  )
}

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

export default connect(mapStateToProps, null)(GenericCardBody);

const styles = StyleSheet.create({})
