import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  number, string, node, arrayOf, bool,
} from 'prop-types';

import OBHeader from './OBHeader';
import OBNavigation from './OBNavigation';

const TOTAL_SCREEN_COUNT = 19;
const TOTAL_PROGRESS_MARKERS = 17;

const OBTemplate = ({
  screenNumber, nextScreen, sectionTitle, dotNav, children, showHeaderLogo,
}) => {
  const progressMarker = screenNumber - 1;
  const isFirstOrLast = screenNumber === 1 || screenNumber === TOTAL_SCREEN_COUNT

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <View style={styles.headerAndContentContainer}>
          {!isFirstOrLast && (
            <OBHeader
              progressMarker={progressMarker}
              totalProgressMarkers={TOTAL_PROGRESS_MARKERS}
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
  showHeaderLogo: true,
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
