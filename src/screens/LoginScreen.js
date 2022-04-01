import React, { Suspense } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
} from 'react-native';
import { useRecoilValue } from 'recoil';

import LoadingIndicator from '../components/LoadingIndicator';
import Login from '../components/Login';
import Colors from '../constants/Colors';
import FullLogo from '../../assets/images/logos/full-logo-transparent-fill.svg';
import ResponsiveDimensions from '../constants/ResponsiveDimensions';
import vermonsterLogo from '../../assets/images/logos/vermonster-logo.png';
import harvardLogo from '../../assets/images/logos/harvard-dbmi-logo.png';
import TextStyles from '../constants/TextStyles';
import LoginButton from '../components/Login/LoginButton';
import ResetAsyncStorageButton from '../components/Login/ResetAsyncStorageButton';
import { baseUrlState } from '../recoil';

const LoginScreen = () => {
  const baseUrl = useRecoilValue(baseUrlState);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <View style={styles.screen}>
        <View style={styles.topScreen}>
          <View style={styles.fullLogoContainer}>
            <FullLogo height={105} width={225} fill="black" />
          </View>
          <Suspense fallback={(<View style={styles.loading}><LoadingIndicator /></View>)}>
            <Login />
          </Suspense>
        </View>
        <View style={styles.midScreen} />
        <View style={styles.bottomScreen}>
          {!!baseUrl && <LoginButton baseUrl={baseUrl} />}
          <ResetAsyncStorageButton />
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
};

LoginScreen.propTypes = {
};

export default LoginScreen;

const {
  rd3, rd4, rd7, rd8,
} = ResponsiveDimensions;
const { body1, h6 } = TextStyles;

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
  topScreen: {
    alignItems: 'center',
    marginTop: rd3,
  },
  fullLogoContainer: {
    marginBottom: rd3,
  },
  midScreen: {
  },
  bottomScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: rd3,
  },
  loading: {
    flex: 1,
    marginTop: 80,
  },
  baseText: {
    ...body1,
  },
  logoBlue: {
    color: Colors.logoBlue,
  },
  powered: {
    marginTop: 20,
    ...h6,
    color: Colors.darkgrey,
    fontWeight: '300',
  },
  harvard: {
    width: '60%',
    height: rd8,
  },
  vermonster: {
    width: '40%',
    height: rd7,
  },
});
