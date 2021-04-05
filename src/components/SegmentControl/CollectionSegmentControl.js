import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import BaseSegmentControl from '../Generic/BaseSegmentControl'

import BaseText from '../Generic/BaseText'

const allRecordsDescription = "Displays all records."
const collectionRecordsDescription = "Only displays records saved to the collection."

const CollectionSegmentControl = () => {
  const [segControlIndex, setSegControlIndex] = useState(0)

  const description = segControlIndex === 0 ? allRecordsDescription : collectionRecordsDescription
  return (
    <View style={styles.root}>
      <BaseSegmentControl
        values={['All Records', 'Collection Records']}
        selectedIndex={segControlIndex}
        setSelectedIndex={setSegControlIndex}
      />
      <BaseText style={styles.descriptionText}>{description}</BaseText>
    </View>
  )
}

export default CollectionSegmentControl

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
