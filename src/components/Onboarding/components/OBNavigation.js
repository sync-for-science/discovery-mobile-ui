import React from 'react';
import {
  Button,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {
  arrayOf, func, number, bool,
} from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TextStyles from '../../../constants/TextStyles';
import ResponsiveDimensions from '../../../constants/ResponsiveDimensions';
import Colors from '../../../constants/Colors';

const NavButtons = ({
  isFirstScreen,
  isLastScreen,
  handlePressNext,
  handlePressBack,
}) => {
  if (isFirstScreen) {
    return (
      <View style={[styles.root, styles.rightNav]}>
        <TouchableOpacity onPress={handlePressNext}>
          <Text style={styles.navButton}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (isLastScreen) {
    return <View style={styles.root} />;
  }

  return (
    <View style={[styles.root, styles.splitNav]}>
      <TouchableOpacity onPress={handlePressBack}>
        <Text style={styles.navButton}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressNext}>
        <Text style={styles.navButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

NavButtons.propTypes = {
  isFirstScreen: bool,
  isLastScreen: bool,
  handlePressBack: func.isRequired,
  handlePressNext: func.isRequired,
};

NavButtons.defaultProps = {
  isFirstScreen: false,
  isLastScreen: false,
};

const OBNavigation = ({
  isFirstScreen,
  isLastScreen,
  dotNav,
  handlePressNext,
  handlePressBack,
  handleOnboardingState,
}) => {
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

  return (
    <View style={styles.navContainer}>
      {__DEV__ && (
        <View style={styles.skipOnboarding}>
          <Button title="Skip Onboarding" onPress={() => handleOnboardingState(true)} />
        </View>
      )}
      <View style={styles.dotNavContainer}>
        {navDots}
      </View>
      <NavButtons
        isFirstScreen={isFirstScreen}
        isLastScreen={isLastScreen}
        handlePressBack={handlePressBack}
        handlePressNext={handlePressNext}
        handleOnboardingState={handleOnboardingState}
      />
    </View>
  );
};

OBNavigation.propTypes = {
  isFirstScreen: bool,
  isLastScreen: bool,
  dotNav: arrayOf(number.isRequired),
  handlePressBack: func.isRequired,
  handlePressNext: func.isRequired,
  handleOnboardingState: func.isRequired,
};

OBNavigation.defaultProps = {
  isFirstScreen: null,
  isLastScreen: null,
  dotNav: null,
};

export default OBNavigation;

const { h4 } = TextStyles;
const { rd1, rd2, rd5 } = ResponsiveDimensions;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rd5,
    height: hp('4%'),
  },
  centerNav: {
    justifyContent: 'center',
  },
  rightNav: {
    justifyContent: 'flex-end',
  },
  splitNav: {
    justifyContent: 'space-between',
  },
  skipOnboarding: {
    alignItems: 'center',
    marginBottom: rd5,
  },
  dotNavFilled: {
    height: '100%',
    width: rd2,
    backgroundColor: Colors.logoBlue,
    borderRadius: rd1,
    marginHorizontal: rd1,
  },
  dotNavEmpty: {
    height: '100%',
    width: rd2,
    borderRadius: rd1,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    marginHorizontal: rd1,
  },
  dotNavContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: rd2,
  },
  navButton: {
    ...h4,
    color: Colors.logoBlue,
  },
  navContainer: {
    marginBottom: rd5,
  },
});
