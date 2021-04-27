import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { arrayOf, shape } from 'prop-types';

import { savedRecordsBySavedDaySelector } from '../../redux/selectors';
import SubTypeAccordion from '../SubTypeAccordion/SubTypeAccordion';

const TimeSavedAccordionsContainer = ({ savedRecordsBySavedDay, fromDetailsPanel }) => {
  return (
    <View>
      {
        savedRecordsBySavedDay.map(({date, recordIds}) => (
          <SubTypeAccordion
            key={date}
            subType={date}
            resourceIds={recordIds}
            subTypeCount={recordIds.length}
            fromDetailsPanel={fromDetailsPanel}
          />
        ))
      }
    </View>
  );
};

TimeSavedAccordionsContainer.propTypes = {
  savedRecordsBySavedDay: arrayOf(shape({}).isRequired).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  savedRecordsBySavedDay: savedRecordsBySavedDaySelector(state, ownProps),
});

export default connect(mapStateToProps, null)(TimeSavedAccordionsContainer);

const styles = StyleSheet.create({});
