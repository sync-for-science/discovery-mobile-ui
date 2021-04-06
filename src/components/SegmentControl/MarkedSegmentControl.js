import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import BaseSegmentControl from '../Generic/BaseSegmentControl'
import { connect } from 'react-redux'
import { toggleShowMarkedOnly } from '../../redux/action-creators'

import BaseText from '../Generic/BaseText'

const allRecordsDescription = "Displays all records."
const highlightedRecordsDescription = "Only displays highlighted records."

const MarkedSegmentControl = ({toggleShowMarkedOnlyAction}) => {
  const [segControlIndex, setSegControlIndex] = useState(0)
  const description = segControlIndex === 0 ? allRecordsDescription : highlightedRecordsDescription
  const handleChange = (event) => {
    toggleShowMarkedOnlyAction()
    setSegControlIndex(event)
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


const mapDispatchToProps = {
  toggleShowMarkedOnlyAction: toggleShowMarkedOnly,
}

export default connect(null, mapDispatchToProps)(MarkedSegmentControl)

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
