import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import BaseSegmentControl from '../Generic/BaseSegmentControl'
import { connect } from 'react-redux'

import BaseText from '../Generic/BaseText'
import { toggleShowCollectionOnly } from '../../redux/action-creators'

const allRecordsDescription = "Displays all records."
const collectionRecordsDescription = "Only displays records saved to the collection."

const CollectionSegmentControl = ({toggleShowCollectionOnlyAction}) => {
  const [segControlIndex, setSegControlIndex] = useState(0)
  const description = segControlIndex === 0 ? allRecordsDescription : collectionRecordsDescription
  const handleChange = (event) => {
    if (event === 0) {
      toggleShowCollectionOnlyAction(false)
    } else {
      toggleShowCollectionOnlyAction(true)
    }
    setSegControlIndex(event)
  }

  return (
    <View style={styles.root}>
      <BaseSegmentControl
        values={['All Records', 'Collection Records']}
        selectedIndex={segControlIndex}
        handleChange={handleChange}
      />
      <BaseText style={styles.descriptionText}>{description}</BaseText>
    </View>
  )
}

const mapDispatchToProps = {
  toggleShowCollectionOnlyAction: toggleShowCollectionOnly,
}

export default connect(null, mapDispatchToProps)(CollectionSegmentControl)

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
