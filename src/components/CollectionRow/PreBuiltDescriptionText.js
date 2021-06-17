import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { number, string } from 'prop-types';

import { preBuiltDatesSelector, encountersCountSelector } from '../../redux/selectors';
import { PREBUILT_COLLECTIONS_LABELS } from '../../redux/reducers';

const PreBuiltDescriptionText = ({ preBuiltDates, encountersCount }) => {
  console.log('encountersCount', encountersCount);
  console.log('preBuiltDates', preBuiltDates);
  // const thereAreText = datesArray.count < 5 ? 'However, there' : 'There';
  // const collectionLabel = ownProps.collectionId === PREBUILT_COLLECTIONS_LABELS.lastLabResults ? 'Lab Results' : 'Vital Signs';
  // const printDates = datesArray.reduce((acc, date) => acc.concat(`\n   ${formatDate(date)}`), '');
  // if (ownProps.collectionId === PREBUILT_COLLECTIONS_LABELS.lastEncounters) {
  //   return (<Text style={{color: 'red'}}>This Collection is supposed to identify the last 3 Encounters. There are ${encountersCount} such Encounters in your data.</Text>);
  // }

  // return `This Collection is supposed to identify the ${collectionLabel} for you the last 5 dates they were received. ${thereAreText} are ${datesArray.length} dates found in your Records: ${printDates}`;

  return (
    <View>
      <Text>PreBuiltDescriptionText</Text>
    </View>
  );
};

PreBuiltDescriptionText.propTypes = {
  preBuiltDates: arrayOf(string).isRequired,
  encountersCount: number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  preBuiltDates: preBuiltDatesSelector(state, ownProps),
  encountersCount: encountersCountSelector(state),
});

export default connect(mapStateToProps, null)(PreBuiltDescriptionText);

const styles = StyleSheet.create({});
