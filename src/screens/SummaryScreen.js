import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, SafeAreaView, StatusBar, Button, BackHandler,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

import Colors from '../constants/Colors';
import { clearAuth } from '../features/auth/authSlice';
import { actionTypes } from '../redux/action-types';
import RecordsSummary from '../components/RecordsSummary/RecordsSummary';
import ProvidersSummary from '../components/ProvidersSummary/ProvidersSummary';

const SummaryScreen = ({
  clearAuthAction, clearPatientDataAction,
}) => {
  const clearData = () => {
    clearAuthAction();
    clearPatientDataAction();
  };

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', clearData);

      return () => BackHandler.removeEventListener('hardwareBackPress', clearData);
    }, []),
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <ScrollView style={styles.screen}>
        <RecordsSummary />
        <ProvidersSummary />
        <Button title="Logout" onPress={clearData} />
      </ScrollView>
    </SafeAreaView>
  );
};

SummaryScreen.propTypes = {
  clearAuthAction: func.isRequired,
  clearPatientDataAction: func.isRequired,
};

const mapDispatchToProps = {
  clearAuthAction: clearAuth,
  clearPatientDataAction: () => ({
    type: actionTypes.CLEAR_PATIENT_DATA,
  }),
};

export default connect(null, mapDispatchToProps)(SummaryScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
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
