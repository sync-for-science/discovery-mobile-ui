import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Accordion } from 'native-base';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import BaseText from '../Generic/BaseText';
import Colors from "../../constants/Colors"
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer';

const DateAccordion = ({date, types, fromDetailsPanel}) => {
  const dataArray = [{ title: date, content: types }];

  const renderHeader = (item, expanded) => {
    const chevronIcon = expanded
      ? <Ionicons name="chevron-up" size={16} color={Colors.accordionChevronIcon} />
      : <Ionicons name="chevron-down" size={16} color={Colors.accordionChevronIcon} />;
    return (
      <View style={styles.header}>
        {chevronIcon}
        <BaseText variant="title" style={styles.headerText}>
          {item.title}
        </BaseText>
      </View>
    )
  }

  const renderContent = (item) => (
    <View style={styles.content}>
      <SubTypeAccordionsContainer 
        data={item.content} 
        fromDetailsPanel={fromDetailsPanel}
      />
    </View>
  )

  return (
    <View>
      <Accordion
        style={styles.accordion}
        dataArray={dataArray}
        expanded={[]}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
    </View>
  )
}

export default DateAccordion

const styles = StyleSheet.create({
  accordion: {
    width: '100%'
  },
  header: {
    flexDirection: 'row', 
    padding: 5, 
    alignItems: 'center'
  },
  headerText: {
    textTransform: 'uppercase'
  },
  content: {
    marginLeft: 30
  }
})
