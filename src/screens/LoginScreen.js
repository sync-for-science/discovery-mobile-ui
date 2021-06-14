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
  <SafeAreaView style={styles.root}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.screen}>
      <View style={styles.topScreen}>
        <Image
          style={styles.s4sLogo}
          source={S4SLogo}
          resizeMode="contain"
        />
        <View style={styles.fullLogoContainer}>
          <FullLogo height={100} width={300} fill="black" />
        </View>
      </View>
      <View style={styles.midScreen}>
        <Login />
        <View style={styles.reduxButtons}>
          <TouchableOpacity onPress={() => handleOnboardingState(false)}>
            <Text style={[styles.baseText, styles.logoBlue]}>Repeat Onboarding</Text>
          </TouchableOpacity>
          <View style={styles.resetStorageContainer}>
            <ResetAsyncStorageButton />
          </View>
        </View>
      </View>
      <View style={styles.bottomScreen}>
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
    </View>
  </SafeAreaView>
);

LoginScreen.propTypes = {
  handleOnboardingState: func.isRequired,
};

export default LoginScreen;

const {
  rd2, rd4, rd6, rd7, rd8,
} = ResponsiveDimensions;
const { body1 } = TextStyles;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    paddingHorizontal: rd4,
    justifyContent: 'space-between',
  },
  s4sLogo: {
    height: 60,
    width: '55%',
  },
  vermonster: {
    height: rd7,
  },
  harvard: {
    height: rd8,
  },
  baseText: {
    ...body1,
  },
  logoBlue: {
    color: Colors.logoBlue,
  },
  topScreen: {
    alignItems: 'center',
    marginTop: rd6,
  },
  bottomScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    marginTop: 40,
    marginBottom: rd8,
  },
  fullLogoContainer: {
    marginTop: rd6,
  },
  reduxButtons: {
    marginTop: rd4,
    alignItems: 'flex-start',
  },
  resetStorageContainer: {
    marginTop: rd2,
  },
});
