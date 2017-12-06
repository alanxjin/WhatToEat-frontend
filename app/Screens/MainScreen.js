import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Drawer, Container, Header, Content, Footer, FooterTab, Button, Text, Left, Right, Icon, Body, Title, Root } from 'native-base';
import Sidebar from '../Components/Sidebar'
import CardStack from '../Components/CardStack'
import ButtonGroup from '../Components/ButtonGroup'


export default class MainScreen extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false
    }
  }
  toggleDrawer() {
    this.state.toggled ? this._drawer._root.close() : this._drawer._root.open()
  }
  openDrawer() {
    this.setState({ toggled: true })
  }
  closeDrawer() {
    this.setState({ toggled: false })
  }

  render() {
    const styles = this.props.style;
    return (

      <Drawer
        ref={(ref) => { this._drawer = ref }}
        //type="displace"
        content={<Sidebar navigation={this.props.navigation} />}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.3}
      //panOpenMask={.2}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.toggleDrawer.bind(this)}>
                <Icon name='bars' />
              </Button>
            </Left>
            <Body>
              <Title>WhatToEat</Title>
            </Body>
            <Right />
          </Header>
          <Root>
            <Container style={{ backgroundColor: '#fff' }}>
              <CardStack navigation={this.props.navigation} />
            </Container>
          </Root>
          <Footer style={{ backgroundColor: '#F8F7F7', height: 100 }}>
            <FooterTab>
              <ButtonGroup />
            </FooterTab>
          </Footer>
        </Container>
      </Drawer >
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
