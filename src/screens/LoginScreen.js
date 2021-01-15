import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import Login from '../components/Login/Login';
import s4sLogo from '../../assets/images/s4s-logo.png';
import Colors from '../constants/Colors';

const LoginScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <View
      contentInsetAdjustmentBehavior="automatic"
      style={styles.screen}
    >
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.slogo}
            source={s4sLogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.description}>
          <Text>Discovery Mobile App</Text>
          <Text>Beta</Text>
        </View>
        <Login navigation={navigation} />
      </View>

      <View style={styles.vermontContainer}>
        <Text style={styles.vermonsterText}>Powered by</Text>
        <Text style={styles.vermonsterText}>Vermonster LLC</Text>
      </View>
    </View>
  </SafeAreaView>
);

LoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  vlogo: {
    height: 50,
    width: '60%',
  },
  slogo: {
    height: 50,
    width: '60%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  description: {
    alignItems: 'center',
  },
  vermontContainer: {
    alignItems: 'center',
  },
  vermonsterText: {
    color: Colors.lightgrey,
    paddingBottom: 5,
  },
});
