import React, { Component, PureComponent } from 'react';
import { StyleSheet, Slider } from 'react-native';
import { View, Drawer, Container, Header, Content, Footer, FooterTab, Button, Text, Left, Right, Icon, Body, Title } from 'native-base';
import Sidebar from '../Components/Sidebar'
import CardStack from '../Components/CardStack'
import ButtonGroup from '../Components/ButtonGroup'

import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    footer: {
        backgroundColor: '#F8F7F7',
        height: 100
    }
});


const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4

const test = <Button transparent full style={{ justifyContent: 'space-between' }}>
    <Text uppercase={false}>Something</Text>
    <Slider />
</Button>

const options = [
    'Cancel',
    'Apple',
    test,
    'Watermelon',
    <Text style={{ color: 'red' }}>Durian</Text>
]

const title = <Text style={{ color: '#000', fontSize: 18 }}>Which one do you like?</Text>



export default class MainContainer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            selected: ''
        }
        this.handlePress = this.handlePress.bind(this)
        this.showActionSheet = this.showActionSheet.bind(this)
    }
    toggleDrawer = () => {
        this.props.navigation.navigate('DrawerToggle')
    }

    showActionSheet() {
        this.ActionSheet.show()
    }

    handlePress(i) {
        this.setState({
            selected: i
        })
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
                        <Button transparent onPress={this.showActionSheet}>
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

                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={options}
                    cancelButtonIndex={CANCEL_INDEX}
                    onPress={this.handlePress}
                    style={{ height: 500 }}
                />

            </Container>
        );
    }
}

