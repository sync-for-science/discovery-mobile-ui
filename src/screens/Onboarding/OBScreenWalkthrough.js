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
import OBNavigation from './OBNavigation';
import OBCollections2 from './DataOrganization/OBCollections2';
import OBCollections3 from './DataOrganization/OBCollections3';
import OBCollections4 from './DataOrganization/OBCollections4';
import OBDisplaying from './DataOrganization/OBDisplaying';

const TOTAL_PROGRESS_POSITIONS = 18;

const getNavData = (index) => {
  switch (index) {
    case 0:
    case 1:
    case 2:
      return {};
    case 3:
      return { progress: 1 };
    case 4:
      return { progress: 2 };
    case 5:
    case 6:
      return { progress: 3 };
    case 7:
      return {};
    case 8:
      return { progress: 4 };
    case 9:
      return { progress: 5 };
    case 10:
      return { progress: 6, dotNav: [1, 4] };
    case 11:
      return { progress: 7, dotNav: [2, 4] };
    case 12:
      return { progress: 7, dotNav: [3, 4] };
    case 13:
      return { progress: 7, dotNav: [4, 4] };
    case 14:
      return { progress: 8 };
    default:
      return {};
  }
};

const OBScreenWalkthrough = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <OBHeader
        progressPosition={getNavData(currentScreenIndex).progress}
        totalProgressPositions={TOTAL_PROGRESS_POSITIONS}
      />
      <Swiper
        ref={swiperRef}
        from={0}
        loop={false}
        onIndexChanged={(index) => setCurrentScreenIndex(index)}
        controlsEnabled={false}
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
        <OBCollections2 />
        <OBCollections3 />
        <OBCollections4 />
        <OBDisplaying />
      </Swiper>
      <OBNavigation
        screenIndex={currentScreenIndex}
        totalScreenCount={20}
        dotNav={getNavData(currentScreenIndex).dotNav}
        handlePressNext={() => swiperRef.current.goToNext()}
        handlePressBack={() => swiperRef.current.goToPrev()}
      />
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
