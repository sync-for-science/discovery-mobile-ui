import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SummaryScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
        <Text>Summary Screen</Text>
        <Button
          title="Go to Summary... again"
          onPress={() => navigation.push('Summary')}
        />
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Go to Login Pop to Top"
          onPress={() => navigation.popToTop()}
        />
    </View>
  )
}

export default SummaryScreen

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})
