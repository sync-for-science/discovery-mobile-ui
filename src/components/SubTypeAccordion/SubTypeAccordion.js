import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Accordion } from 'native-base';
import { connect } from 'react-redux';
import {
  arrayOf, bool, number, string,
} from 'prop-types';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

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
  fromDetailsPanel,
}) => {
  const dataArray = [{ title: subType, content: resourceIds }];

  const renderHeader = (item, expanded) => {
    const chevronIcon = expanded
      ? <Ionicons name="chevron-up" size={24} color={Colors.accordionChevronIcon} />
      : <Ionicons name="chevron-down" size={24} color={Colors.accordionChevronIcon} />;

    return (
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          {chevronIcon}
          <CountIcon count={subTypeCount} />
          <BaseText style={styles.headerText}>
            {item.title}
          </BaseText>
        </View>
        <View style={styles.rightIconsContainer}>
          { !fromDetailsPanel
            && (
            <>
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
            </>
            )}
          <CollectionIcon
            collectionId={activeCollectionId}
            resourceIds={resourceIds}
            showCount
          />
        </View>
      </View>
    );
  };

  const renderContent = (item) => item.content.map(
    (resourceId, cardIndex) => (
      <ResourceCard
        key={resourceId}
        index={cardIndex}
        resourceId={resourceId}
        collectionId={activeCollectionId}
        fromDetailsPanel={fromDetailsPanel}
      />
    ),
  );

  return (
    <View style={styles.accordionContainer}>
      <Accordion
        style={styles.accordion}
        dataArray={dataArray}
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
  fromDetailsPanel: bool,
};

SubTypeAccordion.defaultProps = {
  fromDetailsPanel: false,
};

const mapStateToProps = (state) => ({
  activeCollectionId: activeCollectionIdSelector(state),
});

export default connect(mapStateToProps, null)(SubTypeAccordion);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
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
  accordionContainer: {
    backgroundColor: Colors.resourceCardBorder,
  },
  accordion: {
    borderWidth: 0,
  },
});
