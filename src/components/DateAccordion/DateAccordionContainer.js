import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'

import { dateSortedCollectionResourceIdsSelector } from '../../redux/selectors';
import DateAccordion from './DateAccordion'


const DateAccordionContainer = ({dateSortedResourceIds, isDescending, fromDetailsPanel}) => {
  const descendingSort = (t1, t2) => new Date(t1) > new Date(t2) ? -1 : 1
  const ascendingSort = (t1, t2) => new Date(t1) < new Date(t2) ? -1 : 1
  const sortByLabelDate = ([t1], [t2]) => isDescending ? descendingSort(t1, t2) : ascendingSort(t1, t2)
  const sortByResourceDate = ([, t1], [, t2]) => isDescending ? descendingSort(t1, t2) : ascendingSort(t1, t2)
  
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        { Object.entries(dateSortedResourceIds)
          .sort(sortByLabelDate)
          .map(([date, resourceIds]) => {
            const sortedResourceIds = Object.entries(resourceIds)
              .sort(sortByResourceDate)
              .reduce((acc, [id]) => {acc.push(id); return acc }, [])
            return (
              <DateAccordion 
                key={date}
                label={date}
                resourceIds={sortedResourceIds}
                fromDetailsPanel={fromDetailsPanel}
              />
            )
          })
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
