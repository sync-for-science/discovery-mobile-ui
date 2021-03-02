import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { supportedResourcesSelector } from '../../redux/selectors';
import SubTypeAccordionsContainer from '../SubTypeAccordion/SubTypeAccordionsContainer'

const ContentPanel = ({resourceIdsGroupedByType}) => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Content Panel</Text>
      </View>
      <SubTypeAccordionsContainer showAllResourceTypes/>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  resourceIdsGroupedByType: supportedResourcesSelector(state),
})

export default connect(mapStateToProps, null)(ContentPanel);

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
})
