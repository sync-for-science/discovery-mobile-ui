import { number } from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles';

const TOTAL_OB_SCREEN_COUNT = 20;

const OBHeader = ({ screenNumber }) => {
  const {
    h3, h6, alignCenter, italic,
  } = TextStyles;
  const filledMarkers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < screenNumber; i++) {
    filledMarkers.push(<View style={{
      flex: 1, borderWidth: 1, borderColor: Colors.lightgrey2, backgroundColor: Colors.primary,
    }}
    />);
  }
  const emptyMakers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < TOTAL_OB_SCREEN_COUNT - screenNumber; i++) {
    emptyMakers.push(<View style={{ flex: 1, borderWidth: 1, borderColor: Colors.lightgrey2 }} />);
  }

  return (
    <View style={styles.root}>
      <View style={styles.progressContainer}>
        {filledMarkers}
        {emptyMakers}
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.iconContainer}>
          <Text style={[h6, alignCenter, italic, styles.tempLogoText]}>LOGO HERE</Text>
        </View>
        <Text style={h3}>Logo Here</Text>
      </View>
    </View>
  );
};

OBHeader.propTypes = {
  screenNumber: number.isRequired,
};

export default OBHeader;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    height: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    height: 75,
    width: 75,
    backgroundColor: Colors.mediumgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempLogoText: {
    color: Colors.lightgrey,
  },
});
