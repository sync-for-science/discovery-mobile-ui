import React, { useRef, useState } from 'react';
import {
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import OBScreenSecurity from './DataAccess/OBScreenSecurity';

import OBHeader from './OBHeader';
import OBNavigation from './OBNavigation';
import OBScreenWelcome from './OBScreenWelcome'

const TOTAL_SCREEN_COUNT = 18

const OBScreenWalkthrough = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const swiperRef = useRef(null);
  // const currentIndex = useRef(0)
  // const currentIndex = swiperRef?.current?.state?.index
  // console.log('swiperRef.current', swiperRef.current)
  const handlePressNext = () => {
    swiperRef.current.scrollBy(1, true);
  };
  const handlePressBack = () => {
    swiperRef.current.scrollBy(-1, true);
  };
  // const isFirstOrLast = currentIndex.current === 0 || currentIndex.current === (TOTAL_SCREEN_COUNT - 1)
  // console.log('currentIndex', currentIndex)
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <OBHeader 
          // isFirstOrLast={isFirstOrLast}
          // screenIndex={currentIndex}
          // progressMarker={currentIndex}
          totalProgressMarkers={TOTAL_SCREEN_COUNT}
        />
        <Swiper
          ref={swiperRef}
          loop={false}
          index={0}
          showsPagination={true}
          paginationStyle={{backgroundColor: 'red', justifyContent: 'flex-end'}}
          // showsButtons={true}
          // buttonWrapperStyle={{backgroundColor: 'red', alignItems: 'flex-end'}}
          // onIndexChanged={(index) => setCurrentScreenIndex(index)}
        >
          <OBScreenWelcome />
          <OBScreenSecurity />
        </Swiper>
        <OBNavigation
          // screenIndex={currentScreenIndex}
          handlePressNext={handlePressNext}
          handlePressBack={handlePressBack}
          totalScreenCount={TOTAL_SCREEN_COUNT}
        />
      </View>
    </SafeAreaView>
  );
};

export default OBScreenWalkthrough;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  root: {
    flex: 1,
    margin: 20,
  },
});
