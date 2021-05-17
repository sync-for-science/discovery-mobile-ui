import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import OBTemplate from '../OBTemplate'
import TextStyles from '../../../constants/TextStyles'

const SCREEN_NUMBER = 3;
const SECTION_TITLE = 'Data Access';
const NEXT_SCREEN = "Info"

// wireframe page 5
const OBScreenInfo= () => {
  const { h4, h6, mb5, alignCenter } = TextStyles
  return (
    <OBTemplate screenNumber={SCREEN_NUMBER} sectionTitle={SECTION_TITLE} nextScreen={NEXT_SCREEN}>
      <View style={styles.contentContainer}>
        <Text style={[h4, mb5]}>Information for data access</Text>
        <Text style={[h6, alignCenter]}>We will need some information from you to help you get instant access to your medical data from multiple providers at once.</Text>
      </View>
    </OBTemplate>
  )
}

export default OBScreenInfo

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  }
})
