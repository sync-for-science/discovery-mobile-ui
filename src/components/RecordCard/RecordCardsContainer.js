import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import {connect} from 'react-redux'
import SubTypeAccordion from '../SubTypeAccordion/SubTypeAccordion';

import RecordCard from './RecordCard';

const RecordCardsContainer = ({resourceIdsGroupedByType}) => {
  const selectedCategory = "Condition"
  const categorySubTypes = resourceIdsGroupedByType[selectedCategory]
  
  return(
    <View style={styles.root}>
      <Text>RecordCards Container</Text>
      <View style={styles.container}>
        {Object.keys(categorySubTypes).map(subType => {
          const resourcesIds = Array.from(categorySubTypes[subType])
          return (
            <SubTypeAccordion subType={subType} resourcesIds={resourcesIds} />
          )
        })}
      </View>
    </View>
)};

const mapStateToProps = (state) => ({
  resourceIdsGroupedByType: state.resourceIdsGroupedByType
})

export default connect(mapStateToProps, null)(RecordCardsContainer);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 10,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
});
