import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import BaseSegmentControl from '../Generic/BaseSegmentControl'

import BaseText from '../Generic/BaseText'

const allRecordsDescription = "Displays all records."
const highlightedRecordsDescription = "Only displays highlighted records."

const MarkedSegmentControl = () => {
  const [segControlIndex, setSegControlIndex] = useState(0)

  const description = segControlIndex === 0 ? allRecordsDescription : highlightedRecordsDescription
  return (
    <View style={styles.root}>
      <BaseSegmentControl
        values={['All Records', 'Highlighted Records']}
        selectedIndex={segControlIndex}
        setSelectedIndex={setSegControlIndex}
      />
      <BaseText style={styles.descriptionText}>{description}</BaseText>
    </View>
  )
}

export default MarkedSegmentControl

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
