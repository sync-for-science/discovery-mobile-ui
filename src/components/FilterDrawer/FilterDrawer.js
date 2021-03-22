import React from 'react';
import {
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

import { PLURAL_RESOURCE_TYPES } from '../../resources/resourceTypes';
import Colors from '../../constants/Colors';
import { toggleResourceTypeFilter } from '../../redux/action-creators';
import { orderedResourceTypeFiltersSelector } from '../../redux/selectors';

const ResourceTypeFilter = ({ resourceType, filterOpen, toggleResourceTypeFilterAction }) => {
  const label = PLURAL_RESOURCE_TYPES[resourceType];
  let thumbColor;
  if (filterOpen) {
    thumbColor = Platform.OS === 'ios' ? 'white' : Colors.primary;
  } else {
    thumbColor = Platform.OS === 'ios' ? 'white' : Colors.lightgrey;
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
  filterOpen: bool.isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
};

const FilterDrawer = ({
  toggleResourceTypeFilterAction,
  orderedResourceTypeFilters,
  children,
}) => {
  const renderDrawer = () => (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerTitle}>Resource Type Filters</Text>
      {Object.entries(orderedResourceTypeFilters).map(([resourceType, value]) => (
        <ResourceTypeFilter
          key={resourceType}
          resourceType={resourceType}
          filterOpen={value}
          toggleResourceTypeFilterAction={toggleResourceTypeFilterAction}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <DrawerLayout
        drawerWidth={wp('60%')}
        keyboardDismissMode="on-drag"
        drawerPosition={DrawerLayout.positions.Left}
        drawerType="front"
        drawerBackgroundColor="white"
        renderNavigationView={renderDrawer}
      >
        <View style={styles.childrenContainer}>
          {children}
        </View>
      </DrawerLayout>
    </View>
  );
};

FilterDrawer.propTypes = {
  orderedResourceTypeFilters: shape({}).isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
  children: node.isRequired,
};

const mapStateToProps = (state) => ({
  orderedResourceTypeFilters: orderedResourceTypeFiltersSelector(state),
});

const mapDispatchToProps = {
  toggleResourceTypeFilterAction: toggleResourceTypeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 10,
  },
  drawerTitle: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  childrenContainer: {
    width: '100%',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
