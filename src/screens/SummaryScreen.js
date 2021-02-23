import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Button,
} from 'react-native';

import Colors from '../constants/Colors';
import {
  getResources,
  getPatient,
  getPatientName,
  getResourceType,
  getResourceCount,
  getResourceCode,
} from '../resources/fhirReader';
import { clearAuth } from '../features/auth/authSlice';
import { clearPatientData } from '../features/patient/patientDataSlice';
import Demographics from '../components/Demographics/Demographics';
import mockBundle from '../../assets/mock_data/bundle-blake-eichmann.json';
import RESOURCE_TYPES from '../resources/resourceTypes';

const ResourceTypeRow = ({ resource }) => {
  const resourceCount = getResourceCount(resource);
  if (!resourceCount > 0) {
    return null;
  }

  let resourceType = getResourceType(resource);
  if (resourceType === 'Observation') {
    resourceType = getResourceCode(resource);
  }

  return (
    <View style={styles.resourceTypeRow}>
      <Text>{RESOURCE_TYPES[resourceType]}</Text>
      <Text>{resourceCount}</Text>
    </View>
  );
};

ResourceTypeRow.propTypes = {
  resource: shape({}).isRequired,
};

const SummaryScreen = ({
  navigation, patientData, clearAuthAction, clearPatientDataAction,
}) => {
  const resources = patientData ? getResources(patientData) : getResources(mockBundle);

  const patent = getPatient(resources);
  const patientName = getPatientName(patent);

  const handleLogout = () => {
    clearAuthAction();
    clearPatientDataAction();
    navigation.navigate('PreAuth');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <ScrollView style={styles.screen}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.welcome}>
            {patientName}
          </Text>
        </View>
        <Demographics />
        <View style={styles.resourceTypeContainer}>
          {resources.map(
            (resource) => (
              <ResourceTypeRow
                key={`resourceTypeRow-${resource.resource.id}`}
                resource={resource}
              />
            ),
          )}
        </View>
        <Button title="Logout" onPress={handleLogout} />
      </ScrollView>
    </SafeAreaView>
  );
};

SummaryScreen.propTypes = {
  navigation: shape({}).isRequired,
  patientData: shape({}),
  clearAuthAction: func.isRequired,
  clearPatientDataAction: func.isRequired,
};

SummaryScreen.defaultProps = {
  patientData: null,
};

const mapStateToProps = (state) => ({
  patientData: state.patient.patientData,
});

const mapDispatchToProps = { clearAuthAction: clearAuth, clearPatientDataAction: clearPatientData };

export default connect(mapStateToProps, mapDispatchToProps)(SummaryScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    overflow: 'scroll',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  scrollViewInternal: {
    height: 500,
    padding: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 25,
  },
  resourceTypeRow: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  resourceTypeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
