import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accordion } from 'native-base';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux'

import { arrayOf, string } from 'prop-types';
import Colors from '../../constants/Colors';
import ResourceCard from '../ResourceCard/ResourceCard';
import {addResourceToCollection, removeResourceToCollection } from '../../redux/epics'

const SubTypeAccordion = ({ 
  subType, 
  resourcesIds, 
  addResourceToCollectionAction, 
  removeResourceToCollectionAction,
  selectedCollectionId
}) => {
  const dataArray = [{ title: subType, content: resourcesIds }];

  const renderHeader = (item, expanded) => (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          {`${item.title} [${item.content.length}]`}
        </Text>
      </View>
      { expanded
        ? <Ionicons name="caret-down" size={20} color="white" />
        : <Ionicons name="caret-up" size={20} color="white" />}
    </View>
  );

  const renderContent = (item) => item.content.map(
    (resourceId) => (
      <ResourceCard 
        key={resourceId} 
        resourceId={resourceId}
        selectedCollectionId={selectedCollectionId}
        addResourceToCollection={addResourceToCollectionAction}
        removeResourceToCollection={removeResourceToCollection}
      />
    ),
  );

  return (
    <View style={{ marginBottom: 10 }}>
      <Accordion
        dataArray={dataArray}
        icon="add"
        iconStyle={{ color: 'green' }}
        expanded={[]}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
    </View>
  );
};

SubTypeAccordion.propTypes = {
  subType: string.isRequired,
  resourcesIds: arrayOf(string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  selectedCollectionId: state.selectedCollection
})

const mapDispatchToProps = {
  addResourceToCollectionAction: addResourceToCollection,
  removeResourceToCollectionAction: removeResourceToCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(SubTypeAccordion);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  headerTextContainer: {
    width: '80%',
  },
  headerText: {
    color: 'white',
  },
});
