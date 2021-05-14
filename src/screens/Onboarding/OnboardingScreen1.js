import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

import { shape } from 'prop-types';
import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';

const OnboardingScreen1 = ({ navigation }) => {
  const {
    h1, h2, h3, h4, h5, alignCenter, italic,
  } = TextStyles;
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={h1}>Welcome to Discovery</Text>
          <View style={styles.logoContainer}>
            <Text style={[h2, alignCenter, italic, styles.tempLogoText]}>LOGO HERE</Text>
          </View>
          <Text style={[h4, alignCenter]}>Use Discovery to explore your personal medical data</Text>
        </View>
        <View style={styles.singleWordsContainer}>
          <Text style={h5}>ACCESS</Text>
          <Text style={h5}>ORGANIZE</Text>
          <Text style={h5}>EXPLORE</Text>
          <Text style={h5}>USE</Text>
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('OnboardingScreen2')}>
          <Text style={[h3, { color: Colors.primary }]}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

OnboardingScreen1.propTypes = {
  navigation: shape({}).isRequired,
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 60,
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
