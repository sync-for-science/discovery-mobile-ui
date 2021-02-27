import React from 'react';
import {
  bool, func, node, shape, string,
} from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Switch,
} from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import { supportedResourceTypeFiltersSelector } from '../../redux/selectors';
import RESOURCE_TYPES from '../../resources/resourceTypes';
import Colors from '../../constants/Colors';
import { toggleResourceTypeFilter } from '../../redux/epics';

const FilterDrawer = ({ resourceTypeFilters, toggleResourceTypeFilterAction, children }) => {
  const ResourceTypeFilter = ({ resourceType, filterOpen }) => {
    const label = RESOURCE_TYPES[resourceType];
    return (
      <View style={styles.categoryRow}>
        <Text>{label}</Text>
        <Switch
          trackColor={{ false: Colors.mediumgrey, true: Colors.primary }}
          onValueChange={() => toggleResourceTypeFilterAction(resourceType)}
          value={filterOpen}
        />
      </View>
    );
  };

  ResourceTypeFilter.propTypes = {
    resourceType: string.isRequired,
    filterOpen: bool.isRequired,
  };

  const renderDrawer = () => (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerTitle}>Resource Type Filters</Text>
      {Object.entries(resourceTypeFilters).map(([resourceType, value]) => (
        <ResourceTypeFilter
          key={resourceType}
          resourceType={resourceType}
          filterOpen={value.filterOpen}
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
  resourceTypeFilters: shape({}).isRequired,
  toggleResourceTypeFilterAction: func.isRequired,
  children: node.isRequired,
};

const mapStateToProps = (state) => ({
  resourceTypeFilters: supportedResourceTypeFiltersSelector(state),
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
