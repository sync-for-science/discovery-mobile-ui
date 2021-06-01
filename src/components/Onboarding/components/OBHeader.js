import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { number } from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from '../../../constants/Colors';

const OBHeader = ({
  totalProgressPositions, progressPosition,
}) => {
  const filledMarkers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < progressPosition; i++) {
    filledMarkers.push(<View key={i} style={styles.filledMarkers} />);
  }
  const emptyMakers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < totalProgressPositions - progressPosition; i++) {
    emptyMakers.push(<View key={i} style={styles.emptyMarkers} />);
  }

  return (
    <View style={styles.root}>
      {progressPosition && (
        <View style={styles.progressContainer}>
          {filledMarkers}
          {emptyMakers}
        </View>
      )}
    </View>
  );
};

OBHeader.propTypes = {
  progressPosition: number,
  totalProgressPositions: number.isRequired,
};

OBHeader.defaultProps = {
  progressPosition: null,
};

export default OBHeader;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: hp('4%'),
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    height: 10,
  },
  filledMarkers: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.logoBlue,
    backgroundColor: Colors.logoBlue,
  },
  emptyMarkers: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.lightgrey2,
  },
});
