import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'

import { dateSortedCollectionResourceIdsSelector } from '../../redux/selectors';
import DateAccordion from './DateAccordion'


const DateAccordionContainer = ({dateSortedResourceIds}) => {
  const sortByDate = ([t1], [t2]) => new Date(t1) > new Date(t2) ? -1 : 1
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        { Object.entries(dateSortedResourceIds)
          .sort(sortByDate)
          .map(([date, resourceIds]) => (
            <DateAccordion 
              key={date}
              label={date}
              resourceIds={resourceIds}
            />
          ))
        }
      </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  dateSortedResourceIds: dateSortedCollectionResourceIdsSelector(state)
})

export default connect(mapStateToProps, null)(DateAccordionContainer)

const styles = StyleSheet.create({})
