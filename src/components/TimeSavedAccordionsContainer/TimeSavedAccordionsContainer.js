import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { arrayOf, shape } from 'prop-types';

import { savedRecordsBySavedDaySelector } from '../../redux/selectors';


const TimeSavedAccordionsContainer = ({savedRecordsBySavedDay}) => {
  console.log('savedRecordsBySavedDay', savedRecordsBySavedDay)
  return (
    <View>
      <Text>TimeSavedAccordionsContainer</Text>
    </View>
  )
}

TimeSavedAccordionsContainer.propTypes = {
  savedRecordsBySavedDay: arrayOf(shape({}).isRequired).isRequired,
};


const mapStateToProps = (state, ownProps) => ({
  savedRecordsBySavedDay: savedRecordsBySavedDaySelector(state, ownProps)
});

export default connect(mapStateToProps, null)(TimeSavedAccordionsContainer);


const styles = StyleSheet.create({})
