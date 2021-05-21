import React, { useRef, useState } from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import Swiper from 'react-native-web-swiper';

import Colors from '../../constants/Colors';
import OBHeader from './components/OBHeader';
import OBWelcome from './sections/OBWelcome';
import OBBenefits from './sections/OBBenefits';
import OBSecurity from './sections/OBSecurity';
import OBPersonal1 from './DataAccess/OBPersonal1';
import OBPersonal2 from './DataAccess/OBPersonal2';
import OBProvider1 from './DataAccess/OBProvider1';
import OBProvider2 from './DataAccess/OBProvider2';
import OBFamiliar from './sections/OBFamiliar';
import OBProviderData from './DataOrganization/OBProviderData';
import OBYourData from './DataOrganization/OBYourData';
import OBCollections1 from './DataOrganization/OBCollections1';
import OBNavigation from './components/OBNavigation';
import OBCollections2 from './DataOrganization/OBCollections2';
import OBCollections3 from './DataOrganization/OBCollections3';
import OBCollections4 from './DataOrganization/OBCollections4';
import OBDisplaying from './DataOrganization/OBDisplaying';
import OBSummary from './DataExploration/OBSummary';
import OBUpdates from './DataExploration/OBUpdates';
import OBCatalog1 from './DataExploration/OBCatalog1';
import OBCatalog2 from './DataExploration/OBCatalog2';
import OBCatalog3 from './DataExploration/OBCatalog3';
import OBVideo from './sections/OBVideo';
import OBComplete from './sections/OBComplete';

const TOTAL_PROGRESS_POSITIONS = 11;

const getNavData = (index) => {
  switch (index) {
    case 0:
      return { isFirstScreen: true };
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
      return { progress: 6, dotNav: [2, 4] };
    case 12:
      return { progress: 6, dotNav: [3, 4] };
    case 13:
      return { progress: 6, dotNav: [4, 4] };
    case 14:
      return { progress: 7 };
    case 15:
      return { progress: 8 };
    case 16:
      return { progress: 9 };
    case 17:
      return { progress: 10, dotNav: [1, 3] };
    case 18:
      return { progress: 10, dotNav: [2, 3] };
    case 19:
      return { progress: 10, dotNav: [3, 3] };
    case 20:
      return { progress: 11 };
    case 21:
      return { isLastScreen: true };
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
        <OBSummary />
        <OBUpdates />
        <OBCatalog1 />
        <OBCatalog2 />
        <OBCatalog3 />
        <OBVideo />
        <OBComplete />
      </Swiper>
      <OBNavigation
        isFirstScreen={getNavData(currentScreenIndex).isFirstScreen}
        isLastScreen={getNavData(currentScreenIndex).isLastScreen}
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
