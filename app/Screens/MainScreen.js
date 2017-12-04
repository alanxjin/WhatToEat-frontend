import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Drawer, Container, Header, Content, Footer, FooterTab, Button, Text, Left, Right, Icon, Body, Title, Root } from 'native-base';
import Sidebar from '../Components/Sidebar'
import CardStack from '../Components/CardStack'




import SettingsStore from '../Stores/SettingsStore'
import theme from '../theme/base-theme'

const settings = new SettingsStore()


export default class MainScreen extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      store: {
        settings: settings
      },
      theme: theme
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
    return (
      // <CardStack style={{flex: 1}}/>
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        //type="displace"
        content={<Sidebar navigation={this.props.navigation} theme={this.state.theme} />}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
      //openDrawerOffset={0.2}
      //panOpenMask={.2}
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
          <Root>
            <Container padder>
              <CardStack />
            </Container>
          </Root>
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
