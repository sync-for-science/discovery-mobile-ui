import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, View, ScrollView, SafeAreaView, StatusBar, Button,
} from 'react-native';

import Colors from '../constants/Colors';
import { clearAuth } from '../features/auth/authSlice';
import { clearPatientData } from '../features/patient/patientDataSlice';
import Demographics from '../components/Demographics/Demographics';
import UserInfo from '../components/UserInfo/UserInfo';
import RecordsSummary from '../components/RecordsSummary/RecordsSummary';

const SummaryScreen = ({
  navigation, clearAuthAction, clearPatientDataAction,
}) => {
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
          <UserInfo />
        </View>
        <Demographics />
        <RecordsSummary />
        <Button title="Logout" onPress={handleLogout} />
      </ScrollView>
    </SafeAreaView>
  );
};

SummaryScreen.propTypes = {
  navigation: shape({}).isRequired,
  clearAuthAction: func.isRequired,
  clearPatientDataAction: func.isRequired,
};

SummaryScreen.defaultProps = {
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
});
