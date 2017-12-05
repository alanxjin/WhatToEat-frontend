import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View,
  Button
} from 'native-base'

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
      <Container style={{ backgroundColor: "#FFF"}}>
        <Header/>
        <View>
          <List dataArray={list} renderRow={(item) => 
            <ListItem button onPress={item.onPress.bind(this)}>
              <Text> {item.title} </Text>
            </ListItem>
          }/>
        </View>
      </Container>
    )
  }
}