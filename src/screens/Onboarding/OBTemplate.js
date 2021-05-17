import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  number, string, node,
} from 'prop-types';

import OBHeader from './OBHeader';
import OBNavigation from './OBNavigation';

const TOTAL_SCREEN_COUNT = 21;

const OBTemplate = ({
  screenNumber, nextScreen, children,
}) => {
  const progressMarker = screenNumber - 1;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <View style={styles.headerAndContentContainer}>
          {screenNumber > 1 && (
            <OBHeader
              progressMarker={progressMarker}
              totalScreenCount={TOTAL_SCREEN_COUNT}
            />
          )}
          {children}
        </View>
        <OBNavigation
          nextScreen={nextScreen}
          screenNumber={screenNumber}
          totalScreenCount={TOTAL_SCREEN_COUNT}
        />
      </View>
    </SafeAreaView>
  );
};

OBTemplate.propTypes = {
  screenNumber: number.isRequired,
  nextScreen: string.isRequired,
  children: node.isRequired,
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
