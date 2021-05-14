import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import OBNavigation from './OBNavigation';

// wireframe page 3
const OBScreenWelcome = () => {
  const {
    h1, h2, h4, h5, alignCenter, italic,
  } = TextStyles;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <View style={styles.contentContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={h1}>Welcome to Discovery</Text>
            <View style={styles.logoContainer}>
              <Text style={[h2, alignCenter, italic, styles.tempLogoText]}>LOGO HERE</Text>
            </View>
            <Text style={[h4, alignCenter]}>
              Use Discovery to explore your personal medical data
            </Text>
          </View>
          <View style={styles.singleWordsContainer}>
            <Text style={h5}>ACCESS</Text>
            <Text style={h5}>ORGANIZE</Text>
            <Text style={h5}>EXPLORE</Text>
            <Text style={h5}>USE</Text>
          </View>
        </View>
        <OBNavigation nextScreen="Security" firstScreen />
      </View>
    </SafeAreaView>
  );
};

export default OBScreenWelcome;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  root: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    marginVertical: 60,
  },
  logoContainer: {
    height: 100,
    width: 100,
    backgroundColor: Colors.mediumgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempLogoText: {
    color: Colors.lightgrey,
  },
  navigationContainer: {
    alignItems: 'center',
  },
  singleWordsContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  descriptionContainer: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
