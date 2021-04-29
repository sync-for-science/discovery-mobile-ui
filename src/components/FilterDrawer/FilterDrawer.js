import React, {
  useRef, cloneElement, isValidElement, Children,
} from 'react';
import {
  arrayOf,
  bool, func, node, shape, string,
} from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Platform,
} from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import { toggleResourceTypeFilter } from '../../redux/action-creators';
import { orderedResourceTypeFiltersSelector } from '../../redux/selectors';

const ResourceTypeFilter = ({
  resourceType, label, filterOpen, toggleResourceTypeFilterAction,
}) => {
  let thumbColor;
  if (Platform.OS === 'ios') {
    thumbColor = 'white';
  } else {
    thumbColor = filterOpen ? Colors.primary : Colors.lightgrey;
  }

  return (
    <View style={styles.categoryRow}>
      <Text>{label}</Text>
      <Switch
        trackColor={{
          false: Colors.mediumgrey,
          true: Platform.OS === 'ios' ? Colors.primary : Colors.primaryLight,
        }}
        thumbColor={thumbColor}
        onValueChange={() => toggleResourceTypeFilterAction(resourceType)}
        value={filterOpen}
      />
    </View>
  );
};

ResourceTypeFilter.propTypes = {
  resourceType: string.isRequired,
  label: string.isRequired,
  filterOpen: bool.isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
};

const DrawerContent = ({ orderedResourceTypeFilters, toggleResourceTypeFilterAction }) => (
  <View>
    <Text style={styles.drawerTitle}>Record Type Filters</Text>
    {orderedResourceTypeFilters.map(({ type, typeIsEnabled, label }) => (
      <ResourceTypeFilter
        key={type}
        resourceType={type}
        label={label}
        filterOpen={typeIsEnabled}
        toggleResourceTypeFilterAction={toggleResourceTypeFilterAction}
      />
    ))}
  </View>
);

DrawerContent.propTypes = {
  orderedResourceTypeFilters: arrayOf(shape({
    type: string.isRequired,
    typeIsEnabled: bool.isRequired,
    label: string.isRequired,
  })).isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
};

const mapStateToProps = (state) => ({
  orderedResourceTypeFilters: orderedResourceTypeFiltersSelector(state),
});

const mapDispatchToProps = {
  toggleResourceTypeFilterAction: toggleResourceTypeFilter,
};

const DrawerContentHOC = connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

const FilterDrawer = ({
  children,
}) => {
  const drawerRef = useRef(null);
  const handleOpenDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { handleOpenDrawer });
    }
    return child;
  });

  return (
    <DrawerLayout
      ref={drawerRef}
      drawerWidth={wp('60%')}
      keyboardDismissMode="on-drag"
      drawerPosition={DrawerLayout.positions.Left}
      drawerType="front"
      drawerBackgroundColor="white"
      renderNavigationView={() => <DrawerContentHOC />}
      edgeWidth={-wp('100%')}
    >
      <View style={styles.childrenContainer}>
        {childrenWithProps}
      </View>
    </DrawerLayout>
  );
};

FilterDrawer.propTypes = {
  children: node.isRequired,
};

export default FilterDrawer;

const styles = StyleSheet.create({
  drawerTitle: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  childrenContainer: {
    flex: 1,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
