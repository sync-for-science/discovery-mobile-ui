import { number } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';

const OBDotNav = ({ current, max }) => {
  const navDots = [];
  if (current) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < max; i++) {
      const dotNavStyle = i === (current - 1) ? styles.dotNavFilled : styles.dotNavEmpty;
      navDots.push(<View key={i} style={dotNavStyle} />);
    }
  }
  return (
    <View style={styles.dotNavContainer}>
      {navDots}
    </View>
  );
};

OBDotNav.propTypes = {
  current: number.isRequired,
  max: number.isRequired,
};

export default OBDotNav;

const styles = StyleSheet.create({
  dotNavFilled: {
    height: 8,
    width: 8,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotNavEmpty: {
    height: 8,
    width: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    marginHorizontal: 4,
  },
  dotNavContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
});
