import React, { Component, PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Drawer,
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Left,
  Right,
  Icon,
  Body,
  Title,
  Root
} from 'native-base';
import Sidebar from '../Components/Sidebar'
import CardStack from '../Components/CardStack'
import ButtonGroup from '../Components/ButtonGroup'
import MainContainer from '../Components/MainContainer'

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F8F7F7',
    height: 100
  }
});


export default class MainScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.toggled = false
    this.SidebarComponent = <Sidebar navigation={this.props.navigation} />
    this.closeDrawer = this.closeDrawer.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }
  toggleDrawer() {
    this.toggled ? this._drawer._root.close() : this._drawer._root.open()
  }
  openDrawer() {
    this.toggled  = true
  }
  closeDrawer() {
    this.toggled = false
  }




  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        //type="displace"
        content={this.SidebarComponent}
        onClose={this.closeDrawer}
        onOpen={this.openDrawer}
        openDrawerOffset={0.3}
        //panOpenMask={.2}
      >
        <MainContainer toggleDrawer={this.toggleDrawer} />
      </Drawer >
    );
  }
}

