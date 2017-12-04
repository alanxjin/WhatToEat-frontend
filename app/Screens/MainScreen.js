import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Drawer, Container, Header, Content, Footer, FooterTab, Button, Text, Left, Right, Icon, Body, Title } from 'native-base';
import Sidebar from '../Components/Sidebar'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
    
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
        ref={(ref) => {
          console.log(this)
          this._drawer = ref
        }}
        //type="displace"
        content={<Sidebar navigation={this.props.navigation} theme={this.props.screenProps.theme} />}
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
