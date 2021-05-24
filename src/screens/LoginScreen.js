import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
} from 'react-native';
import { H2, Text } from 'native-base';
import * as Linking from 'expo-linking';

import Login from '../components/Login';
import s4sLogo from '../../assets/images/s4s-logo.png';
import Colors from '../constants/Colors';
import OnboardingCompleteButton from '../components/Onboarding/OnboardingCompleteButton';

const LoginScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.slogo}
          source={s4sLogo}
          resizeMode="contain"
        />
        <View style={styles.descriptionContainer}>
          <H2 style={styles.descriptionText}>Discovery Mobile</H2>
        </View>
      </View>
      <Login />
      <OnboardingCompleteButton />
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
  slogo: {
    height: 70,
    marginVertical: 16,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    alignItems: 'center',
  },
  descriptionText: {
    fontWeight: '200',
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
