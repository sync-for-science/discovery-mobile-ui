import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { arrayOf, bool, shape } from 'prop-types';

import { savedRecordsBySavedDaySelector } from '../../redux/selectors';
import BaseAccordion from '../Generic/BaseAccordion';

const TimeSavedAccordionsContainer = ({ savedRecordsBySavedDay, fromDetailsPanel }) => {
  const maxRecordsCount = savedRecordsBySavedDay.reduce((acc, { recordIds }) => (
    acc < recordIds.length ? recordIds.length : acc
  ), 0);
  return (
    <View>
      {
          savedRecordsBySavedDay.map(({ date, recordIds }) => (
            <BaseAccordion
              key={date}
              headerLabel={date}
              resourceIds={recordIds}
              headerCount={recordIds.length}
              fromDetailsPanel={fromDetailsPanel}
              maxRecordsCount={maxRecordsCount}
              fromTimeSavedAccordion
            />
          ))
        }
    </View>
  );
};

TimeSavedAccordionsContainer.propTypes = {
  savedRecordsBySavedDay: arrayOf(shape({}).isRequired).isRequired,
  fromDetailsPanel: bool.isRequired,
};

const mapStateToProps = (state) => ({
  savedRecordsBySavedDay: savedRecordsBySavedDaySelector(state),
});

export default connect(mapStateToProps, null)(TimeSavedAccordionsContainer);
