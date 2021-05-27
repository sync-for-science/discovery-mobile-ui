import React, { useRef, useState } from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import Swiper from 'react-native-web-swiper';
import { func } from 'prop-types';

import OBHeader from './components/OBHeader';
import OBWelcome from './sections/OBWelcome';
import OBBenefits from './sections/OBBenefits';
import OBSecurity from './sections/OBSecurity';
import OBPersonal1 from './DataAccess/OBPersonal1';
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
import OBMainConceptsSection from './sections/OBMainConceptsSection';
import OBMainConcepts1 from './MainConcepts/MainConcepts1';
import OBMainConcepts2 from './MainConcepts/MainConcepts2';
import OBMainConcepts3 from './MainConcepts/MainConcepts3';
import OBKeyFeatures from './sections/OBKeyFeatures';
import OBKeyFeatures1 from './KeyFeatures/OBKeyFeatures1';
import OBKeyFeatures2 from './KeyFeatures/OBKeyFeatures2';
import OBKeyFeatures3 from './KeyFeatures/OBKeyFeatures3';
import OBKeyFeatures4 from './KeyFeatures/OBKeyFeatures4';
import OBKeyFeatures5 from './KeyFeatures/OBKeyFeatures5';
import OBKeyFeatures6 from './KeyFeatures/OBKeyFeatures6';
import OBDataAccess from './sections/OBDataAccess';
import OBDataAccess1 from './DataAccess/OBDataAccess1';

const TOTAL_PROGRESS_POSITIONS = 11;

const getNavData = (index) => {
  switch (index) {
    case 0:
      return { isFirstScreen: true };
    case 1:
      return { progress: 1 };
    case 2:
      return { progress: 2 };
    case 3:
      return { progress: 3, dotNav: [1, 3] };
    case 4:
      return { progress: 3, dotNav: [2, 3] };
    case 5:
      return { progress: 3, dotNav: [3, 3] };
    case 6:
      return { progress: 4 };
    case 7:
      return { progress: 5, dotNav: [1, 6] };
    case 8:
      return { progress: 5, dotNav: [2, 6] };
    case 9:
      return { progress: 5, dotNav: [3, 6] };
    case 10:
      return { progress: 5, dotNav: [4, 6] };
    case 11:
      return { progress: 5, dotNav: [5, 6] };
    case 12:
      return { progress: 5, dotNav: [6, 6] };
    case 13:
      return { progress: 6 };
    case 14:
      return { progress: 7 };
    case 15:
      return { progress: 8 };
    case 16:
      return { progress: 9, dotNav: [1, 4] };
    case 17:
      return { progress: 9, dotNav: [2, 4] };
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

const OBScreenWalkthrough = ({ handleOnboardingState }) => {
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
        <OBMainConceptsSection />
        <OBMainConcepts1 />
        <OBMainConcepts2 />
        <OBMainConcepts3 />
        <OBKeyFeatures />
        <OBKeyFeatures1 />
        <OBKeyFeatures2 />
        <OBKeyFeatures3 />
        <OBKeyFeatures4 />
        <OBKeyFeatures5 />
        <OBKeyFeatures6 />
        <OBVideo />
        <OBSecurity />
        <OBDataAccess />
        <OBDataAccess1 />
        {/* <OBDataAccess2 /> */}
        <OBPersonal1 />
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
        <OBComplete />
      </Swiper>
      <OBNavigation
        isFirstScreen={getNavData(currentScreenIndex).isFirstScreen}
        isLastScreen={getNavData(currentScreenIndex).isLastScreen}
        dotNav={getNavData(currentScreenIndex).dotNav}
        handlePressNext={() => swiperRef.current.goToNext()}
        handlePressBack={() => swiperRef.current.goToPrev()}
        handleOnboardingState={handleOnboardingState}
      />
    </SafeAreaView>
  );
};

OBScreenWalkthrough.propTypes = {
  handleOnboardingState: func.isRequired,
};

export default OBScreenWalkthrough;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
