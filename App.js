import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons/';

// import { bool, number, string } from 'prop-types';
import LoginScreen from './src/screens/LoginScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import Colors from './src/constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function selectIconName(name, focused) {
  if (name === 'Summary') {
    return focused ? 'md-person-sharp' : 'md-person-outline';
  } if (name === 'Catalog') {
    return focused ? 'file-tray-full' : 'file-tray-outline';
  }

  return '';
}

// const TabBarIcon = ({ focused, color, size }) => {

//   return(
//     <Ionicons
//       name={selectIconName(name, focused)}
//       size={size}
//       color={color}
//     />
//   )
// }

const screenOptions = ({ route: { name } }) => ({
  tabBarIcon: ({ focused, color, size }) =>
    // You can return any component that you like here!
    (
      <Ionicons
        name={selectIconName(name, focused)}
        size={size}
        color={color}
      />
    ),

});

// const screenOptions = ({ route: { name } }) => ({
//   tabBarIcon: (({ focused, color, size }) => {
//     // console.log('props', focused, color, size);
//     let iconName;

//     if (name === 'Summary') {
//       iconName = focused
//         ? 'md-person-sharp'
//         : 'md-person-outline';
//     } else if (name === 'Catalog') {
//       iconName = focused ? 'file-tray-full' : 'file-tray-outline';
//     }

//     // You can return any component that you like here!
//     return <Ionicons name={iconName} size={size} color={color} />;
//   }).propTypes = {
//     focused: bool.isRequired,
//     color: string.isRequired,
//     size: number.isRequired,
//   },
// });

const PostAuthScreens = () => (
  <Tab.Navigator
    screenOptions={screenOptions}
    tabBarOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Summary" component={SummaryScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
  </Tab.Navigator>
);

// tabBarIcon.propTypes = {
//   focused: bool.isRequired,
//   color: string.isRequired,
//   size: number.isRequired
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PreAuth"
        headerMode="none"
      >
        <Stack.Screen
          name="PreAuth"
          component={LoginScreen}
          options={{
            title: 'Discovery Mobile App',
          }}
        />
        <Stack.Screen
          name="PostAuth"
          component={PostAuthScreens}
          options={{
            title: 'Discovery Mobile App',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
