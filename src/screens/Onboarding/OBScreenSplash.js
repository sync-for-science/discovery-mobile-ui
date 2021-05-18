import React from 'react';
import {
  StyleSheet, Text, View, Image, SafeAreaView,
} from 'react-native';

import TextStyles from '../../constants/TextStyles';
import discoveryFull from '../../../assets/images/discovery-full-logo.png';
import Colors from '../../constants/Colors';
import vermonsterLogo from '../../../assets/images/vermonster-logo.png';

const OBScreenSplash = () => {
  const {
    h5, mb4,
  } = TextStyles;
  return (
    <SafeAreaView style={styles.root}>
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
    </SafeAreaView>
  );
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
});
