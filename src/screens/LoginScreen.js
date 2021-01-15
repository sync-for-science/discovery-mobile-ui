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
import logo from '../../assets/images/vermonster-logo.png';
import s4sLogo from '../../assets/images/s4s-logo.png';
import Colors from '../constants/Colors';

const LoginScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.slogo}
          source={s4sLogo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.description}>
        <Text>Discovery Mobile App</Text>
      </View>
      <Login navigation={navigation} />
    </ScrollView>
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
  scrollView: {
    flex: 1,
    padding: 20,
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
});
