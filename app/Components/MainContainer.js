import React, { Component, PureComponent } from 'react';
import { StyleSheet, Slider, Alert } from 'react-native';
import { View, Drawer, Container, Header, Content, Footer, FooterTab, Button, Text, Left, Right, Icon, Body, Title } from 'native-base';
import Sidebar from '../Components/Sidebar'
import CardStack from '../Components/CardStack'
import ButtonGroup from '../Components/ButtonGroup'
//import PopupDialog from 'react-native-popup-dialog';
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



// const cards = [
//     {
//         name: 'Burger',
//         imgUrl: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'
//     },
//     {
//         name: 'Fried Chicken',
//         imgUrl: 'http://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1502824044/royal-farms-best-gas-station-food-FT-SS0817.jpg?itok=jJwvdRJB' 
//     },
//     {
//         name: 'Ramen',
//         imgUrl:  'https://www.chowstatic.com/assets/2014/11/31178_slow_cooker_pork_ramen_3000.jpg'     
//     }
// ];


const cards = [
    {
        "_id": {
            "$oid": "5a2bbf10aece2b92b868c1cd"
        },
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/JrNzVGwlI9DeXKNauZbP9Q/o.jpg",
        "name": "Our Pad Thai",
        "rating": 0,
        "restaurant": {
            "address": {
                "city": "Urbana",
                "coord": [
                    40.112708,
                    -88.209446
                ],
                "state": "IL",
                "street": "212 W Main St",
                "zipcode": "61801"
            },
            "hours": {
                "Friday": "17:00-22:00",
                "Monday": "17:00-22:00",
                "Saturday": "11:00-22:00",
                "Sunday": "12:00-21:00",
                "Thursday": "17:00-22:00",
                "Tuesday": "17:00-22:00",
                "Wednesday": "17:00-22:00"
            },
            "name": "Siam Terrace",
            "price": 2,
            "rest_id": "UmZdQID7QJoyg2R92mK3HA",
            "stars": 4
        },
        "tag": {}
    },

    {
        "_id": {
            "$oid": "5a2bbf10aece2b92b868c1ce"
        },
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/6dfFt6JBDthOMpuAvMXt-w/o.jpg",
        "name": "New York Maki Roll",
        "rating": 0,
        "restaurant": {
            "address": {
                "city": "Urbana",
                "coord": [
                    40.112708,
                    -88.209446
                ],
                "state": "IL",
                "street": "212 W Main St",
                "zipcode": "61801"
            },
            "hours": {
                "Friday": "17:00-22:00",
                "Monday": "17:00-22:00",
                "Saturday": "11:00-22:00",
                "Sunday": "12:00-21:00",
                "Thursday": "17:00-22:00",
                "Tuesday": "17:00-22:00",
                "Wednesday": "17:00-22:00"
            },
            "name": "Siam Terrace",
            "price": 2,
            "rest_id": "UmZdQID7QJoyg2R92mK3HA",
            "stars": 4
        },
        "tag": {}
    },

    {
        "_id": {
            "$oid": "5a2bbf10aece2b92b868c210"
        },
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/LvspU4awaGZEtDQpu8-6eA/o.jpg",
        "name": "Crispy Shrimp",
        "rating": 0,
        "restaurant": {
            "address": {
                "city": "Champaign",
                "coord": [
                    40.1105984,
                    -88.2290979
                ],
                "state": "IL",
                "street": "627 S Wright St",
                "zipcode": "61820"
            },
            "hours": {
                "Friday": "10:30-21:00",
                "Monday": "10:30-21:00",
                "Saturday": "10:30-21:00",
                "Sunday": "10:30-21:00",
                "Thursday": "10:30-21:00",
                "Tuesday": "10:30-21:00",
                "Wednesday": "10:30-21:00"
            },
            "name": "Panda Express",
            "price": 2,
            "rest_id": "tQaIWc9qeiB1IU163LKlAw",
            "stars": 3
        },
        "tag": {}
    },
    {
        "_id": {
            "$oid": "5a2bbf10aece2b92b868c22c"
        },
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/XZwIGL_4mQHRWXPjPq6W1w/o.jpg",
        "name": "Jalapeno, red onion and pepperoni!",
        "rating": 0,
        "restaurant": {
            "address": {
                "city": "Champaign",
                "coord": [
                    40.1164204,
                    -88.2433829
                ],
                "state": "IL",
                "street": "",
                "zipcode": ""
            },
            "hours": {
                "Friday": "11:00-14:00",
                "Monday": "11:00-14:00",
                "Saturday": "10:00-14:00",
                "Thursday": "11:00-14:00",
                "Tuesday": "11:00-14:00",
                "Wednesday": "11:00-14:00"
            },
            "name": "Dragon Fire Pizza",
            "price": 1,
            "rest_id": "a3hjBPsnpcTpcquQXLeS0w",
            "stars": 4.5
        },
        "tag": {}
    }
]

const selectedCard = {
    "_id": {
        "$oid": "5a2bbf10aece2b92b868c22c"
    },
    "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/XZwIGL_4mQHRWXPjPq6W1w/o.jpg",
    "name": "Jalapeno, red onion and pepperoni!",
    "rating": 0,
    "restaurant": {
        "address": {
            "city": "Champaign",
            "coord": [
                40.1164204,
                -88.2433829
            ],
            "state": "IL",
            "street": "",
            "zipcode": ""
        },
        "hours": {
            "Friday": "11:00-14:00",
            "Monday": "11:00-14:00",
            "Saturday": "10:00-14:00",
            "Thursday": "11:00-14:00",
            "Tuesday": "11:00-14:00",
            "Wednesday": "11:00-14:00"
        },
        "name": "Dragon Fire Pizza",
        "price": 1,
        "rest_id": "a3hjBPsnpcTpcquQXLeS0w",
        "stars": 4.5
    },
    "tag": {}
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
            'Are you going to try "' + cards[this.index].name + '"?',
            [
                { text: 'No' },
                { text: 'Yes', onPress: this.likeConfirmAction },
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
                'Do you like "' + selectedCard.name + '" you had last time?',
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
                        onSwipeLeft={this.onSwipeLeft}
                         />
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
