import React, { Component, PureComponent } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Left, Right, Content, Footer, FooterTab, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';
import MapView from 'react-native-maps';
import DetailButtonGroup from '../Components/DetailButtonGroup'
import DetailContent from '../Components/DetailContent'
import colors from '../theme/color'



const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F8F7F7',
        height: 80,
        borderBottomColor: colors.lightergrey,
    },
    icon: {
        marginTop: 10,
        fontSize: 25
    },
    headerBody: {
        marginTop: 15,
    },
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

export default class MapScreen extends PureComponent {

    returnOnPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} />
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.returnOnPress}>
                            <Icon style={styles.icon} name='angle-left' />
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                        <Title>WhatToEat</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon style={styles.icon} name='location-arrow' />
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