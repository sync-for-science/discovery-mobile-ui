import React from 'react';
import { Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { actionTypes } from '../../redux/action-types';
import TextStyles from '../../resources/textStyles'
import Colors from '../../constants/Colors'

const OnboardingPage1 = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.root}>
      <Text style={TextStyles.h1}>Welcome to Discovery</Text>
      <View style={{height: 50, backgroundColor: Colors.mediumgrey, margin: 20}}>
        <Text style={[TextStyles.h2, {fontStyle: 'italic', color: Colors.lightgrey}]}>LOGO HERE</Text>
      </View>
      <View style={{margin: 20}}>
        <Text style={[TextStyles.h4, TextStyles.alignCenter]}>Use Discover to explore your personal medical data</Text>
      </View>
      <View style={{margin: 20}}>
        <View>
          <Text style={[TextStyles.h5, TextStyles.alignCenter]}>ACCESS</Text>
        </View>
        <View>
          <Text style={[TextStyles.h5, TextStyles.alignCenter]}>ORGANIZE</Text>
        </View>
        <View>
          <Text style={[TextStyles.h5, TextStyles.alignCenter]}>EXPLORE</Text>
        </View>
        <View>
          <Text style={[TextStyles.h5, TextStyles.alignCenter]}>USE</Text>
        </View>
      </View>
      <View>
        <Button
          onPress={() => dispatch({ type: actionTypes.COMPLETE_ONBOARDING })}
          style={{ paddingHorizontal: 20 }}
        >
          <Text>SKIP ONBOARDING</Text>
        </Button>
      </View>
    </View>
  );
};

export default OnboardingPage1;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
});
