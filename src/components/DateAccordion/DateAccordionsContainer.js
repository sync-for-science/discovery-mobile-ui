import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'

import DateAccordion from './DateAccordion'
import { savedRecordsByRecordDateSelector } from '../../redux/selectors'

const DateAccordionsContainer = ({savedRecordsByRecordDate, fromDetailsPanel}) => {
  return (
    <View>
      {
        savedRecordsByRecordDate.map(({date, types}) => {
          return (
            <DateAccordion
              key={date}
              date={date}
              types={types}
              fromDetailsPanel={fromDetailsPanel}
            />
          )
        })
      }
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  savedRecordsByRecordDate: savedRecordsByRecordDateSelector(state, ownProps)
})

export default connect(mapStateToProps, null)(DateAccordionsContainer)

const styles = StyleSheet.create({})
