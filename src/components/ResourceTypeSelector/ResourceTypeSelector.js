import React, { useEffect } from 'react';
import {
  StyleSheet, Text, ScrollView,
} from 'react-native';
import { Button } from 'native-base';
import {
  bool, func, shape, string,
} from 'prop-types';
import { connect } from 'react-redux';

import { supportedResourceTypeFiltersSelector } from '../../redux/selectors';
import Colors from '../../constants/Colors';
import RESOURCE_TYPES from '../../resources/resourceTypes';
import { selectResourceType } from '../../redux/epics';

const ResourceTypeSelector = ({ resourceTypeFilters, selectResourceType, selectedResourceType }) => {
  const CategoryButton = ({ resourceType, selected }) => {
    const categoryDisplay = RESOURCE_TYPES[resourceType];
    const buttonStyle = selected === resourceType ? styles.buttonSelected : styles.button;
    const buttonTextStyle = selected === resourceType ? styles.buttonSelectedText : null;
    return (
      <Button style={buttonStyle} onPress={() => selectResourceType(resourceType)}>
        <Text style={buttonTextStyle}>{categoryDisplay}</Text>
      </Button>
    );
  };

  CategoryButton.propTypes = {
    resourceType: string.isRequired,
    selected: bool.isRequired,
  };

  return (
    <ScrollView style={styles.root} horizontal showsHorizontalScrollIndicator={false}>
      {Object.entries(resourceTypeFilters).map(([resourceType, filterOpen]) => {
        if (filterOpen) {
          return (
            <CategoryButton
              key={resourceType}
              resourceType={resourceType}
              selected={selectedResourceType}
            />
          );
        }
        return null;
      })}
    </ScrollView>
  );
};

ResourceTypeSelector.propTypes = {
  resourceTypeFilters: shape({}).isRequired,
  selectResourceType: func.isRequired,
};

const mapStateToProps = (state) => ({
  resourceTypeFilters: supportedResourceTypeFiltersSelector(state),
  selectedResourceType: state.selectedResourceType
});

const mapDispatchToProps = {
  selectResourceType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceTypeSelector);

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.mediumgrey,
    borderColor: 'gray',
    marginTop: 20,
    flexDirection: 'row',
    padding: 10,
  },
  button: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  buttonSelected: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.primary,
    borderRadius: 30,
  },
  buttonSelectedText: {
    color: 'white',
  },
});
