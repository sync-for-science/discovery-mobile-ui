import React, { Suspense } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
} from 'react-native';

import LoadingIndicator from '../components/LoadingIndicator';
import Login from '../components/Login';
import Colors from '../constants/Colors';
import ResetAsyncStorageButton from '../storage/ResetAsyncStorageButton';
import FullLogo from '../../assets/images/logos/full-logo-transparent-fill.svg';
import ResponsiveDimensions from '../constants/ResponsiveDimensions';
import vermonsterLogo from '../../assets/images/logos/vermonster-logo.png';
import harvardLogo from '../../assets/images/logos/harvard-dbmi-logo.png';
import TextStyles from '../constants/TextStyles';

const LoginScreen = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View style={styles.screen}>
      <View style={styles.topScreen}>
        <View style={styles.fullLogoContainer}>
          <FullLogo height={140} width={300} fill="black" />
        </View>
      </View>
      <View style={styles.midScreen}>
        <Suspense fallback={(<LoadingIndicator />)}>
          <Login />
        </Suspense>
        <View style={styles.reduxButtons}>
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
};

export default LoginScreen;

const {
  rd2, rd4, rd6, rd7, rd8,
} = ResponsiveDimensions;
const { body1, h5 } = TextStyles;

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
    marginBottom: rd6,
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
  powered: {
    ...h5,
    color: Colors.darkgrey,
    fontWeight: '300',
  },
});
