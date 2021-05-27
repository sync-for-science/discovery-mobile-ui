import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from 'react-native';
import * as Linking from 'expo-linking';

import Login from '../components/Login';
import Colors from '../constants/Colors';
import ResetAsyncStorageButton from '../storage/ResetAsyncStorageButton';
import TextStyles from '../constants/TextStyles';

const LoginScreen = ({ handleOnboardingState }) => {
  const { h6 } = TextStyles;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <View style={styles.screen}>
        <View style={styles.logoContainer}>
          <DiscoveryLogo height={75} width={300} fill="black" />
        </View>
        <Login />
        <ResetAsyncStorageButton />
        {__DEV__
        && (
        <View style={styles.resetOnboardingContainer}>
          <TouchableOpacity onPress={() => handleOnboardingState(false)}>
            <Text style={[h6, { color: Colors.primary }]}>Reset Onboarding</Text>
          </TouchableOpacity>

        </View>
        )}
      </View>
      <View style={styles.vermonsterContainer}>
        <Text style={styles.companyText}>Powered by</Text>
        <Text style={styles.companyText} onPress={() => Linking.openURL('http://vermonster.com')}>Vermonster LLC</Text>
        <Text style={styles.companyText} onPress={() => Linking.openURL('https://fire.ly')}>Firely BV</Text>
      </View>
    </SafeAreaView>
  );
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
  activityIndicator: {
    width: '100%',
    alignItems: 'center',
  },
  resetOnboardingContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  resetOnboardingButton: {
    color: Colors.primary,
  },
});
