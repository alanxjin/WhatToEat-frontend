import React, { Component, PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { View, Drawer, Container, Header, Content, Footer, FooterTab, Button, Text, Left, Right, Icon, Body, Title, Root } from 'native-base';
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
    render() {
        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.props.toggleDrawer}>
                            <Icon name='bars' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>WhatToEat</Title>
                    </Body>
                    <Right />
                </Header>

                <Container style={styles.container}>
                    <Root>
                        <CardStack navigation={this.props.navigation} />
                    </Root>
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

