import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { StyleProvider } from 'native-base';

import getTheme from '../../native-base-theme/components';
import theme from '../theme/theme';


import MainNavigator from './MainNavigator'
import LoginScreen from '../Screens/LoginScreen'
import SplashScreen from '../Screens/SplashScreen'
import MainScreen from '../Screens/MainScreen'
import TestScreen from '../Screens/TestScreen'
import DetailScreen from '../Screens/DetailScreen'
import MapScreen from '../Screens/MapScreen'
import SettingsStore from '../Stores/SettingsStore'

const settings = new SettingsStore()


const EntryNavigator = StackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Detail: {
      screen: DetailScreen
    },
    Map: {
      screen: MapScreen
    },
    Test: {
      screen: TestScreen
    },
    Login: {
      screen: LoginScreen,
    },
    Splash: {
      screen: SplashScreen,
    }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
);

const props = {
  settings: settings
}

const EntryNavigatorWrapper = () => <StyleProvider style={getTheme(theme)}><EntryNavigator screenProps={props} /></StyleProvider>

export default EntryNavigatorWrapper;
















