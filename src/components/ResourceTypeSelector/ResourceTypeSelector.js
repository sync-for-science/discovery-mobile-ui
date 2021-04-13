import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'native-base';
import {
  func, shape, string,
} from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import { PLURAL_RESOURCE_TYPES } from '../../resources/resourceTypes';
import { selectResourceType } from '../../redux/action-creators';
import { resourceTypeFiltersSelector, activeCollectionResourceTypeSelector } from '../../redux/selectors';

const CategoryButton = ({ resourceType, selectedResourceType, selectResourceTypeAction }) => {
  const categoryDisplay = PLURAL_RESOURCE_TYPES[resourceType];
  const buttonStyle = selectedResourceType === resourceType ? styles.buttonSelected : styles.button;
  const buttonTextStyle = selectedResourceType
    === resourceType ? styles.buttonSelectedText : styles.buttonText;

  return (
    <Button rounded style={buttonStyle} onPress={() => selectResourceTypeAction(resourceType)}>
      <Text style={buttonTextStyle}>{categoryDisplay}</Text>
    </Button>
  );
};

CategoryButton.propTypes = {
  resourceType: string.isRequired,
  selectedResourceType: string,
  selectResourceTypeAction: func.isRequired,
};

CategoryButton.defaultProps = {
  selectedResourceType: null,
};

const ResourceTypeSelector = ({
  resourceTypeFilters,
  selectResourceTypeAction,
  selectedResourceType,
}) => (
  <ScrollView style={styles.root} horizontal showsHorizontalScrollIndicator={false}>
    {Object.entries(resourceTypeFilters).map(([resourceType, filterOpen]) => {
      if (filterOpen) {
        return (
          <CategoryButton
            key={resourceType}
            resourceType={resourceType}
            selectedResourceType={selectedResourceType}
            selectResourceTypeAction={selectResourceTypeAction}
          />
        );
      }
      return null;
    })}
  </ScrollView>
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
  resourceTypeFilters: resourceTypeFiltersSelector(state),
  selectedResourceType: activeCollectionResourceTypeSelector(state),
});

const mapDispatchToProps = {
  selectResourceTypeAction: selectResourceType,
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
  },
  buttonSelected: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.primary,
  },
  buttonSelectedText: {
    color: 'white',
  },
  buttonText: {
    color: 'black',
  },
});
