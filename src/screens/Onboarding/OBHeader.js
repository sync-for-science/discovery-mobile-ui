import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import { bool, number, string } from 'prop-types';
import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles';
import discoveryBasic from '../../../assets/images/discovery-basic-logo.png';

const OBHeader = ({
  progressMarker, totalProgressMarkers, sectionTitle, showHeaderLogo,
}) => {
  const {
    h3,
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
      <View style={styles.titleContainer}>
        {showHeaderLogo && (
          <Image
            style={styles.logo}
            source={discoveryBasic}
            resizeMode="contain"
          />
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
  titleContainer: {
    flexDirection: 'row',
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
  logo: {
    height: 50,
    width: 50,
    marginRight: 8,
  },
});
