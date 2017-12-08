import React, { Component, PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { View, Drawer, Container, Header, Content, Footer, FooterTab, Button, Text, Left, Right, Icon, Body, Title } from 'native-base';
import Sidebar from '../Components/Sidebar'
import CardStack from '../Components/CardStack'
import ButtonGroup from '../Components/ButtonGroup'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    footer: {
        backgroundColor: '#F8F7F7',
        height: 100
    }
});


export default class MainContainer extends PureComponent {
    constructor(props) {
        super(props)
        this.toggleDrawer = this.toggleDrawer.bind(this)
    }
    toggleDrawer() {
        this.props.navigation.navigate('DrawerToggle')
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.toggleDrawer}>
                            <Icon name='bars' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>WhatToEat</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.toggleDrawer}>
                            <Icon name='filter' />
                        </Button>
                    </Right >
                </Header>

                <Container style={styles.container}>
                    <CardStack navigation={this.props.navigation} />
                </Container>

                <Footer style={styles.footer}>
                    <FooterTab>
                        <ButtonGroup />
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

