import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Accordion } from "native-base";
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors'

const SubTypeAccordion = ({subType, resourcesIds}) => {
  const dataArray = [
    {title: subType, content: resourcesIds},
  ]

  const renderHeader = (item, expanded) => {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: Colors.primary,
      }} >
        <View style={{width: '80%'}}>
          <Text style={{color: 'white'}}>{item.title} [{item.content.length}]</Text>
        </View>
        { expanded
          ? <Ionicons name="caret-down" size={20} color='white' />
          : <Ionicons name="caret-up" size={20} color='white' />
        }
      </View>
    )
  }

  const renderContent = (item) => {
    return item.content.map(resourceId => <View style={{backgroundColor: 'white', padding: 10}}><Text>{resourceId}</Text></View>)
  }

  return (
    <View style={{marginBottom: 10}}>
      <Accordion 
        dataArray={dataArray}
        icon="add" 
        iconStyle={{ color: "green" }}
        expanded={[]}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
    </View>
  )
}

export default SubTypeAccordion

const styles = StyleSheet.create({})
