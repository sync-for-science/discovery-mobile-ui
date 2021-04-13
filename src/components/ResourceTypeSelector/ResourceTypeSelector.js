import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  func, shape, string, bool,
} from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import { PLURAL_RESOURCE_TYPES } from '../../resources/resourceTypes';
import { selectResourceType } from '../../redux/action-creators';
import { activeCollectionResourceTypeFiltersSelector, activeCollectionResourceTypeSelector } from '../../redux/selectors';

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
  resourceTypeFilters,
  selectResourceTypeAction,
  selectedResourceType,
}) => (
  <View>
    <ScrollView
      style={styles.root}
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
  </View>
);

ResourceTypeSelector.propTypes = {
  resourceTypeFilters: shape({}).isRequired,
  selectedResourceType: string,
  selectResourceTypeAction: func.isRequired,
};

ResourceTypeSelector.defaultProps = {
  selectedResourceType: null,
};

const mapStateToProps = (state) => ({
  resourceTypeFilters: activeCollectionResourceTypeFiltersSelector(state),
  selectedResourceType: activeCollectionResourceTypeSelector(state),
});

const mapDispatchToProps = {
  selectResourceTypeAction: selectResourceType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceTypeSelector);

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.lightgrey2,
    borderColor: 'gray',
    flexDirection: 'row',
    paddingHorizontal: 5,
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
});
