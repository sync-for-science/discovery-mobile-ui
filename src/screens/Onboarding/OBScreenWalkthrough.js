import React, {useRef, useState} from 'react'
import {SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import OBHeader from './OBHeader'
import OBNavigation from './OBNavigation'

const OBScreenWalkthrough = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0)
  const swiperRef = useRef(null)
  const handlePressNext = () => {
    setCurrentScreenIndex(currentScreenIndex + 1)
    swiperRef.current.scrollBy(1, true)
  }
  const handlePressBack = () => {
    setCurrentScreenIndex(currentScreenIndex - 1)
    swiperRef.current.scrollBy(-1, true)
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.root}>
        <OBHeader />
        <Swiper
          ref={swiperRef}
          loop={false}
          index={0}
          showsPagination={false}
        >
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Bye</Text>
          </View>
          <View>
            <Text>Bye</Text>
          </View>
        </Swiper>
        <OBNavigation 
          screenIndex={currentScreenIndex} 
          handlePressNext={handlePressNext}
          handlePressBack={handlePressBack}
          totalScreenCount={18}
        />
      </View>
    </SafeAreaView>
  )
}

export default OBScreenWalkthrough

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  root: {
    flex: 1,
    margin: 20
  }
})
