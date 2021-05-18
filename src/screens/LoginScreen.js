import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { H2, Text } from 'native-base';
import * as Linking from 'expo-linking';
import { useDispatch } from 'react-redux';

import Login from '../components/Login';
import s4sLogo from '../../assets/images/s4s-logo.png';
import Colors from '../constants/Colors';
import { actionTypes } from '../redux/action-types';
import TextStyles from '../constants/TextStyles';

const LoginScreen = () => {
  const { h6 } = TextStyles;
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <View
        style={styles.screen}
      >
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
        {__DEV__
        && (
        <View style={styles.resetOnboardingContainer}>
          <TouchableOpacity onPress={() => dispatch({ type: actionTypes.RESET_ONBOARDING })}>
            <Text style={[h6, styles.resetOnboardingButton]}>Reset Onboarding</Text>
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
  },
  discoveryContainer: {
    justifyContent: 'space-between',
  },
  slogo: {
    height: 70,
    marginVertical: 32,
  },
  logoContainer: {
    marginTop: 32,
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
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyText: {
    color: Colors.lightgrey,
    paddingBottom: 5,
  },
  resetOnboardingContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  resetOnboardingButton: {
    color: Colors.primary,
  },
});
