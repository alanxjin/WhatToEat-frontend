import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Screens/LoginScreen'
import MainNavigator from './MainNavigator'

const EntryNavigator = StackNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default EntryNavigator;