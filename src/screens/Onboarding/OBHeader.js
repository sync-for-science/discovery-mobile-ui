import { number } from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles';

const OBHeader = ({ progressMarker, totalScreenCount }) => {
  const {
    h3, h6, alignCenter, italic,
  } = TextStyles;
  const totalMarkerCount = totalScreenCount - 1;
  const filledMarkers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < progressMarker; i++) {
    filledMarkers.push(<View style={styles.filledMarkers} />);
  }
  const emptyMakers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < totalMarkerCount - progressMarker; i++) {
    emptyMakers.push(<View style={styles.emptyMarkers} />);
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
  progressMarker: number.isRequired,
  totalScreenCount: number.isRequired,
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
  filledMarkers: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.lightgrey2,
    backgroundColor: Colors.primary,
  },
  emptyMarkers: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.lightgrey2,
  },
});
