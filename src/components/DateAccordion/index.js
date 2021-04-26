import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { savedRecordsByRecordDateSelector } from '../../redux/selectors'

const DateAccordion = ({savedRecordsByRecordDate}) => {
  console.log('savedRecordsByRecordDate', savedRecordsByRecordDate)
  return (
    <View>
      <Text>DateAccordion</Text>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  savedRecordsByRecordDate: savedRecordsByRecordDateSelector(state, ownProps)
})

export default connect(mapStateToProps, null)(DateAccordion)

const styles = StyleSheet.create({})
