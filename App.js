import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import DemoLogin from './src/components/Login/DemoLogin';
import logo from './assets/images/vermonster-logo.png';

export default function App() {
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
        <DemoLogin />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    height: '100%',
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
