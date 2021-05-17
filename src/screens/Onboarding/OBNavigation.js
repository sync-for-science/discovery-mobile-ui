import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { number, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import { actionTypes } from '../../redux/action-types';

const OBNavigation = ({ nextScreen, screenNumber, totalScreenCount }) => {
  const { h3, h6 } = TextStyles;
  const navigation = useNavigation();
  const isFirstScreen = screenNumber === 1;
  const isLastScreen = screenNumber === totalScreenCount;
  const singleNavigationStyle = isFirstScreen || isLastScreen ? styles.singleNav : {};

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
        {!isFirstScreen
        && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[h3, { color: Colors.primary }]}>Back</Text>
        </TouchableOpacity>
        )}
        {!isLastScreen
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
  screenNumber: number.isRequired,
  totalScreenCount: number.isRequired,
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
