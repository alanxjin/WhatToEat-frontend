import React, { Component } from 'react'
import { Image } from 'react-native';
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

const avatar = require('../../images/doge.png')
const backgroundImg = require('../../images/logo.jpg')

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let list = [{
      title: "Match",
      onPress: () => {
        this.props.navigation.navigate('Test')
      }
    }, {
      title: "History",
      onPress: () => {
        this.props.navigation.navigate('Test')
      }
    }]

    return (
      <Container style={{ backgroundColor: "#FFF" }}>

        <Header style={{ height: 150, paddingLeft: 0, paddingRight: 0 }}>
          <Body>
            {/* <Image
              source={backgroundImg}
              style={{top: 0, left: 0, right: 0, bottom: 0, resizeMode: 'cover', position: 'absolute' }}
            /> */}
            <View style={{ top: 0, left: 0, right: 0, bottom: 40, position:'absolute' }}>
              <Image style={{ flex: 1, width: null, height:null, opacity: 0.3  }} source={backgroundImg}/>
            </View>
            <View style={{ flex: 1, margin:10, flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Thumbnail large style={{ margin: 15 }} source={avatar} />
                <Text> FeedMeNow! </Text>
              </View>
              <Text style={{ color: "#959899", fontSize: 12, alignSelf: "center" }}> SuchWow_ManyCool@Doge.gov </Text>
            </View>

            
          </Body>
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