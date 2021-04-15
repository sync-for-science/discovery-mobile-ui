import React from 'react';
import {
  Alert,
  StyleSheet, Text, View,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  func, shape, string, bool,
} from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import { PLURAL_RESOURCE_TYPES } from '../../resources/resourceTypes';
import { selectResourceType, clearCollection } from '../../redux/action-creators';
import { resourceTypeFiltersSelector, activeCollectionSelectedResourceTypeSelector, activeCollectionSelector } from '../../redux/selectors';
import BaseText from '../Generic/BaseText';

const CategoryButton = ({ resourceType, isActive, selectResourceTypeAction }) => {
  const categoryDisplay = PLURAL_RESOURCE_TYPES[resourceType];
  const buttonStyle = isActive ? styles.buttonSelected : styles.button;
  const buttonTextStyle = isActive ? styles.buttonSelectedText : styles.buttonText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => selectResourceTypeAction(resourceType)}>
      <Text style={buttonTextStyle}>{categoryDisplay}</Text>
    </TouchableOpacity>
  );
};

CategoryButton.propTypes = {
  resourceType: string.isRequired,
  isActive: bool.isRequired,
  selectResourceTypeAction: func.isRequired,
};

CategoryButton.defaultProps = {
};

const ResourceTypeSelector = ({
  collection,
  resourceTypeFilters,
  selectResourceTypeAction,
  selectedResourceType,
  clearCollectionAction,
}) => {
  const hasResourceIds = Object.keys(collection.resourceIds).length > 0
  const hasMarkedResources = Object.keys(collection.markedResources.marked).length > 0

  const handleClearCollection = () => {
    Alert.alert(
      'Clear Collection',
      'Are you sure you want to clear the records saved to this collection?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: () => clearCollectionAction(true),
          style: 'destructive',
        },
      ],
    );
  }

  return (
    <View>
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {
          Object.entries(resourceTypeFilters)
            .filter(([, isVisible]) => isVisible === true)
            .map(([resourceType]) => (
              <CategoryButton
                key={resourceType}
                resourceType={resourceType}
                isActive={selectedResourceType === resourceType}
                selectResourceTypeAction={selectResourceTypeAction}
              />
            ))
        }
      </ScrollView>
      <View style={styles.clearButtonsContainer} >
        <TouchableOpacity onPress={handleClearCollection} disabled={!hasResourceIds}>
          <BaseText 
            variant={hasResourceIds ? "button" : "buttonDisabled"}
          >
            Clear Collection
          </BaseText>
        </TouchableOpacity>
        <TouchableOpacity disabled={!hasMarkedResources}>
          <BaseText 
            variant={hasMarkedResources ? "button" : "buttonDisabled"}
          >
            Clear Highlighted
          </BaseText>
        </TouchableOpacity>
      </View>
    </View>
  )
};

ResourceTypeSelector.propTypes = {
  resourceTypeFilters: shape({}).isRequired,
  selectedResourceType: string,
  selectResourceTypeAction: func.isRequired,
};

ResourceTypeSelector.defaultProps = {
  selectedResourceType: null,
};

const mapStateToProps = (state) => ({
  collection: activeCollectionSelector(state),
  resourceTypeFilters: resourceTypeFiltersSelector(state),
  selectedResourceType: activeCollectionSelectedResourceTypeSelector(state),
});

const mapDispatchToProps = {
  selectResourceTypeAction: selectResourceType,
  clearCollectionAction: clearCollection
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceTypeSelector);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lightgrey2,
    borderColor: 'gray',
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: Colors.mediumgrey,
    borderWidth: 2,
  },
  buttonSelected: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 20,
    borderColor: Colors.darkgrey,
    borderWidth: 2,
  },
  buttonSelectedText: {
    color: 'black',
    fontWeight: '700',
  },
  buttonText: {
    color: 'black',
  },
  contentContainerStyle: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
  },
  clearButtonsContainer: {
    width: "100%", 
    flexDirection: 'row', 
    paddingVertical: 7, 
    justifyContent: 'space-around',
    backgroundColor: Colors.lightgrey2
  }
});
