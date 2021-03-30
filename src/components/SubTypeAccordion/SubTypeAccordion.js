import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Accordion } from 'native-base';
import { connect } from 'react-redux';
import {
  arrayOf, number, string, bool,
} from 'prop-types';

import Colors from '../../constants/Colors';
import ResourceCard from '../ResourceCard/ResourceCard';
import BaseText from '../Generic/BaseText';
import CountIcon from '../Icons/CountIcon';
import FocusedIcon from '../Icons/FocusedIcon';
import MarkedIcon from '../Icons/MarkedIcon';
import CollectionIcon from '../Icons/CollectionIcon';

const SubTypeAccordion = ({
  dateFilteredCount,
  resourceIds,
  selectedCollectionId,
  subType,
  previewCollection,
  previewCollectionId,
}) => {
  const dataArray = [{ title: subType, content: resourceIds }];
  const collectionId = previewCollection ? previewCollectionId : selectedCollectionId;
  const renderHeader = (item) => (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <CountIcon count={dateFilteredCount} />
        <BaseText style={styles.headerText}>
          {item.title}
        </BaseText>
      </View>
      <View style={styles.rightIconsContainer}>
        <FocusedIcon
          subType={subType}
          resourceIds={resourceIds}
          isAccordion
        />
        <MarkedIcon
          subType={subType}
          resourceIds={resourceIds}
          isAccordion
        />
        <CollectionIcon
          collectionId={collectionId}
          resourceIds={resourceIds}
          showCount
          previewCollection={previewCollection}
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
  dateFilteredCount: number.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  selectedCollectionId: string.isRequired,
  subType: string.isRequired,
  previewCollection: bool,
  previewCollectionId: string.isRequired,
};

SubTypeAccordion.defaultProps = {
  previewCollection: false,
};

const mapStateToProps = (state) => ({
  selectedCollectionId: state.selectedCollection,
  previewCollectionId: state.previewCollectionId,
});

export default connect(mapStateToProps, null)(SubTypeAccordion);

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
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
