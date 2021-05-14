import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { bool, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import { actionTypes } from '../../redux/action-types';

const OBNavigation = ({ nextScreen, firstScreen, lastScreen }) => {
  const { h3, h6 } = TextStyles;
  const navigation = useNavigation();
  const singleNavigationStyle = firstScreen || lastScreen ? styles.singleNav : {};
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.skipOnboarding}>
        {__DEV__
        && (
        <TouchableOpacity onPress={() => dispatch({ type: actionTypes.COMPLETE_ONBOARDING })}>
          <Text style={[h6, { color: Colors.primary }]}>Skip Onboarding</Text>
        </TouchableOpacity>
        )}
      </View>
      <View style={[styles.root, singleNavigationStyle]}>
        {!firstScreen
        && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[h3, { color: Colors.primary }]}>Back</Text>
        </TouchableOpacity>
        )}
        {!lastScreen
        && (
        <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
          <Text style={[h3, { color: Colors.primary }]}>Next</Text>
        </TouchableOpacity>
        )}
      </View>
    </>
  );
};

OBNavigation.propTypes = {
  nextScreen: string.isRequired,
  firstScreen: bool,
  lastScreen: bool,
};

OBNavigation.defaultProps = {
  firstScreen: false,
  lastScreen: false,
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
});
