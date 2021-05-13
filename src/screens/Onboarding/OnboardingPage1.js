import React from 'react';
import { Button } from 'native-base';
import {
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { actionTypes } from '../../redux/action-types';
import TextStyles from '../../resources/textStyles';
import Colors from '../../constants/Colors';

const OnboardingScreen1 = () => {
  const { h1, h2, h4, h5, alignCenter, italic } = TextStyles
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.contentContainer}>
        <View style={{ marginTop: 60 }}>
          <Text style={h1}>Welcome to Discovery</Text>
        </View>
        <View style={styles.logoContainer}>
          <Text style={[h2, alignCenter, italic, { color: Colors.lightgrey}]}>LOGO HERE</Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text style={[h4, alignCenter]}>Use Discover to explore your personal medical data</Text>
        </View>
        <View style={{ margin: 20 }}>
          <View>
            <Text style={[h5, alignCenter]}>ACCESS</Text>
          </View>
          <View>
            <Text style={[h5, alignCenter]}>ORGANIZE</Text>
          </View>
          <View>
            <Text style={[h5, alignCenter]}>EXPLORE</Text>
          </View>
          <View>
            <Text style={[h5, alignCenter]}>USE</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <View>
          <Button
            onPress={() => dispatch({ type: actionTypes.COMPLETE_ONBOARDING })}
            style={{ paddingHorizontal: 20 }}
          >
            <Text>SKIP ONBOARDING</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 60,
    justifyContent: 'space-between',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    height: 100,
    width: 100,
    backgroundColor: Colors.mediumgrey,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationContainer: {
    alignItems: 'center',
  },
});
