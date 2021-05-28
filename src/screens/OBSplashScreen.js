import React, { useEffect, useRef } from 'react';
import {
  StyleSheet, Text, View, Image, SafeAreaView, Animated,
} from 'react-native';

import { node, shape } from 'prop-types';
import TextStyles from '../constants/TextStyles';
import Colors from '../constants/Colors';
import vermonsterLogo from '../../assets/images/logos/vermonster-logo.png';
import harvardLogo from '../../assets/images/logos/harvard-dbmi-logo.png';
import LogoFull from '../../assets/images/logos/full-logo-transparent-fill.svg';

const FadeInView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      },
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.animatedView, { opacity: fadeAnim }]}>
      {children}
    </Animated.View>
  );
};

FadeInView.propTypes = {
  children: node.isRequired,
};

const OBScreenSplash = ({ navigation }) => {
  const {
    h5, mb4,
  } = TextStyles;

  useEffect(() => {
    setTimeout(() => navigation.navigate('Walkthrough'), 3000);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <FadeInView>
        <View style={styles.logoContainer}>
          <LogoFull height={280} width={280} />
        </View>
        <View style={styles.companyLogosContainer}>
          <Text style={[h5, mb4, styles.powered]}>Powered By</Text>
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
      </FadeInView>
    </SafeAreaView>
  );
};

OBScreenSplash.propTypes = {
  navigation: shape({}).isRequired,
};

export default OBScreenSplash;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  companyLogosContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  vermonster: {
    height: 30,
  },
  harvard: {
    height: 40,
    marginBottom: 16,
  },
  animatedView: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  powered: {
    color: Colors.darkgrey,
  },
});
