import React from 'react';
import { shape } from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StatusBar,
  Platform,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Login from '../components/Login/Login';
import logo from '../../assets/images/vermonster-logo.png';
import counterSlice from '../../Slice';

const LoginScreen = (props) => {
  const { navigation } = props;

  const { actions } = counterSlice;
  const { increment, decrement } = actions;

  const count = useSelector((state) => {
    console.log('useSelector state', state);
    return state;
  });

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.vlogo}
            source={logo}
            resizeMode="contain"
          />
          <Image
            style={styles.slogo}
            source={{ uri: 'http://syncfor.science/s4s-logo.png' }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.description}>
          <Text>Discovery Mobile App</Text>
        </View>
        <Login navigation={navigation} />
        <Button
          title="Skip Login"
          onPress={() => navigation.navigate('PostAuth')}
        />
      </ScrollView>
      <Text>
        Count:
        {' '}
        {count}
      </Text>
      <Button title="Increment Count" onPress={() => dispatch(increment())} />
      <Button title="Reduce Count" onPress={() => dispatch(decrement())} />
    </SafeAreaView>
  );
};

LoginScreen.propTypes = {
  navigation: shape({}).isRequired,
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
