import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Accordion } from 'native-base';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';

import {
  arrayOf, func, number, string,
} from 'prop-types';
import Colors from '../../constants/Colors';
import ResourceCard from '../ResourceCard/ResourceCard';
import { addResourceToCollection, removeResourceFromCollection } from '../../redux/epics';
import BaseText from '../Generic/BaseText'
import CountIcon from '../Icons/CountIcon'

const SubTypeAccordion = ({
  addResourceToCollectionAction,
  collectionDateFilteredCount,
  dateFilteredCount,
  removeResourceFromCollectionAction,
  resourceIds,
  selectedCollectionId,
  subType,
}) => {
  const dataArray = [{ title: subType, content: resourceIds }];
  const renderHeader = (item, expanded) => {
    return (
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          { expanded
            ? <Ionicons name="caret-down" size={20} color={Colors.darkgrey} />
            : <Ionicons name="caret-up" size={20} color={Colors.darkgrey} />}
          <BaseText style={styles.headerText}>
            {`${item.title} [${item.content.length}]`}
          </BaseText>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CountIcon 
            shape="circle" 
            color={Colors.primary}
            count={0}
            action1={() => {}}
            action2={() => {}}
            actionDep={false}
            marginRight
          />
          <CountIcon 
            shape="square" 
            color={Colors.lastSelected}
            count={collectionDateFilteredCount}
            action1={() => addResourceToCollectionAction(selectedCollectionId, item.content)}
            action2={() => removeResourceFromCollectionAction(selectedCollectionId, item.content)}
            actionDep={collectionDateFilteredCount > 0}
          />
        </View>
      </View>
    );
  };

  const renderContent = (item) => item.content.map(
    (resourceId) => (
      <ResourceCard
        key={resourceId}
        resourceId={resourceId}
        selectedCollectionId={selectedCollectionId}
        addResourceToCollection={addResourceToCollectionAction}
        removeResourceFromCollection={removeResourceFromCollectionAction}
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
  addResourceToCollectionAction: func.isRequired,
  collectionDateFilteredCount: number.isRequired,
  dateFilteredCount: number.isRequired,
  removeResourceFromCollectionAction: func.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  selectedCollectionId: string.isRequired,
  subType: string.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCollectionId: state.selectedCollection,
});

const mapDispatchToProps = {
  addResourceToCollectionAction: addResourceToCollection,
  removeResourceFromCollectionAction: removeResourceFromCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubTypeAccordion);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: Colors.lightgrey,
    borderTopWidth: 1,
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  headerText: {
    marginLeft: 10,
    color: 'black',
  },
});
