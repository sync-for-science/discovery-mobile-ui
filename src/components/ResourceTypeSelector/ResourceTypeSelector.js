import React from 'react';
import {
  StyleSheet, Text, View,
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
import { filteredResourceTypesSelector } from '../../redux/selectors';

const CategoryButton = ({ resourceType, selectedResourceType, selectResourceTypeAction }) => {
  const categoryDisplay = PLURAL_RESOURCE_TYPES[resourceType];
  const buttonStyle = selectedResourceType === resourceType ? styles.buttonSelected : styles.button;
  const buttonTextStyle = selectedResourceType
    === resourceType ? styles.buttonSelectedText : styles.buttonText;

  return (
    <View>
      <Button rounded style={buttonStyle} onPress={() => selectResourceTypeAction(resourceType)}>
        <Text style={buttonTextStyle}>{categoryDisplay}</Text>
      </Button>
    </View>
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
  selectResourceTypeAction,
  selectedResourceType,
  filteredResourceTypes,
}) => {
  const hasResourceTypes = Object.keys(filteredResourceTypes).length > 0;

  if (!hasResourceTypes) {
    return (
      <View style={styles.noResourceTypesTextContainer}>
        <Text style={styles.noResourceTypesText}>(No Resources to Filter)</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.root}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {Object.entries(filteredResourceTypes).map(([resourceType, filterOpen]) => {
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
};

ResourceTypeSelector.propTypes = {
  filteredResourceTypes: shape({}).isRequired,
  selectedResourceType: string,
  selectResourceTypeAction: func.isRequired,
};

ResourceTypeSelector.defaultProps = {
  selectedResourceType: null,
};

const mapStateToProps = (state) => ({
  filteredResourceTypes: filteredResourceTypesSelector(state),
  selectedResourceType: state.selectedResourceType,
});

const mapDispatchToProps = {
  selectResourceTypeAction: selectResourceType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceTypeSelector);

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.mediumgrey,
    borderColor: 'gray',
    flexDirection: 'row',
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
  contentContainerStyle: {
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
  },
  noResourceTypesTextContainer: {
    height: 65,
    width: '100%',
    backgroundColor: Colors.mediumgrey,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResourceTypesText: {
    color: Colors.darkgrey,
    fontStyle: 'italic',
  },
});
