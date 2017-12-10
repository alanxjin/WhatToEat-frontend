import React, { Component, PureComponent } from 'react';
import { StyleSheet, Slider, Alert } from 'react-native';
import { View, Drawer, Container, Header, Content, Footer, FooterTab, Button, Text, Left, Right, Icon, Body, Title } from 'native-base';
import Sidebar from '../Components/Sidebar'
import CardStack from '../Components/CardStack'
import ButtonGroup from '../Components/ButtonGroup'
import PopupDialog from 'react-native-popup-dialog';
import Modal from 'react-native-modalbox';

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



const cards = [
    {
        name: 'Burger',
        image: { uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' }
    },
    {
        name: 'Fried Chicken',
        image: { uri: 'http://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1502824044/royal-farms-best-gas-station-food-FT-SS0817.jpg?itok=jJwvdRJB' }
    },
    {
        name: 'Ramen',
        image: { uri: 'https://www.chowstatic.com/assets/2014/11/31178_slow_cooker_pork_ramen_3000.jpg' }
    }
];

const selectedCard = {
    name: 'Burger',
    image: { uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' }
}



export default class MainContainer extends PureComponent {
    constructor(props) {
        super(props)
        this.index = 0
        this.maxIndex = cards.length
    }
    toggleDrawer = () => {
        this.props.navigation.navigate('DrawerToggle')
    }

    likeAction = () => {
        this.deck._root.swipeLeft()
        this.like()
    }

    dislikeAction = () => {
        this.deck._root.swipeRight()
        this.dislike()
    }

    like = () => {
        
        Alert.alert(
            'You chose "Like" ',
            'Are you going to try '+ cards[this.index].name +'?',
            [
                { text: 'No' },
                { text: 'Yes',  onPress: this.likeConfirmAction },
            ],
            { cancelable: true }
        )

        this.index = (++this.index) % this.maxIndex
        

    }

    dislike = () => {
        this.index = (++this.index) % this.maxIndex
    }

    likeConfirmAction = () => {
        Alert.alert(
            'You\'re all set',
            'Close the app and have a great meal',
            [
                { text: 'Ok' },
            ],
            { cancelable: true }
        )
    }

    onSwipeRight = (card) => {
        this.dislike()
    }

    onSwipeLeft = (card) => {
        this.like()
    }


    getDeck = (deck) => {
        this.deck = deck
    }

    componentDidMount() {
        if (false) {
            Alert.alert(
                'Tell us about your meal',
                'Do you like '+selectedCard.name+' you had last time?',
                [
                    { text: 'No', onPress: () => console.log('OK Pressed') },
                    { text: 'Skip', onPress: () => console.log('OK Pressed') },
                    { text: 'Yes', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true }
            )

        }

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
                        <Button transparent>
                            <Icon name='filter' />
                        </Button>
                    </Right >
                </Header>

                <Container style={styles.container}>
                    <CardStack
                        navigation={this.props.navigation}
                        cards={cards}
                        getDeck={this.getDeck}
                        onSwipeRight={this.onSwipeRight}
                        onSwipeLeft={this.onSwipeLeft} />
                </Container>

                <Footer style={styles.footer}>
                    <FooterTab>
                        <ButtonGroup {...this.props} likeAction={this.likeAction} dislikeAction={this.dislikeAction} />
                    </FooterTab>
                </Footer>

                {/* <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={options}
                    cancelButtonIndex={CANCEL_INDEX}
                    onPress={this.handlePress}
                    style={{ height: 500 }}
                />

                <PopupDialog
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    style={{ zIndex: 100 }}
                >
                    <View>
                        <Text>Hello</Text>
                    </View>
                </PopupDialog>


                <Modal style={[styles.modal, styles.modal2]} backdrop={false} position={"top"} ref={"modal"}>
                    <Text style={[styles.text, { color: "white" }]}>Modal on top</Text>
                </Modal> */}

            </Container>

        );
    }
}
