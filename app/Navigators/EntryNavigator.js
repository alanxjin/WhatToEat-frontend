import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import MainNavigator from './MainNavigator'
import LoginScreen from '../Screens/LoginScreen'
import SplashScreen from '../Screens/SplashScreen'

import SettingsStore from '../Stores/SettingsStore'
import theme from '../theme/base-theme'

const settings = new SettingsStore()

const EntryNavigator = StackNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
    Login: {
      screen: LoginScreen,
    },
    Splash: {
      screen: SplashScreen,
    }
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  }
);

const props = {
  settings: settings,
  theme: theme,
}

export default  () => <EntryNavigator screenProps={props}/>;