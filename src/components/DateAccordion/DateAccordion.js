import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Accordion } from 'native-base';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line import/no-extraneous-dependencies
import { string, arrayOf, bool } from 'prop-types';
import { activeCollectionIdSelector } from '../../redux/selectors';

import Colors from '../../constants/Colors';
import ResourceCard from '../ResourceCard/ResourceCard';
import BaseText from '../Generic/BaseText';
import CountIcon from '../Icons/CountIcon';
import CollectionIcon from '../Icons/CollectionIcon';

const DateAccordion = ({
  label, resourceIds, activeCollectionId, fromDetailsPanel,
}) => {
  const dataArray = [{ title: label, content: resourceIds }];

  const renderHeader = (item, expanded) => {
    const chevronIcon = expanded
      ? <Ionicons name="chevron-down" size={24} color={Colors.accordionChevronIcon} />
      : <Ionicons name="chevron-up" size={24} color={Colors.accordionChevronIcon} />;

    return (
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          {chevronIcon}
          <CountIcon count={resourceIds.length} />
          <BaseText style={styles.headerText}>
            {item.title}
          </BaseText>
        </View>
        <CollectionIcon
          collectionId={activeCollectionId}
          resourceIds={resourceIds}
          showCount
        />
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

DateAccordion.propTypes = {
  label: string.isRequired,
  resourceIds: arrayOf(string.isRequired).isRequired,
  activeCollectionId: string.isRequired,
  fromDetailsPanel: bool,
};

DateAccordion.defaultProps = {
  fromDetailsPanel: false,
};

const mapStateToProps = (state) => ({
  activeCollectionId: activeCollectionIdSelector(state),
});

export default connect(mapStateToProps, null)(DateAccordion);

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
  accordionContainer: {
    backgroundColor: Colors.resourceCardBorder,
  },
  accordion: {
    borderWidth: 0,
  },
});
