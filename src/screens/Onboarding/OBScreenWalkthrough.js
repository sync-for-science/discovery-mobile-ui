import React, { useRef, useState } from 'react';
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';
import Swiper from 'react-native-web-swiper'
import OBScreenSecurity from './DataAccess/OBScreenSecurity';

import Colors from '../../constants/Colors'
import OBHeader from './OBHeader';
import OBWelcome from './OBWelcome'

const TOTAL_SCREEN_COUNT = 18

const OBScreenWalkthrough = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const swiperRef = useRef(null);

  
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <OBHeader 
          screenIndex={currentScreenIndex}
          totalScreenCount={TOTAL_SCREEN_COUNT}
        />
        <Swiper
          ref={swiperRef}
          from={0}
          loop={false}
          onIndexChanged={(index) => setCurrentScreenIndex(index)}
          controlsProps={{
            dotsPos: false,
            nextTitleStyle: styles.navButton,
            prevTitleStyle: styles.navButton
          }}
        >
          <OBWelcome />
          <OBScreenSecurity />
        </Swiper>
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
  navButton: {
    fontSize: 24, 
    fontWeight: '700', 
    color: Colors.primary
  }
});
