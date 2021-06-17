import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { number, string, arrayOf } from 'prop-types';

import { preBuiltDatesSelector, encountersCountSelector } from '../../redux/selectors';
import { PREBUILT_COLLECTIONS_LABELS } from '../../redux/reducers';
import { formatDate } from '../../resources/fhirReader';

const PreBuiltDescriptionText = ({ preBuiltDates, encountersCount, collectionId }) => {
  console.log('encountersCount', encountersCount);
  console.log('preBuiltDates', preBuiltDates);
  const thereAreText = preBuiltDates.count < 5 ? 'However, there' : 'There';
  const collectionLabel = collectionId === PREBUILT_COLLECTIONS_LABELS.lastLabResults ? 'Lab Results' : 'Vital Signs';
  const printDates = preBuiltDates.reduce((acc, date) => acc.concat(`\n   ${formatDate(date)}`), '');

  if (collectionId === PREBUILT_COLLECTIONS_LABELS.lastEncounters) {
    let secondLine;
    if (encountersCount === 0) {
      secondLine = (
        <>
          Discovery was
          {' '}
          <Text style={styles.bold}>not able to identify</Text>
          {' '}
          any.
        </>
      );
    }
    if (encountersCount === 3) {
      secondLine = (
        <>
          Discovery was able to find
          {' '}
          <Text style={styles.bold}>all 3 of them</Text>
          {' '}
          taking place on:
          {' '}
          {printDates}
        </>
      );
    }
    secondLine = (
      <Text>
        Discovery was able to find
        {' '}
        <Text style={styles.bold}>
          {encountersCount}
          {' '}
          of them
        </Text>
        {' '}
        taking place on:
        {' '}
        {printDates}
      </Text>
    );
    return (
      <Text>
        This Update looks for the
        {' '}
        <Text style={styles.bold}>last 3 Encounters</Text>
        {' '}
        in your Records.
        {'\n'}
        {secondLine}
      </Text>
    );
  }

  return (
    <Text>
      This Collection is supposed to identify the
      {' '}
      {collectionLabel}
      for you the last 5 dates they were received.
      {' '}
      {thereAreText}
      {' '}
      are
      {preBuiltDates.length}
      {' '}
      dates found in your Records:
      {printDates}
    </Text>
  );
};

PreBuiltDescriptionText.propTypes = {
  preBuiltDates: arrayOf(string).isRequired,
  encountersCount: number.isRequired,
  collectionId: string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  preBuiltDates: preBuiltDatesSelector(state, ownProps),
  encountersCount: encountersCountSelector(state),
});

export default connect(mapStateToProps, null)(PreBuiltDescriptionText);

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
});
