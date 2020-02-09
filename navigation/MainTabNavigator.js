import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


import TabBarIcon from '../components/TabBarIcon';
<<<<<<< HEAD
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
=======
<<<<<<< HEAD
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
=======
import HomeScreen from '../screens/SignUp';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignInScreen from '../screens/SignIn'
>>>>>>> 159541dde310b01faf2e6c19cb38b44f6f0262a0
>>>>>>> 074f82f5cbabd52cd508bc56946ed8b6ec6197ab

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const MapsStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  config
);

<<<<<<< HEAD
MapsStack.navigationOptions = {
  tabBarLabel: 'Maps',
=======
<<<<<<< HEAD
MapsStack.navigationOptions = {
  tabBarLabel: 'Maps',
=======
const SignInStack = createStackNavigator(
  {
    SignIn: SignInScreen,
  },
  config
);

const MainNavigator = createStackNavigator({
  SignIn: { screen: SignInScreen },
  SignUp: { screen: HomeScreen }
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
>>>>>>> 159541dde310b01faf2e6c19cb38b44f6f0262a0
>>>>>>> 074f82f5cbabd52cd508bc56946ed8b6ec6197ab
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

<<<<<<< HEAD
MapsStack.path = '';
=======
<<<<<<< HEAD
MapsStack.path = '';
=======

LinksStack.path = '';
>>>>>>> 159541dde310b01faf2e6c19cb38b44f6f0262a0
>>>>>>> 074f82f5cbabd52cd508bc56946ed8b6ec6197ab

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MapsStack,
  ProfileStack,
});

tabNavigator.path = '';


export default tabNavigator;
