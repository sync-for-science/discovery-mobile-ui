import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  bool, number, string, node,
} from 'prop-types';

import OBHeader from './OBHeader';
import OBNavigation from './OBNavigation';

const OBTemplate = ({
  screenNumber, nextScreen, firstScreen, lastScreen, children,
}) => (
  <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.root}>
      <View style={styles.headerAndContentContainer}>
        {!firstScreen && <OBHeader screenNumber={screenNumber} />}
        {children}
      </View>
      <OBNavigation
        nextScreen={nextScreen}
        firstScreen={firstScreen}
        lastScreen={lastScreen}
      />
    </View>
  </SafeAreaView>
);

OBTemplate.propTypes = {
  screenNumber: number.isRequired,
  nextScreen: string.isRequired,
  firstScreen: bool,
  lastScreen: bool,
  children: node.isRequired,
};

OBTemplate.defaultProps = {
  firstScreen: false,
  lastScreen: false,
};

export default OBTemplate;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  root: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between',
  },
  headerAndContentContainer: {
    flex: 1,
  },
});
