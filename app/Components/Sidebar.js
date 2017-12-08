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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  header: {
    height: 150,
    paddingLeft: 0,
    paddingRight: 0
  }
})

export default class Sidebar extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      // <Container >
      // </Container>
      <Container style={styles.container}>

        <Header style={styles.header}>
          <SidebarHeader {...this.props}/>
        </Header>
        
        <Content style={{ backgroundColor: "#F8F7F7" }}>
          <Form>
            <Item last style={{ flexDirection: 'column' }}>
              <Button transparent style={{ flex: 1, margin: 15 }}>
                <Icon name='user' style={{ color: "#959899" }} />
                <Text uppercase={false} style={{ color: "#959899" }}>My Profile</Text>
              </Button>

              <Button transparent style={{ flex: 1, margin: 15 }}>
                <Icon name='bookmark' style={{ color: "#959899" }} />
                <Text uppercase={false} style={{ color: "#959899" }}>Saved List</Text>
              </Button>

              <Button transparent style={{ flex: 1, margin: 15 }}>
                <Icon name='cutlery' style={{ color: "#959899" }} />
                <Text uppercase={false} style={{ color: "#959899" }}>Diet History</Text>
              </Button>
            </Item>

            <Item style={{ "borderBottomWidth": 0, margin: 15, flex: 1, flexDirection: 'column' }}>
              <Button full rounded style={{ margin: 15, backgroundColor: '#fff', justifyContent: "flex-start" }}>
                <Icon name='cog' style={{ color: "#959899" }} />
                <Text uppercase={false} style={{ color: "#959899" }}>Settings</Text>
              </Button>
              <Button full rounded style={{ margin: 15, backgroundColor: '#fff', justifyContent: "flex-start" }}>
                <Icon name='power-off' style={{ color: "#959899" }} />
                <Text uppercase={false} style={{ color: "#959899" }}>Log Out</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}