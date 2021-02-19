import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Button,
} from 'react-native';
import * as Linking from 'expo-linking';
import { connect } from 'react-redux';

import Login from '../components/Login/Login';
import { setPatientData, setSkipLogin } from '../features/patient/patientDataSlice';
import s4sLogo from '../../assets/images/s4s-logo.png';
import Colors from '../constants/Colors';

const LoginScreen = ({ navigation, setPatientDataAction, setSkipLoginAction }) => {
  const handleSkipLogin = () => {
    setSkipLoginAction(true);
    navigation.navigate('PostAuth');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <View
        contentInsetAdjustmentBehavior="automatic"
        style={styles.screen}
      >
        <View style={styles.discoveryContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.slogo}
              source={s4sLogo}
              resizeMode="contain"
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>Discovery Mobile</Text>
            </View>
          </View>
          <Login navigation={navigation} />
        </View>
        <View style={styles.vermonsterContainer}>
          <Button title="Skip Login" onPress={handleSkipLogin} />
          <Text style={styles.vermonsterText} onPress={() => Linking.openURL('http://vermonster.com')}>Powered by</Text>
          <Text style={styles.vermonsterText} onPress={() => Linking.openURL('http://vermonster.com')}>Vermonster LLC</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  setPatientDataAction: PropTypes.func.isRequired,
  setSkipLoginAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setPatientDataAction: setPatientData,
  setSkipLoginAction: setSkipLogin,
};

export default connect(null, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    padding: 50,
    justifyContent: 'space-between',
  },
  discoveryContainer: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 160,
  },
  slogo: {
    height: 70,
  },
  logoContainer: {
    alignItems: 'center',
  },
  descriptionContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  descriptionText: {
    fontSize: 24,
    paddingBottom: 20,
    fontWeight: '200',
  },
  vermonsterContainer: {
    alignItems: 'center',
  },
  vermonsterText: {
    color: Colors.lightgrey,
    paddingBottom: 5,
  },
});
