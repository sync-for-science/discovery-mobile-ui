import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { arrayOf, number, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import { actionTypes } from '../../redux/action-types';

const OBNavigation = ({
  totalScreenCount,
  dotNav,
  screenIndex,
  handlePressNext,
  handlePressBack,
}) => {
  const { h3, h6 } = TextStyles;
  const isFirstScreen = screenIndex === 0;
  const isLastScreen = screenIndex === totalScreenCount;
  const singleNavigationStyle = isFirstScreen || isLastScreen ? styles.singleNav : {};
  const currentDotNav = dotNav ? dotNav[0] : null;
  const maxDotNav = dotNav ? dotNav[1] : null;

  const navDots = [];
  if (dotNav) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < maxDotNav; i++) {
      const dotNavStyle = i === (currentDotNav - 1) ? styles.dotNavFilled : styles.dotNavEmpty;
      navDots.push(<View key={i} style={dotNavStyle} />);
    }
  }

  const dispatch = useDispatch();
  return (
    <>
      {__DEV__ && (
        <View style={styles.skipOnboarding}>
          <TouchableOpacity onPress={() => dispatch({ type: actionTypes.COMPLETE_ONBOARDING })}>
            <Text style={[h6, { color: Colors.primary }]}>Skip Onboarding</Text>
          </TouchableOpacity>
        </View>
      )}
      {dotNav && (
        <View style={styles.dotNavContainer}>
          {navDots}
        </View>
      )}
      <View style={[styles.root, singleNavigationStyle]}>
        {!isFirstScreen && !isLastScreen
        && (
        <TouchableOpacity onPress={handlePressBack}>
          <Text style={[h3, { color: Colors.primary }]}>Back</Text>
        </TouchableOpacity>
        )}
        {!isLastScreen
        && (
        <TouchableOpacity onPress={handlePressNext}>
          <Text style={[h3, { color: Colors.primary }]}>Next</Text>
        </TouchableOpacity>
        )}
        {isLastScreen
        && (
        <TouchableOpacity onPress={() => dispatch({ type: actionTypes.COMPLETE_ONBOARDING })}>
          <Text style={[h3, { color: Colors.primary }]}>Get Started</Text>
        </TouchableOpacity>
        )}
      </View>
    </>
  );
};

OBNavigation.propTypes = {
  nextScreen: string,
  screenNumber: number.isRequired,
  totalScreenCount: number.isRequired,
  dotNav: arrayOf(number.isRequired),
};

OBNavigation.defaultProps = {
  nextScreen: null,
  dotNav: null,
};

export default OBNavigation;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singleNav: {
    justifyContent: 'center',
  },
  skipOnboarding: {
    alignItems: 'center',
    marginBottom: 20,
  },
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
  },
});
