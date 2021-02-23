import React, {useState} from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux'

import RecordCard from './RecordCard';
import { getResourceCode, getResources, getResourceType } from '../../resources/fhirReader'


// temp, replace once data model is complete
const formatResources = (resources) => {
  const formattedResources = {}
  resources.forEach(resource => {
    let  resourceType = getResourceType(resource)
    if (!resourceType || resourceType === "Patient") {
      return null
    } else if (resourceType === "Observation") {
      resourceType = getResourceCode(resource)
    }
    formattedResources[resourceType] = resource.resource.entry
  })
  return formattedResources
}

const CatalogScreen = ({patientData}) => {
  const resources = getResources(patientData)
  const formattedResources = formatResources(resources)
  const [currentCategory, setCurrentCategory] = useState(Object.keys(formattedResources)[0])

  return (
  <View style={styles.root}>
    <Text>RecordCards Container</Text>
    <View style={styles.container}>
      {formattedResources[currentCategory].map(
        resource => <RecordCard key={resource.resource.id} resource={resource} />
      )}
    </View>
  </View>
)};

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData
})

export default connect(mapStateToProps, null)(CatalogScreen);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 10,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
});
