import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import {connect} from 'react-redux'

import SubTypeAccordion from '../SubTypeAccordion/SubTypeAccordion';

const RecordCardsContainer = ({selectedCategory, resourceIdsGroupedByType}) => {
  const categorySubTypes = resourceIdsGroupedByType[selectedCategory]
  
  return(
    <View style={styles.root}>
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
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
});
