import React, { useEffect } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  arrayOf, func, shape, string, bool,
} from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import { selectResourceType } from '../../redux/action-creators';
import { orderedResourceTypeFiltersSelector, activeCollectionResourceTypeSelector } from '../../redux/selectors';
import BaseText from '../Generic/BaseText';

const CategoryButton = ({
  resourceType, label, isActive, selectResourceTypeAction,
}) => {
  const buttonStyle = isActive ? styles.buttonSelected : styles.button;
  const buttonTextStyle = isActive ? styles.buttonSelectedText : styles.buttonText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => selectResourceTypeAction(resourceType)}>
      <BaseText style={buttonTextStyle}>{label}</BaseText>
    </TouchableOpacity>
  );
};

CategoryButton.propTypes = {
  resourceType: string.isRequired,
  label: string.isRequired,
  isActive: bool.isRequired,
  selectResourceTypeAction: func.isRequired,
};

CategoryButton.defaultProps = {
};

const ResourceTypePicker = ({
  resourceTypeFilters,
  selectResourceTypeAction,
  selectedResourceType,
}) => {
  // select first resourceType on initial load
  useEffect(() => {
    let firstEnabledType;
    resourceTypeFilters.forEach(({ type, typeIsEnabled }) => {
      if (!firstEnabledType && typeIsEnabled && !resourceTypeFilters[selectResourceType]) {
        firstEnabledType = type;
      }
    });
    selectResourceTypeAction(firstEnabledType);
  }, [resourceTypeFilters]);

  return (
    <View>
      <ScrollView
        style={styles.root}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {
          resourceTypeFilters
            .filter(({ typeIsEnabled }) => typeIsEnabled === true)
            .map(({ type, label }) => (
              <CategoryButton
                key={type}
                resourceType={type}
                label={label}
                isActive={selectedResourceType === type}
                selectResourceTypeAction={selectResourceTypeAction}
              />
            ))
        }
      </ScrollView>
    </View>
  );
};

ResourceTypePicker.propTypes = {
  resourceTypeFilters: arrayOf(shape({
    type: string.isRequired,
    typeIsEnabled: bool.isRequired,
    label: string.isRequired,
  })).isRequired,
  selectedResourceType: string,
  selectResourceTypeAction: func.isRequired,
};

ResourceTypePicker.defaultProps = {
  selectedResourceType: null,
};

const mapStateToProps = (state) => ({
  resourceTypeFilters: orderedResourceTypeFiltersSelector(state),
  selectedResourceType: activeCollectionResourceTypeSelector(state),
});

const mapDispatchToProps = {
  selectResourceTypeAction: selectResourceType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceTypePicker);

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
    borderColor: 'white',
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
