import React from 'react'
import { StyleSheet, View } from 'react-native'

import DateAccordion from './DateAccordion'

const DateAccordionContainer = ({data, isDescending, fromDetailsPanel}) => {
  const descendingSort = (t1, t2) => new Date(t1) > new Date(t2) ? -1 : 1
  const ascendingSort = (t1, t2) => new Date(t1) < new Date(t2) ? -1 : 1
  const sortByLabelDate = ([t1], [t2]) => isDescending ? descendingSort(t1, t2) : ascendingSort(t1, t2)
  const sortByResourceDate = ([, t1], [, t2]) => isDescending ? descendingSort(t1, t2) : ascendingSort(t1, t2)
  
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        { Object.entries(data)
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

export default DateAccordionContainer

const styles = StyleSheet.create({})