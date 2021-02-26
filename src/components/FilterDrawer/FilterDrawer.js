import React from 'react';
import { node } from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Switch,
} from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {connect} from 'react-redux'

import RESOURCE_TYPES from '../../resources/resourceTypes';

const FilterDrawer = ({ resourceIdsGroupedByType, children }) => {

  const CategoryFilter = ({subType}) => {
    const label = RESOURCE_TYPES[subType]
    return (
      <View style={styles.categoryRow}>
        <Text>{label}</Text>
        <Switch />
      </View>
    )
  }

  const renderDrawer = () => (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerTitle}>Category Filters</Text>
      {Object.keys(resourceIdsGroupedByType).map(subType => {
        if (resourceIdsGroupedByType[subType].filterable) {
          return (
            <CategoryFilter key={subType} subType={subType} />
          )
        }
        return null
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <DrawerLayout
        drawerWidth={wp('60%')}
        keyboardDismissMode="on-drag"
        drawerPosition={DrawerLayout.positions.Left}
        drawerType="front"
        drawerBackgroundColor="#ddd"
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
  children: node.isRequired,
};

const mapStateToProps = (state) => ({
  resourceIdsGroupedByType: state.resourceIdsGroupedByType
})

export default connect(mapStateToProps, null)(FilterDrawer);

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
    flex: 1,
    alignItems: 'center',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
