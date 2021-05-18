import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { bool, number, string } from 'prop-types';
import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles';

const OBHeader = ({
  progressMarker, totalProgressMarkers, sectionTitle, showHeaderLogo,
}) => {
  const {
    h3, h6, alignCenter, italic,
  } = TextStyles;
  const filledMarkers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < progressMarker; i++) {
    filledMarkers.push(<View key={i} style={styles.filledMarkers} />);
  }
  const emptyMakers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < totalProgressMarkers - progressMarker; i++) {
    emptyMakers.push(<View key={i} style={styles.emptyMarkers} />);
  }

  return (
    <View style={styles.root}>
      <View style={styles.progressContainer}>
        {filledMarkers}
        {emptyMakers}
      </View>
      <View style={styles.logoContainer}>
        {showHeaderLogo && (
          <View style={styles.iconContainer}>
            <Text style={[h6, alignCenter, italic, styles.tempLogoText]}>LOGO HERE</Text>
          </View>
        )}
        <Text style={h3}>{sectionTitle}</Text>
      </View>
    </View>
  );
};

OBHeader.propTypes = {
  progressMarker: number.isRequired,
  totalProgressMarkers: number.isRequired,
  sectionTitle: string.isRequired,
  showHeaderLogo: bool.isRequired,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: 75,
    width: 75,
    backgroundColor: Colors.mediumgrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
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
