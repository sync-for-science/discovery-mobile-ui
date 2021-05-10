import React from 'react';
import { bool, shape, string } from 'prop-types';
import { StyleSheet, View } from 'react-native';

import BaseText from '../Generic/BaseText';
import { getResourceDate } from '../../resources/fhirReader';
import FocusedIcon from '../Icons/FocusedIcon';
import MarkedIcon from '../Icons/MarkedIcon';
import CollectionIcon from '../Icons/CollectionIcon';
import { SINGULAR_RESOURCE_TYPES } from '../../constants/resource-types';

const CardHeader = ({
  resourceId, resource, collectionId, fromDetailsPanel, fromNotesScreen,
}) => {
  const resourceDate = getResourceDate(resource);
  const displayType = SINGULAR_RESOURCE_TYPES[resource.type];

  if (fromDetailsPanel) {
    return (
      <>
        <BaseText style={styles.typeLabel}>{displayType}</BaseText>
        <View style={styles.rightIconsContainer}>
          <BaseText style={styles.resourceDate}>{resourceDate}</BaseText>
          <CollectionIcon
            showCount={false}
            collectionId={collectionId}
            resourceIds={[resourceId]}
          />
        </View>
      </>
    );
  }

  if (fromNotesScreen) {
    return <BaseText style={styles.resourceDate}>{resourceDate}</BaseText>;
  }

  return (
    <>
      <BaseText>{resourceDate}</BaseText>
      <View style={styles.rightIconsContainer}>
        <FocusedIcon
          subType={resource.subType}
          resourceIds={[resourceId]}
          isAccordion={false}
        />
        <MarkedIcon
          subType={resource.subType}
          resourceIds={[resourceId]}
          isAccordion={false}
        />
        <CollectionIcon
          showCount={false}
          collectionId={collectionId}
          resourceIds={[resourceId]}
        />
      </View>
    </>
  );
};

CardHeader.propTypes = {
  resourceId: string.isRequired,
  resource: shape({}).isRequired,
  collectionId: string,
  fromDetailsPanel: bool,
  fromNotesScreen: bool,
};

CardHeader.defaultProps = {
  fromDetailsPanel: false,
  fromNotesScreen: false,
  collectionId: null,
};

export default CardHeader;

const styles = StyleSheet.create({
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resourceDate: {
    marginRight: 10,
  },
  typeLabel: {
    textTransform: 'uppercase',
  },
});
