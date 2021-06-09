import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Accordion } from 'native-base';
import { connect } from 'react-redux';
import {
  arrayOf, bool, number, shape, string,
} from 'prop-types';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies

import {
  activeCollectionIdSelector,
} from '../../redux/selectors';
import Colors from '../../constants/Colors';
import ResourceCard from '../ResourceCard';
import BaseText from './BaseText';
import CountIcon from '../Icons/CountIcon';
import FocusedIcon from '../Icons/FocusedIcon';
import MarkedIcon from '../Icons/MarkedIcon';
import CollectionIcon from '../Icons/CollectionIcon';

const AccordionHeader = ({
  item, expanded, fromDetailsPanel, activeCollectionId, fromDateAccordion,
}) => {
  const { headerLabel, headerCount, resourceIds } = item;
  const headerStyle = [styles.header];
  if (fromDetailsPanel && fromDateAccordion) {
    headerStyle.push({ paddingLeft: 30 });
  }

  const chevronIcon = expanded
    ? <Ionicons name="chevron-up" size={16} color={Colors.accordionChevronIcon} />
    : <Ionicons name="chevron-down" size={16} color={Colors.accordionChevronIcon} />;

  return (
    <View style={headerStyle}>
      <View style={styles.headerTextContainer}>
        <View style={styles.leftIconContainer}>
          {chevronIcon}
          <CountIcon count={headerCount} />
        </View>
        <BaseText style={styles.headerText}>
          {headerLabel}
        </BaseText>
      </View>
      <View style={styles.rightIconsContainer}>
        { !fromDetailsPanel
            && (
            <>
              <FocusedIcon
                subType={headerLabel}
                resourceIds={resourceIds}
                isAccordion
              />
              <MarkedIcon
                subType={headerLabel}
                resourceIds={resourceIds}
                subTypeCount={headerCount}
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

AccordionHeader.propTypes = {
  item: shape({}).isRequired,
  expanded: bool.isRequired,
  fromDetailsPanel: bool,
  activeCollectionId: string.isRequired,
  fromDateAccordion: bool,
};

AccordionHeader.defaultProps = {
  fromDetailsPanel: false,
  fromDateAccordion: false,
};

const ResourceCards = ({ item, activeCollectionId, fromDetailsPanel }) => item.resourceIds.map(
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

ResourceCards.propTypes = {
  item: shape({}).isRequired,
  fromDetailsPanel: bool,
  activeCollectionId: string.isRequired,
};

ResourceCards.defaultProps = {
  fromDetailsPanel: false,
};

const BaseAccordion = ({
  headerCount,
  resourceIds,
  activeCollectionId,
  headerLabel,
  fromDetailsPanel,
  fromDateAccordion,
}) => {
  const dataArray = [{ headerLabel, headerCount, resourceIds }];

  return (
    <View style={styles.accordionContainer}>
      <Accordion
        style={styles.accordion}
        dataArray={dataArray}
        expanded={[]}
        renderHeader={(item, expanded) => (
          <AccordionHeader
            item={item}
            expanded={expanded}
            fromDetailsPanel={fromDetailsPanel}
            activeCollectionId={activeCollectionId}
            fromDateAccordion={fromDateAccordion}
          />
        )}
        renderContent={(item) => (
          <ResourceCards
            item={item}
            fromDetailsPanel={fromDetailsPanel}
            activeCollectionId={activeCollectionId}
          />
        )}
      />
    </View>
  );
};

BaseAccordion.propTypes = {
  headerCount: number.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  activeCollectionId: string.isRequired,
  headerLabel: string.isRequired,
  fromDetailsPanel: bool,
  fromDateAccordion: bool,
};

BaseAccordion.defaultProps = {
  fromDetailsPanel: false,
  fromDateAccordion: false,
};

const mapStateToProps = (state) => ({
  activeCollectionId: activeCollectionIdSelector(state),
});

export default connect(mapStateToProps, null)(BaseAccordion);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  leftIconContainer: {
    flexDirection: 'row',
    marginTop: 2,
    marginRight: 2,
  },
});
