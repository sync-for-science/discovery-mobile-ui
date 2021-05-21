import React, { useRef, useState } from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import Swiper from 'react-native-web-swiper';

import Colors from '../../constants/Colors';
import OBHeader from './OBHeader';
import OBWelcome from './OBWelcome';
import OBBenefits from './OBBenefits';
import OBSecurity from './OBSecurity';
import OBPersonal1 from './DataAccess/OBPersonal1';
import OBPersonal2 from './DataAccess/OBPersonal2';
import OBProvider1 from './DataAccess/OBProvider1';
import OBProvider2 from './DataAccess/OBProvider2';
import OBFamiliar from './OBFamiliar';
import OBProviderData from './DataOrganization/OBProviderData';
import OBYourData from './DataOrganization/OBYourData';
import OBCollections1 from './DataOrganization/OBCollections1';

const TOTAL_PROGRESS_POSITIONS = 18;

const getProgressPosition = (index) => {
  switch (index) {
    case 0:
    case 1:
    case 2:
      return null;
    case 3:
      return 1;
    case 4:
      return 2;
    case 5:
    case 6:
      return 3;
    case 7:
      return null;
    case 8:
      return 4;
    case 9:
      return 5;
    case 10:
      return 6;
    default:
      return null;
  }
};

const OBScreenWalkthrough = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <OBHeader
        progressPosition={getProgressPosition(currentScreenIndex)}
        totalProgressPositions={TOTAL_PROGRESS_POSITIONS}
      />
      <Swiper
        ref={swiperRef}
        from={0}
        loop={false}
        onIndexChanged={(index) => setCurrentScreenIndex(index)}
        controlsProps={{
          dotsPos: false,
          nextTitleStyle: styles.navButton,
          prevTitleStyle: styles.navButton,
        }}
      >
        <OBWelcome />
        <OBBenefits />
        <OBSecurity />
        <OBPersonal1 />
        <OBPersonal2 />
        <OBProvider1 />
        <OBProvider2 />
        <OBFamiliar />
        <OBProviderData />
        <OBYourData />
        <OBCollections1 />
      </Swiper>

    </SafeAreaView>
  );
};

export default OBScreenWalkthrough;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  navButton: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
  },
});
