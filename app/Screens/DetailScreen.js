import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Content, Footer, FooterTab, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';
export default class ListExample extends Component {
    render() {
        return (
            <Container>
                <StatusBar
                    translucent
                    backgroundColor="rgba(0, 0, 0, 0.20)"
                    animated
                />
                {/* <Header style={{backgroundColor:"transparent"}}>
                    <Left>
                        <Button transparent>
                            <Icon name='bars' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>WhatToEat</Title>
                    </Body>
                    <Right />
                </Header> */}

                <Content style={{ backgroundColor: "#fff" }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>

                        <View>
                            <Image style={{ height: 200, flex: 1 }} source={{ uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' }} />
                        </View>

                        <View style={{ padding: 10 }}>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>

                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                            <Text>asdasdas</Text>
                        </View>



                    </View>

                </Content>

                <Footer style={{ backgroundColor: "#F8F7F7", height: 100 }}>
                    <FooterTab>

                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}