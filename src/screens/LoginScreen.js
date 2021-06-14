import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { func } from 'prop-types';

import Login from '../components/Login';
import Colors from '../constants/Colors';
import ResetAsyncStorageButton from '../storage/ResetAsyncStorageButton';
import FullLogo from '../../assets/images/logos/basic-logo-transparent-fill.svg';
import S4SLogo from '../../assets/images/logos/s4s-logo.png';
import ResponsiveDimensions from '../constants/ResponsiveDimensions';
import vermonsterLogo from '../../assets/images/logos/vermonster-logo.png';
import harvardLogo from '../../assets/images/logos/harvard-dbmi-logo.png';
import TextStyles from '../constants/TextStyles';

const LoginScreen = ({ handleOnboardingState }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.s4sLogo}
          source={S4SLogo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.logoContainer}>
        <FullLogo height={100} width={300} fill="black" />
      </View>
    </View>
    <View>
      <Login />
      <TouchableOpacity onPress={() => handleOnboardingState(false)}>
        <Text style={[styles.baseText, styles.logoBlue]}>Repeat Onboarding</Text>
      </TouchableOpacity>
      <ResetAsyncStorageButton />
    </View>
    <View style={styles.companyLogosContainer}>
      <Text style={styles.powered}>Powered By</Text>
      <Image
        style={styles.harvard}
        source={harvardLogo}
        resizeMode="contain"
      />
      <Image
        style={styles.vermonster}
        source={vermonsterLogo}
        resizeMode="contain"
      />
    </View>
  </SafeAreaView>
);

LoginScreen.propTypes = {
  handleOnboardingState: func.isRequired,
};

export default LoginScreen;

const {
  rd4, rd7, rd8,
} = ResponsiveDimensions;
const { body1 } = TextStyles;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    padding: 10,
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
  s4sLogo: {
    height: '100%',
  },
  companyLogosContainer: {
    width: '100%',
    alignItems: 'center',
    // marginBottom: rd8,
  },
  vermonster: {
    height: rd7,
  },
  harvard: {
    height: rd8,
    marginBottom: rd4,
  },
  baseText: {
    ...body1,
  },
  logoBlue: {
    color: Colors.logoBlue,
  },
});
