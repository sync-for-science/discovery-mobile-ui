import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Accordion } from 'native-base';
import { connect } from 'react-redux';

import {
  arrayOf, func, number, shape, string,
} from 'prop-types';
import Colors from '../../constants/Colors';
import ResourceCard from '../ResourceCard/ResourceCard';
import {
  actionTypes,
  addResourceToCollection,
  removeResourceFromCollection,
} from '../../redux/epics';
import BaseText from '../Generic/BaseText';
import CountIcon from '../Icons/CountIcon';
import { markedResourcesSelector } from '../../redux/selectors';

const SubTypeAccordion = ({
  addResourceToCollectionAction,
  collectionDateFilteredCount,
  dateFilteredCount,
  removeResourceFromCollectionAction,
  resourceIds,
  selectedCollectionId,
  subType,
  updateMarkedResources,
  markedResources,
}) => {
  const dataArray = [{ title: subType, content: resourceIds }];

  const markedResourceCount = resourceIds.reduce((acc, id) => {
    const isMarked = markedResources.marked[id];
    return isMarked ? acc + 1 : acc;
  }, 0);

  const handleMarkedClick = () => {
    updateMarkedResources(resourceIds.reduce((acc, id) => ({
      ...acc,
      [id]: !markedResourceCount,
    }), {}));
  };

  const renderHeader = (item) => (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <CountIcon
          shape="square"
          color={Colors.lightgrey}
          count={dateFilteredCount}
          marginRight
          textColor="black"
          readOnly
        />
        <BaseText style={styles.headerText}>
          {item.title}
        </BaseText>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CountIcon
          shape="circle"
          color={Colors.primary}
          count={markedResourceCount}
          action1={handleMarkedClick}
          action2={handleMarkedClick}
          actionDep={markedResourceCount > 0}
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
  updateMarkedResources: func.isRequired,
  markedResources: shape({
    marked: shape({}).isRequired,
    lastMarked: shape({}).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  selectedCollectionId: state.selectedCollection,
  markedResources: markedResourcesSelector(state),
});

const mapDispatchToProps = {
  addResourceToCollectionAction: addResourceToCollection,
  removeResourceFromCollectionAction: removeResourceFromCollection,
  updateMarkedResources: (resourceIdsMap) => ({
    type: actionTypes.UPDATE_MARKED_RESOURCES,
    payload: resourceIdsMap,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SubTypeAccordion));

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
