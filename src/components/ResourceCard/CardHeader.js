import React from 'react';
import { bool, shape, string } from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

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

  if (fromDetailsPanel || fromNotesScreen) {
    return (
      <View style={styles.fromContainer}>
        <View style={styles.typePillContainer}>
          <View style={styles.typeTextContainer}>
            <Text style={styles.typeLabel}>{displayType}</Text>
          </View>
        </View>
        <View style={styles.rightFromContainer}>
          <BaseText style={styles.resourceDate}>{resourceDate}</BaseText>
          {fromDetailsPanel && (
          <CollectionIcon
            showCount={false}
            collectionId={collectionId}
            resourceIds={[resourceId]}
          />
          )}
        </View>
      </View>
    );
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
    justifyContent: 'flex-end',
    flex: 1,
  },
  resourceDate: {
    marginRight: 10,
  },
  typeLabel: {
    fontWeight: '700',
  },
  typeTextContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  fromContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  typePillContainer: {
    width: '40%',
    alignItems: 'flex-start',
  },
  rightFromContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
