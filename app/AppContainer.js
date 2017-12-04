import React, { Component } from 'react'
import { Drawer, View } from 'native-base'
import { StackNavigator } from 'react-navigation'


import {
  Platform,
  StyleSheet,
  Text
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      store: {},
      theme: null
    }
  }
  toggleDrawer() {
    this.state.toggled ? this._drawer.close() : this._drawer.open()
  }
  openDrawer() {
    this.setState({ toggled: true })
  }
  closeDrawer() {
    this.setState({ toggled: false })
  }
  //   renderScene(route, navigator) {
  //     switch(route) {
  //       default: {
  //         return null
  //       }
  //     }
  //   }
  //   configureScene(route, routeStack) {
  //     return Navigator.SceneConfigs.PushFromRight
  //   }
  
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    
    return (
      
      <Drawer
        ref={(ref) => this._drawer = ref}
        //type="displace"
        content={<View style={{ backgroundColor: "#000", height: 1000 }} />}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        //openDrawerOffset={0.2}
        panOpenMask={.2}
      >

        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to WhatToEat!asdas
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>


      </Drawer>


    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});