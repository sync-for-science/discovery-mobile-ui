import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Accordion } from 'native-base';
import { connect } from 'react-redux';

import {
  arrayOf, func, number, string,
} from 'prop-types';
import Colors from '../../constants/Colors';
import ResourceCard from '../ResourceCard/ResourceCard';
import { addResourceToCollection, removeResourceFromCollection } from '../../redux/epics';
import BaseText from '../Generic/BaseText';
import CountIcon from '../Icons/CountIcon';
import MarkedIcon from '../Icons/MarkedIcon';
import CollectionIcon from '../Icons/CollectionIcon';

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
  const renderHeader = (item) => {
    return (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <CountIcon count={dateFilteredCount} />
        <BaseText style={styles.headerText}>
          {item.title}
        </BaseText>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <MarkedIcon
          resourceIds={resourceIds}
          showCount
        />
        <CollectionIcon
          count={collectionDateFilteredCount}
          collectionId={selectedCollectionId}
          resourceIds={resourceIds}
          showCount
        />
      </View>
    </View>
  )};

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
    marginLeft: 5,
    color: 'black',
  },
});
