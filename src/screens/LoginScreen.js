import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Button,
} from 'react-native';
import * as Linking from 'expo-linking';
import { func } from 'prop-types';

import Login from '../components/Login';
import Colors from '../constants/Colors';
import ResetAsyncStorageButton from '../storage/ResetAsyncStorageButton';

const LoginScreen = ({ handleOnboardingState }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <View style={styles.screen}>
        <View style={styles.logoContainer}>
          <DiscoveryLogo height={75} width={300} fill="black" />
        </View>
      </View>
      <View>
        <Login />
        <Button title="Reset Onboarding" color="red" onPress={() => handleOnboardingState(false)} />
        <ResetAsyncStorageButton />
      </View>
      <View style={styles.vermonsterContainer}>
        <Text style={styles.companyText}>Powered by</Text>
        <Text style={styles.companyText} onPress={() => Linking.openURL('http://vermonster.com')}>Vermonster LLC</Text>
        <Text style={styles.companyText} onPress={() => Linking.openURL('https://fire.ly')}>Firely BV</Text>
      </View>
    </SafeAreaView>
  )
}

LoginScreen.propTypes = {
  handleOnboardingState: func.isRequired,
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    marginTop: 40,
  },
  vermonsterContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyText: {
    color: Colors.lightgrey,
    paddingBottom: 5,
  },
});
