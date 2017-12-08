import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Left, Right, Content, Footer, FooterTab, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';
import MapView from 'react-native-maps';
import DetailButtonGroup from '../Components/DetailButtonGroup'
import DetailContent from '../Components/DetailContent'



const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});

const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

export default class MapScreen extends Component {

    returnOnPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} />
                <Header>
                    <Left>
                        <Button transparent onPress={this.returnOnPress}>
                            <Icon name='chevron-left' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>WhatToEat</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='paper-plane-o' />
                        </Button>
                    </Right>
                </Header>

                <Container>
                    <MapView
                        initialRegion={initialRegion}
                        style={styles.map}
                    />
                </Container>

            </Container>
        );
    }
}