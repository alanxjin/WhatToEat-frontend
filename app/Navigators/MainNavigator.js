import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import MainScreen from '../Screens/MainScreen'
import TestScreen from '../Screens/TestScreen'

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

export default MainNavigator;