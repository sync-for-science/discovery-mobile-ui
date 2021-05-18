import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  number, string, node, arrayOf, bool,
} from 'prop-types';

import OBHeader from './OBHeader';
import OBNavigation from './OBNavigation';

const TOTAL_SCREEN_COUNT = 18;

const OBTemplate = ({
  screenNumber, nextScreen, sectionTitle, dotNav, children, showHeaderLogo,
}) => {
  const progressMarker = screenNumber - 1;
  const totalProgressMarkers = TOTAL_SCREEN_COUNT - 1;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <View style={styles.headerAndContentContainer}>
          {screenNumber > 1 && (
            <OBHeader
              progressMarker={progressMarker}
              totalProgressMarkers={totalProgressMarkers}
              sectionTitle={sectionTitle}
              showHeaderLogo={showHeaderLogo}
            />
          )}
          {children}
        </View>
        <OBNavigation
          nextScreen={nextScreen}
          screenNumber={screenNumber}
          totalScreenCount={TOTAL_SCREEN_COUNT}
          dotNav={dotNav}
        />
      </View>
    </SafeAreaView>
  );
};

OBTemplate.propTypes = {
  screenNumber: number.isRequired,
  nextScreen: string.isRequired,
  sectionTitle: string,
  children: node.isRequired,
  dotNav: arrayOf(number.isRequired),
  showHeaderLogo: bool,
};

OBTemplate.defaultProps = {
  sectionTitle: null,
  dotNav: null,
  showHeaderLogo: false,
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
