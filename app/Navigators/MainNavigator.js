import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import MainScreen from '../Screens/MainScreen'
import TestScreen from '../Screens/TestScreen'
import DetailScreen from '../Screens/DetailScreen'
import MapScreen from '../Screens/MapScreen'

import SettingsStore from '../Stores/SettingsStore'

const settings = new SettingsStore()

const MainNavigator = StackNavigator(
  {
    Main: {
      screen: MainScreen
    },
    Detail:{
      screen: DetailScreen
    },
    Map:{
      screen: MapScreen
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
  settings: settings
}


export default () => <MainNavigator screenProps={props}/>