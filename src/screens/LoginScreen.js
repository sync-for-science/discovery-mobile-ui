import React, { Suspense } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  Text,
  Button
} from 'react-native';
import * as Linking from 'expo-linking';

import Login from '../components/Login';
import Colors from '../constants/Colors';
import OnboardingToggleButton from '../components/Onboarding/OnboardingToggleButton';
import DiscoveryLogo from '../../assets/images/discover-logo.svg';

const LoginScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <DiscoveryLogo height={75} width={300} fill="black" />
      </View>
      <Login />
      <Suspense fallback={<View style={styles.activityIndicator}><ActivityIndicator /></View>}>
        <OnboardingToggleButton />
      </Suspense>
      <Button title="Reset Async Storage" onPress={() => Updates.reloadAsync()} />
      <View style={styles.vermonsterContainer}>
        <Text style={styles.companyText}>Powered by</Text>
        <Text style={styles.companyText} onPress={() => Linking.openURL('http://vermonster.com')}>Vermonster LLC</Text>
        <Text style={styles.companyText} onPress={() => Linking.openURL('https://fire.ly')}>Firely BV</Text>
      </View>
    </View>
  </SafeAreaView>
);

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
});
