import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import CardBodyField from '../CardBodyField/CardBodyField'
import {
  // getResources, 
  // getPatient, 
  // getPatientAge, 
  // getResourceText, 
  // getOnsetDateTime,
  // getAbatementDateTime
} from '../../resources/fhirReader'
import CARD_BODY_LABEL from '../../resources/cardBodyLabel'

const GenericCardBody = ({resource}) => {
  const resourceType = resource.resourceType
  const subType = resource.subType

  return (
    <View>
      {/* <CardBodyField 
        dependency={getPatientAge(patient)}
        label={CARD_BODY_LABEL.age}
        value={getPatientAge(patient)}
      /> */}
      <CardBodyField
        dependency={subType}
        label={CARD_BODY_LABEL[resourceType]}
        value={subType}
        bold
      />
      {/* <CardBodyField
        dependency={null}
        label={CARD_BODY_LABEL.reason}
        value={null}
      /> */}
      {/* <CardBodyField
        dependency={getOnsetDateTime(resource)}
        label={CARD_BODY_LABEL.onset}
        value={getOnsetDateTime(resource)}
      />
      <CardBodyField
        dependency={getAbatementDateTime(resource)}
        label={CARD_BODY_LABEL.abatement}
        value={getAbatementDateTime(resource)}
      /> */}
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
