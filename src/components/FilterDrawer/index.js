import React, {
  useRef, cloneElement, isValidElement, Children,
} from 'react';
import { node } from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import RecordTypeFilters from './TypeFilter';

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
      renderNavigationView={() => <RecordTypeFilters />}
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
  childrenContainer: {
    flex: 1,
  },
});
