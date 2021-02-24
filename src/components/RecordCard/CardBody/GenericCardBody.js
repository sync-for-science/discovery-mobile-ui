import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import {
  getResources, 
  getPatient, 
  getPatientAge, 
  getResourceText, 
  getOnsetDateTime,
  getAbatementDateTime
} from '../../../resources/fhirReader'
import CardBodyField from './CardBodyField'
import CARD_BODY_LABEL from '../../../resources/cardBodyLabel'

const GenericCardBody = ({resource, patientData}) => {
  console.log('resource', resource)
  const resources = getResources(patientData)
  const patient = getPatient(resources);

  return (
    <View>
      <CardBodyField 
        dependency={getPatientAge(patient)}
        label={CARD_BODY_LABEL.age}
        value={getPatientAge(patient)}
      />
      <CardBodyField
        dependency={getResourceText(resource)}
        label={CARD_BODY_LABEL.conditions}
        value={getResourceText(resource)}
        bold
      />
      {/* <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.reason}
        value={null}
      /> */}
      <CardBodyField
        dependency={getOnsetDateTime(resource)}
        label={CARD_BODY_LABEL.onset}
        value={getOnsetDateTime(resource)}
      />
      <CardBodyField
        dependency={getAbatementDateTime(resource)}
        label={CARD_BODY_LABEL.abatement}
        value={getAbatementDateTime(resource)}
      />
      {/* <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.orderedBy}
        value={null}
      /> */}
    </View>
  )
}

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

export default connect(mapStateToProps, null)(GenericCardBody);

const styles = StyleSheet.create({})
