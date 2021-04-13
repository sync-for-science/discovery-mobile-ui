import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Accordion } from 'native-base';
import { connect } from 'react-redux';
import {
  arrayOf, number, string,
} from 'prop-types';

import {
  activeCollectionIdSelector,
} from '../../redux/selectors';
import Colors from '../../constants/Colors';
import ResourceCard from '../ResourceCard/ResourceCard';
import BaseText from '../Generic/BaseText';
import CountIcon from '../Icons/CountIcon';
import FocusedIcon from '../Icons/FocusedIcon';
import MarkedIcon from '../Icons/MarkedIcon';
import CollectionIcon from '../Icons/CollectionIcon';

const SubTypeAccordion = ({
  subTypeCount,
  resourceIds,
  activeCollectionId,
  subType,
}) => {
  const dataArray = [{ title: subType, content: resourceIds }];
  const renderHeader = (item) => (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <CountIcon count={subTypeCount} />
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
          subTypeCount={subTypeCount}
          isAccordion
        />
        <CollectionIcon
          collectionId={activeCollectionId}
          resourceIds={resourceIds}
          showCount
        />
      </View>
    </View>
  );

  const renderContent = (item) => item.content.map(
    (resourceId) => (
      <ResourceCard
        key={resourceId}
        resourceId={resourceId}
        collectionId={activeCollectionId}
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
  subTypeCount: number.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  activeCollectionId: string.isRequired,
  subType: string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCollectionId: activeCollectionIdSelector(state),
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
    flex: 1,
  },
  headerText: {
    marginLeft: 5,
    color: 'black',
    flex: 1,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
