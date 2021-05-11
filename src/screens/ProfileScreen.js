import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, SafeAreaView, StatusBar, BackHandler, Button,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

import Colors from '../constants/Colors';
import { clearAuth } from '../features/auth/authSlice';
import { actionTypes } from '../redux/action-types';
import UserInfo from '../components/Profile/UserInfo';
import Demographics from '../components/Profile/Demographics';

const ProfileScreen = ({
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
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <UserInfo />
      <ScrollView style={styles.scrollContainer}>
        <Demographics />
      </ScrollView>
      <Button title="Logout" onPress={clearData} />
    </SafeAreaView>
  );
};

ProfileScreen.propTypes = {
  clearAuthAction: func.isRequired,
  clearPatientDataAction: func.isRequired,
};

const mapDispatchToProps = {
  clearAuthAction: clearAuth,
  clearPatientDataAction: () => ({
    type: actionTypes.CLEAR_PATIENT_DATA,
  }),
};

export default connect(null, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
});
