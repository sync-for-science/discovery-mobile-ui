import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { string, arrayOf } from 'prop-types';

import { preBuiltDatesSelector } from '../../redux/selectors';
import { PREBUILT_COLLECTIONS_LABELS } from '../../redux/reducers';
import { formatDate } from '../../resources/fhirReader';

const PreBuiltDescriptionText = ({ preBuiltDates, collectionId }) => {
  const printDates = preBuiltDates.reduce((acc, date) => acc.concat(`\n   ${formatDate(date)}`), '');
  const allCount = collectionId === PREBUILT_COLLECTIONS_LABELS.lastEncounters ? 3 : 5;

  let firstLine;
  let showTakesPlaceOn;
  if (collectionId === PREBUILT_COLLECTIONS_LABELS.lastEncounters) {
    firstLine = (
      <>
        This Update looks for the
        {' '}
        <Text style={styles.bold}>last 3 Encounters</Text>
        {' '}
        in your Records.
      </>
    );
    showTakesPlaceOn = ' takes place on:';
  } else if (collectionId === PREBUILT_COLLECTIONS_LABELS.lastLabResults) {
    firstLine = (
      <>
        This Update looks for all Lab Results in the
        {' '}
        <Text style={styles.bold}>last 5 dates</Text>
        {' '}
        they were received.
      </>
    );
    showTakesPlaceOn = ':';
  } else {
    firstLine = (
      <>
        This Update looks for all Vital Signs in the
        {' '}
        <Text style={styles.bold}>last 5 dates</Text>
        {' '}
        they were measured.
      </>
    );
    showTakesPlaceOn = ':';
  }

  let secondLine;
  if (preBuiltDates.length === 0) {
    secondLine = (
      <>
        Discovery was
        {' '}
        <Text style={styles.bold}>not able to identify</Text>
        {' '}
        any.
      </>
    );
  } else if (preBuiltDates.length === allCount) {
    secondLine = (
      <>
        Discovery was able to find
        {' '}
        <Text style={styles.bold}>
          all
          {' '}
          {allCount}
          {' '}
          of them
        </Text>
        {showTakesPlaceOn}
        {' '}
        {printDates}
      </>
    );
  } else {
    secondLine = (
      <Text>
        Discovery was able to find
        {' '}
        <Text style={styles.bold}>
          {preBuiltDates.length}
          {' '}
          of them
        </Text>
        {showTakesPlaceOn}
        {' '}
        {printDates}
      </Text>
    );
  }

  return (
    <Text>
      {firstLine}
      {'\n'}
      {secondLine}
    </Text>
  );
};

PreBuiltDescriptionText.propTypes = {
  preBuiltDates: arrayOf(string).isRequired,
  collectionId: string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  preBuiltDates: preBuiltDatesSelector(state, ownProps),
});

export default connect(mapStateToProps, null)(PreBuiltDescriptionText);

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
});
