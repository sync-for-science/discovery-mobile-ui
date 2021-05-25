import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

import {
  arrayOf, func, number, bool,
} from 'prop-types';
import TextStyles from '../../../constants/TextStyles';
import Colors from '../../../constants/Colors';

const { h3, h6 } = TextStyles;

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
          <Text style={[h3, styles.navButton]}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (isLastScreen) {
    return (
      <View style={[styles.root, styles.centerNav]}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[h3, styles.navButton]}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.root, styles.splitNav]}>
      <TouchableOpacity onPress={handlePressBack}>
        <Text style={[h3, styles.navButton]}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressNext}>
        <Text style={[h3, styles.navButton]}>Next</Text>
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
    <>
      {__DEV__ && (
        <View style={styles.skipOnboarding}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[h6, styles.navButton]}>Skip Onboarding</Text>
          </TouchableOpacity>
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
      />
    </>
  );
};

OBNavigation.propTypes = {
  isFirstScreen: bool,
  isLastScreen: bool,
  dotNav: arrayOf(number.isRequired),
  handlePressBack: func.isRequired,
  handlePressNext: func.isRequired,
};

OBNavigation.defaultProps = {
  isFirstScreen: null,
  isLastScreen: null,
  dotNav: null,
};

export default OBNavigation;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
    marginBottom: 20,
  },
  dotNavFilled: {
    height: '100%',
    width: 8,
    backgroundColor: Colors.logoBlue,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotNavEmpty: {
    height: '100%',
    width: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    marginHorizontal: 4,
  },
  dotNavContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 8,
  },
  navButton: {
    color: Colors.logoBlue,
  },
});
