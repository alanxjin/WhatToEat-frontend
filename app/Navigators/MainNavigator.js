import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import MainScreen from '../Screens/MainScreen'
import TestScreen from '../Screens/TestScreen'

import SettingsStore from '../Stores/SettingsStore'
import theme from '../theme/base-theme'

const settings = new SettingsStore()

const MainNavigator = StackNavigator(
  {
    Main: {
      screen: MainScreen
    },
    Test: {
      screen: TestScreen
    }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  }
);

const props = {
  settings: settings,
  theme: theme,
}


export default  () => <MainNavigator screenProps={props}/>