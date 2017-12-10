import React, { Component, PureComponent } from 'react'
import { StyleSheet, Image, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation'
import { Container } from 'native-base';
import MainContainer from '../Components/MainContainer'
import Sidebar from '../Components/Sidebar'

const SidebarWrapper = (props) => (
  <Sidebar {...props} />
);

const MainScreenDrawer = DrawerNavigator({
  Home: {
    screen: MainContainer,
  }
}, 
{
    contentComponent: SidebarWrapper
});


export default MainScreenDrawer