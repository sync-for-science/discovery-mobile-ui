import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import {getResources, getPatient, getPatientAge, getResourceText} from '../../../resources/fhirReader'
import CardBodyField from './CardBodyField'
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel'

const GenericCardBody = ({resource, patientData}) => {
  const resources = getResources(patientData)
  const patient = getPatient(resources);
  const patientAge = getPatientAge(patient)
  const cardDisplay = getResourceText(resource)

  return (
    <View>
      <CardBodyField 
        dependency={patientAge}
        label={CARD_BODY_LABEL.age}
        value={patientAge}
      />
      <CardBodyField
        dependency={cardDisplay}
        label={CARD_BODY_LABEL.conditions}
        value={cardDisplay}
        bold
      />
    </View>
  )
}

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

export default connect(mapStateToProps, null)(GenericCardBody);

const styles = StyleSheet.create({})
