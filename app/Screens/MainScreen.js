/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import { View, Drawer, Container, Header, Content, Footer, FooterTab, Button, Text, Left, Right, Icon, Body, Title } from 'native-base';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      store: {},
      theme: null
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
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
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.toggleDrawer.bind(this)}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Text>
              This is Content Section
            </Text>
            <Button info onPress={() => this.props.navigation.navigate('Test')}>
            <Text>
              Go to Test Page
            </Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

        {/* <View style={styles.container}>
          <Text style={styles.welcome}>
            Main Pagin!!!!
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate('Test')}
            title="Go to Test Page"
          />
        </View> */}


      </Drawer >



    );
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
