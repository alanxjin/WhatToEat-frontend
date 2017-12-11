import React, { Component, PureComponent } from 'react'
import { Image, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View,
  Button,
  Form,
  Item,
  Icon,
  Thumbnail,
  Body
} from 'native-base'

import SidebarHeader from './SidebarHeader'
import { Button as RNButton } from 'react-native-elements'

const styles = StyleSheet.create({
  header: {
    height: 180,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#fff',
    borderBottomColor: '#D3D3D3',
  }
})

export default class Sidebar extends PureComponent {
  constructor(props) {
    super(props)
    this.savedOnPress = this.savedOnPress.bind(this)
  }
  savedOnPress() {
    this.props.navigation.navigate('Saved')
  }

  render() {
    // const {navigate} = this.props.navigation
    return (
      // <Container >
      // </Container>
      <Container style={styles.container}>

        <Header style={styles.header}>
          <SidebarHeader {...this.props} />
        </Header>

        <Content style={{ backgroundColor: "#F8F7F7" }}>

          <View style={{ padding: 15, flexDirection: 'column' }}>
            <Button full transparent style={{ margin: 15, justifyContent: "flex-start", backgroundColor: "#F8F7F7" }}>
              <Icon name='user' style={{ color: "#959899" }} />
              <Text uppercase={false} style={{ color: "#959899" }}>My Profile</Text>
            </Button>

            <Button full transparent style={{ margin: 15, justifyContent: "flex-start" }} onPress={this.savedOnPress}>
              <Icon name='bookmark' style={{ color: "#959899" }} />
              <Text uppercase={false} style={{ color: "#959899" }}>Saved List</Text>
            </Button>

            <Button full transparent style={{ margin: 15, justifyContent: "flex-start" }}>
              <Icon name='cutlery' style={{ color: "#959899" }} />
              <Text uppercase={false} style={{ color: "#959899" }}>Diet History</Text>
            </Button>
          </View>

          <View
            style={{
              borderBottomColor: '#D3D3D3',
              borderBottomWidth: 0.5,
            }}
          />

          <View style={{ flexDirection: 'column', padding: 20 }}>
            <Button full rounded style={{ margin: 18, backgroundColor: '#fff', justifyContent: "flex-start" }} borderRadius={50}>
              <Icon name='cog' style={{ color: "#959899" }} />
              <Text uppercase={false} style={{ color: "#959899" }}>Settings</Text>
            </Button>
            <Button full rounded style={{ margin: 18, backgroundColor: '#fff', justifyContent: "flex-start" }}>
              <Icon name='power-off' style={{ color: "#959899" }} />
              <Text uppercase={false} style={{ color: "#959899" }}>Log Out</Text>
            </Button>

       
              
          </View>

        </Content>
      </Container>
    )
  }
}