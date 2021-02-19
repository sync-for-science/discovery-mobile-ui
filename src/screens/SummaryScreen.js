import React from 'react';
import {
  func, shape, string,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Button,
} from 'react-native';

import Colors from '../constants/Colors';
import { clearAuth } from '../features/auth/authSlice';
import { clearPatientData } from '../features/patient/patientDataSlice';
import mockResponse from '../../assets/mock_data/patient/blake-eichmann/mockResponse';

const ResourceTypeRow = ({ resourceType, response }) => {
  if (resourceType === 'Patient') {
    return null;
  }
  const resourceCount = response?.length;
  return (
    <View style={styles.resourceTypeRow}>
      <Text>{resourceType}</Text>
      <Text>{resourceCount}</Text>
    </View>
  );
};

ResourceTypeRow.propTypes = {
  resourceType: string.isRequired,
  response: shape({}).isRequired,
};

const SummaryScreen = ({
  navigation, patientData, clearAuthAction, clearPatientDataAction,
}) => {
  console.log('Patient Data: ', patientData);
  // const patientName = `${patientData?.name[0].given} ${patientData?.name[0].family}`;

  // const displayPatient = patientData
  //   ? `Welcome ${patientName}`
  //   : 'No Patient Data Available';

  // mockResponse - Delete with response normalization is complete
  const patientNameResponse = mockResponse.Patient.name[0];
  const patientNameDisplay = `${patientNameResponse.given[0]} ${patientNameResponse.family}`;

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
            {patientNameDisplay}
          </Text>
        </View>
        <View style={styles.resourceTypeContainer}>
          {Object.keys(mockResponse).map(
            (resourceType) => (
              <ResourceTypeRow
                key={`resourceTypeRow-${resourceType}`}
                resourceType={resourceType}
                response={mockResponse[resourceType]}
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
