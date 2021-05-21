import React, { useEffect, useRef } from 'react';
import {
  StyleSheet, Text, View, Image, SafeAreaView, Animated,
} from 'react-native';

import { node, shape } from 'prop-types';
import TextStyles from '../../constants/TextStyles';
import discoveryFull from '../../../assets/images/discovery-full-logo.png';
import Colors from '../../constants/Colors';
import vermonsterLogo from '../../../assets/images/vermonster-logo.png';

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
    setTimeout(() => navigation.navigate('Welcome'), 3000);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <FadeInView>
        <Image
          style={styles.discoverylogo}
          source={discoveryFull}
          resizeMode="contain"
        />
        <View style={styles.companyLogosContainer}>
          <Text style={[h5, mb4]}>Powered By</Text>
          <View style={styles.harvard}>
            <Text>Harvard Logo</Text>
          </View>
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
  discoverylogo: {
    flex: 3,
    height: 280,
  },
  companyLogosContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  harvard: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightgrey2,
    marginBottom: 12,
  },
  vermonster: {
    height: 50,
  },
  animatedView: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
});