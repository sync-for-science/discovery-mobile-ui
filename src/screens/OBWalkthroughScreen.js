import React, { useRef, useState } from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import Swiper from 'react-native-web-swiper';
import { func } from 'prop-types';

import OBHeader from '../components/Onboarding/components/OBHeader';
import OBNavigation from '../components/Onboarding/components/OBNavigation';
import OBWelcome from '../components/Onboarding/sections/OBWelcome';
import OBBenefits from '../components/Onboarding/sections/OBBenefits';
import OBMainConcepts from '../components/Onboarding/sections/OBMainConcepts';
import OBMainConcepts1 from '../components/Onboarding/MainConcepts/MainConcepts1';
import OBMainConcepts2 from '../components/Onboarding/MainConcepts/MainConcepts2';
import OBMainConcepts3 from '../components/Onboarding/MainConcepts/MainConcepts3';
import OBKeyFeatures from '../components/Onboarding/sections/OBKeyFeatures';
import OBKeyFeatures1 from '../components/Onboarding/KeyFeatures/OBKeyFeatures1';
import OBKeyFeatures2 from '../components/Onboarding/KeyFeatures/OBKeyFeatures2';
import OBKeyFeatures3 from '../components/Onboarding/KeyFeatures/OBKeyFeatures3';
import OBKeyFeatures4 from '../components/Onboarding/KeyFeatures/OBKeyFeatures4';
import OBKeyFeatures5 from '../components/Onboarding/KeyFeatures/OBKeyFeatures5';
import OBKeyFeatures6 from '../components/Onboarding/KeyFeatures/OBKeyFeatures6';
import OBVideo from '../components/Onboarding/sections/OBVideo';
import OBSecurity from '../components/Onboarding/sections/OBSecurity';
import OBDataAccess from '../components/Onboarding/sections/OBDataAccess';
import OBDataAccess1 from '../components/Onboarding/DataAccess/OBDataAccess1';
import OBDataAccess3 from '../components/Onboarding/DataAccess/OBDataAccess3';
import OBDataAccess4 from '../components/Onboarding/DataAccess/OBDataAccess4';
import OBComplete from '../components/Onboarding/sections/OBComplete';
import OBSecurityAndPrivacy from '../components/Onboarding/sections/OBSecurityAndPrivacy';
import OBEvaluation from '../components/Onboarding/sections/OBEvaluation';

const TOTAL_PROGRESS_POSITIONS = 9;

const getNavData = (index) => {
  switch (index) {
    case 0:
      return { isFirstScreen: true };
    case 1:
      return { progress: 1 };
    case 2:
      return { progress: 2 };
    case 3:
      return { progress: 3 };
    case 4:
      return { progress: 4 };
    case 5:
      return { progress: 5, dotNav: [1, 3] };
    case 6:
      return { progress: 5, dotNav: [2, 3] };
    case 7:
      return { progress: 5, dotNav: [3, 3] };
    case 8:
      return { progress: 6 };
    case 9:
      return { progress: 7, dotNav: [1, 6] };
    case 10:
      return { progress: 7, dotNav: [2, 6] };
    case 11:
      return { progress: 7, dotNav: [3, 6] };
    case 12:
      return { progress: 7, dotNav: [4, 6] };
    case 13:
      return { progress: 7, dotNav: [5, 6] };
    case 14:
      return { progress: 7, dotNav: [6, 6] };
    case 15:
      return { progress: 8 };
    case 16:
      return { progress: 9, isLastScreen: true };
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
        <OBSecurityAndPrivacy />
        <OBEvaluation />
        <OBBenefits />
        <OBMainConcepts />
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
        <OBComplete handleOnboardingState={handleOnboardingState} />
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
