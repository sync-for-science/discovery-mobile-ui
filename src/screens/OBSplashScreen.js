import React, { useEffect, useRef } from 'react';
import {
  StyleSheet, Text, View, Image, SafeAreaView, Animated
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { node, shape } from 'prop-types';

import TextStyles from '../constants/TextStyles';
import ResponsiveDimensions from '../constants/ResponsiveDimensions'
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
        <View style={styles.fadeIntoView}>
          <View style={styles.logoContainer}>
            <LogoFull height={hp('21%')} width={hp('21%')} />
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
        </View>
      </FadeInView>
    </SafeAreaView>
  );
};

OBScreenSplash.propTypes = {
  navigation: shape({}).isRequired,
};

export default OBScreenSplash;

const { rd5 } = ResponsiveDimensions

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  fadeIntoView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logoContainer: {
    paddingTop: hp('16%'),
  },
  companyLogosContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: rd5
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
