import React from 'react'
import { 
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button
} from 'react-native'
import Login from '../components/Login/Login';
import logo from '../../assets/images/vermonster-logo.png';

const LoginScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.vlogo}
            source={logo}
            resizeMode="contain"
          />
          <Image
            style={styles.slogo}
            source={{ uri: 'http://syncfor.science/s4s-logo.png' }}
            resizeMode="contain"
          />
        </View>
        <Login />
        <Button
          title="Go to Summary"
          onPress={() => navigation.navigate('Summary')}
        />
        <Button
          title="Go to Catalog"
          onPress={() => navigation.navigate('Catalog')}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollView: {
    height: '100%',
    padding: 20,
  },

  vlogo: {
    height: 50,
    width: '60%',
  },
  slogo: {
    height: 50,
    width: '60%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
})
