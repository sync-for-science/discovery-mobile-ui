import React from 'react'
import { View, StyleSheet } from 'react-native'
import BaseSegmentControl from '../Generic/BaseSegmentControl'
import { connect } from 'react-redux'
import { toggleShowMarkedOnly } from '../../redux/action-creators'

import BaseText from '../Generic/BaseText'

const allRecordsDescription = "Displays all records."
const highlightedRecordsDescription = "Only displays highlighted records."

const MarkedSegmentControl = ({showMarkedOnly, toggleShowMarkedOnlyAction}) => {
  const segControlIndex = showMarkedOnly ? 1 : 0
  const description = segControlIndex === 0 ? allRecordsDescription : highlightedRecordsDescription
  const handleChange = (event) => {
    if (event === 0) {
      toggleShowMarkedOnlyAction(false)
    } else {
      toggleShowMarkedOnlyAction(true)
    }
  }

  return (
    <View style={styles.root}>
      <BaseSegmentControl
        values={['All Records', 'Highlighted Records']}
        selectedIndex={segControlIndex}
        handleChange={handleChange}
      />
      <BaseText style={styles.descriptionText}>{description}</BaseText>
    </View>
  )
}

const mapStateToProps = (state) => ({
  showMarkedOnly: state.showMarkedOnly
})

const mapDispatchToProps = {
  toggleShowMarkedOnlyAction: toggleShowMarkedOnly,
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkedSegmentControl)

const styles = StyleSheet.create({
  root: {
    marginBottom: 30,
  },
  descriptionText: {
    marginTop: 10,
    width: "100%",
    textAlign: 'center'
  }
})
