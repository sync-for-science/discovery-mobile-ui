import React from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar,
} from 'react-native';

const SummaryScreen = ({ patient }) => {
  const patientName = `${patient?.name[0].given} ${patient?.name[0].family}`;

  const displayPatient = patient
    ? `Welcome ${patientName}`
    : 'No Patient Data Available';

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.screen}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.welcome}>
            {displayPatient}
          </Text>
        </View>
        {patient
      && (
      <View style={styles.section}>
        <Text style={styles.title}>Patient Data</Text>
        <ScrollView
          style={styles.scrollViewInternal}
          nestedScrollEnabled
        >
          <Text>{JSON.stringify(patient, null, 2)}</Text>
        </ScrollView>
      </View>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

SummaryScreen.propTypes = {
  patient: shape({}),
};

SummaryScreen.defaultProps = {
  patient: null,
};

const mapPropsToState = (state) => ({
  patient: state.patient.patient,
});

export default connect(mapPropsToState, null)(SummaryScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    paddingTop: 50,
  },
});
