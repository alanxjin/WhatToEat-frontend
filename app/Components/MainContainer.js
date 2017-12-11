import React, { Component, PureComponent } from 'react';
import {
    StyleSheet,
    Slider,
    AsyncStorage,
    Fetch,
    Alert,
    ActivityIndicator} from 'react-native';
import {
    View,
    Drawer,
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Text,
    Left,
    Right,
    Icon,
    Body,
    Title } from 'native-base';
import Sidebar from '../Components/Sidebar';
import CardStack from '../Components/CardStack';
import ButtonGroup from '../Components/ButtonGroup';
import Modal from 'react-native-modalbox';
import colors from '../theme/color';

import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'

const DEMO_FLAG = false

var axios = require('axios');
var dishes = [];
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
    container: {
        backgroundColor: '#fff'
    },
    footer: {
        backgroundColor: '#F8F7F7',
        height: 100,
        borderTopColor: colors.lightergrey,
    },
    loading_container : {
        flex: 1,
        justifyContent: 'center'
    },
});

const cards2 = [
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


const cards3 = [
    {
        "_id": {
            "$oid": "5a2bbf11aece2b92b868c46b"
        },
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/rAFy2zIImv6YBY6wdyyyXg/o.jpg",
        "name": "Smoked Salmon for brunch :)",
        "rating": 0,
        "restaurant": {
            "address": {
                "city": "Urbana",
                "coord": [
                    40.1066554,
                    -88.2236278
                ],
                "state": "IL",
                "street": "706 S Goodwin Ave",
                "zipcode": "61801"
            },
            "hours": {
                "Friday": "8:00-23:00",
                "Monday": "8:00-22:00",
                "Saturday": "11:00-23:00",
                "Sunday": "11:00-22:00",
                "Thursday": "8:00-22:00",
                "Tuesday": "8:00-22:00",
                "Wednesday": "8:00-22:00"
            },
            "name": "The Bread Company",
            "price": 2,
            "rest_id": "Ah4i15g8Ow_zphzcpulTxQ",
            "stars": 3.5
        },
        "tag": {}
    },
    {
        "_id": {
            "$oid": "5a2bbf11aece2b92b868c46d"
        },
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/JhhrG_XUoyICg6gJnrIndw/o.jpg",
        "name": "Large pizza.",
        "rating": 0,
        "restaurant": {
            "address": {
                "city": "Champaign",
                "coord": [
                    40.0815042,
                    -88.2963437
                ],
                "state": "IL",
                "street": "2511 Village Green Pl",
                "zipcode": "61822"
            },
            "hours": {
                "Friday": "11:00-2:00",
                "Monday": "11:00-2:00",
                "Saturday": "11:00-2:00",
                "Sunday": "11:00-2:00",
                "Thursday": "11:00-2:00",
                "Tuesday": "11:00-2:00",
                "Wednesday": "11:00-2:00"
            },
            "name": "Jupiter's Pizzeria and Billards",
            "price": 2,
            "rest_id": "JbnNk6do3aHF3Kr1bX4HzQ",
            "stars": 3
        },
        "tag": {}
    }

    ,
    {
        "_id": {
            "$oid": "5a2bbf11aece2b92b868c457"
        },
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/iksMb8XztzpvOji8ZuPFUw/o.jpg",
        "name": "Ma Po Tofu",
        "rating": 0,
        "restaurant": {
            "address": {
                "city": "Champaign",
                "coord": [
                    40.1094391,
                    -88.2306035
                ],
                "state": "IL",
                "street": "711 S 6th St",
                "zipcode": "61820"
            },
            "hours": {
                "Friday": "11:00-21:30",
                "Monday": "11:00-21:30",
                "Sunday": "11:00-21:30",
                "Thursday": "11:00-21:30",
                "Tuesday": "11:00-21:30",
                "Wednesday": "11:00-21:30"
            },
            "name": "Evo Cafe",
            "price": 2,
            "rest_id": "OyBStpjF5e_iRCMXflFasQ",
            "stars": 2.5
        },
        "tag": {}
    },

    {
        "_id": {
            "$oid": "5a2bbf10aece2b92b868c2f4"
        },
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/_-PJTN6ZN1iesZFEXiKgLA/o.jpg",
        "name": "Guava juice and braised pork",
        "rating": 0,
        "restaurant": {
            "address": {
                "city": "Champaign",
                "coord": [
                    40.1171251,
                    -88.2426687
                ],
                "state": "IL",
                "street": "119 N Walnut St",
                "zipcode": "61820"
            },
            "hours": {
                "Friday": "15:00-2:00",
                "Monday": "15:00-2:00",
                "Saturday": "10:30-2:00",
                "Sunday": "10:30-2:00",
                "Thursday": "15:00-2:00",
                "Tuesday": "15:00-2:00",
                "Wednesday": "15:00-2:00"
            },
            "name": "Radio Maria",
            "price": 2,
            "rest_id": "lWmDrnqgU6w3gFaJyn_1Uw",
            "stars": 3.5
        },
        "tag": {}
    }
    ,{
        "_id": {
            "$oid": "5a2bbf11aece2b92b868c321"
        },
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/zOfwA5pljwmXmWYUpOAShw/o.jpg",
        "name": "Wings&Bleu Cheese",
        "rating": 0,
        "restaurant": {
            "address": {
                "city": "Urbana",
                "coord": [
                    40.1138182155,
                    -88.2076892527
                ],
                "state": "IL",
                "street": "201 N Broadway Ave",
                "zipcode": "61801"
            },
            "hours": {
                "Friday": "11:00-23:00",
                "Monday": "11:00-22:00",
                "Saturday": "11:00-23:00",
                "Sunday": "11:00-22:00",
                "Thursday": "11:00-22:00",
                "Tuesday": "11:00-22:00",
                "Wednesday": "11:00-22:00"
            },
            "name": "Black Dog Smoke & Ale House",
            "price": 2,
            "rest_id": "9MnbQg7kfb_WgxoV0hXKSQ",
            "stars": 4.5
        },
        "tag": {}
    }
]

const cards = (DEMO_FLAG? cards2:cards3)

const selectedCard = {
    "_id": {
        "$oid": "5a2bbf11aece2b92b868c321"
    },
    "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/zOfwA5pljwmXmWYUpOAShw/o.jpg",
    "name": "Wings&Bleu Cheese",
    "rating": 0,
    "restaurant": {
        "address": {
            "city": "Urbana",
            "coord": [
                40.1138182155,
                -88.2076892527
            ],
            "state": "IL",
            "street": "201 N Broadway Ave",
            "zipcode": "61801"
        },
        "hours": {
            "Friday": "11:00-23:00",
            "Monday": "11:00-22:00",
            "Saturday": "11:00-23:00",
            "Sunday": "11:00-22:00",
            "Thursday": "11:00-22:00",
            "Tuesday": "11:00-22:00",
            "Wednesday": "11:00-22:00"
        },
        "name": "Black Dog Smoke & Ale House",
        "price": 2,
        "rest_id": "9MnbQg7kfb_WgxoV0hXKSQ",
        "stars": 4.5
    },
    "tag": {}
}

export default class MainContainer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            loading: false,
            cur_card: 0,
            cards:[]
        }

        this.index = 0
        this.maxIndex = 0
        this.props.screenProps.settings.mainContainer = this
    }

    componentWillMount() {
        this.setState({
            loading: true,
        });

        let email = this.props.navigation.state.params.email;
        let password = this.props.navigation.state.password;
        axios.post('https://wte-api.herokuapp.com/api/dishes?limit=100', {'email': email}).then(function (response, error) {
            if (error) {
                console.log(error);
                return;
            }
            else {
                dishes = response.data.data.slice();
                this.setState({
                    loading: false,
                    cards: dishes
                });

                
                this.maxIndex = dishes.length
                this.props.screenProps.settings.selected = dishes[0]
            }
            
        }.bind(this));
    }

    toggleDrawer = () => {
        this.props.navigation.navigate('DrawerToggle')
    }


    likeAPI = (imgUrl) => {
        let email = this.props.navigation.state.params.email;
        axios.put('https://wte-api.herokuapp.com/api/users/like', {'imgUrl': imgUrl, 'email':email}).then(function (response, error) {
            if (error) {
                console.log(error);
                return;
            }
            else {
                console.log(response)
            }
        }.bind(this));
    }

    dislikeAPI = (imgUrl) => {
        let email = this.props.navigation.state.params.email;
        axios.put('https://wte-api.herokuapp.com/api/users/like', {'imgUrl': imgUrl, 'email':email}).then(function (response, error) {
            if (error) {
                console.log(error);
                return;
            }
            else {
                console.log(response)
            }
        }.bind(this));
    }

    like = () => {
        Alert.alert(
            'You choose "Like" ',
            'Are you going to try "' + cards[this.index].name + '" today?',
            [
                { text: 'Maybe later' },
                { text: 'Yes', onPress: this.likeConfirmAction },
            ],
            { cancelable: true }
        )
        this.index = (++this.index) % this.maxIndex
        this.props.screenProps.settings.selected = this.state.cards[this.index]

    }

    dislike = () => {
        this.index = (++this.index) % this.maxIndex
        this.props.screenProps.settings.selected = this.state.cards[this.index]

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
        this.dislike()
    }


    likeAction = () => {
        this.deck._root.swipeLeft()
        this.like()
    }

    dislikeAction = () => {
        this.deck._root.swipeRight()
        this.dislike()
    }

    sflAction = () =>{
        this.deck._root.swipeLeft()
        axios.put('https://wte-api.herokuapp.com/api/users/saveForLater', {'imgUrl': this.props.screenProps.settings.selected.imgUrl, 'email':this.props.navigation.state.params.email})
        .then((res, err)=>{
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log(res);
            }
        })
        // let cur_card_ = this.state.cur_card;
        // cur_card_++;
        // this.setState({
        //     cur_card: cur_card_,
        // })
    }

    getDeck = (deck) => {
        this.deck = deck
    }

    componentDidMount() {
        if (DEMO_FLAG) {
            Alert.alert(
                'Tell us about your meal',
                'Did you like "' + selectedCard.name + '" you had last time?',
                [
                    { text: 'No', onPress: () =>{ this.likeAPI(selectedCard.imgUrl)} },
                    // { text: 'Skip', onPress: () => console.log('OK Pressed') },
                    { text: 'Yes', onPress: () =>{ this.dislikeAPI(selectedCard.imgUrl)} },
                ],
                { cancelable: true }
            )

        }

    }

    render() {
        console.log(this.props.screenProps)
        if (this.state.loading) {
            return (<View style={styles.loading_container}>
                <ActivityIndicator size="large" />
            </View>)
        }
        return (

            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.toggleDrawer}>
                            <Icon style={styles.icon} name='bars' />
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                        <Title>WhatToEat</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon style={styles.icon} name='filter' />
                        </Button>
                    </Right >
                </Header>

                <Container style={styles.container}>
                    <CardStack
                        navigation={this.props.navigation}
                        cards={this.state.cards}
                        getDeck={this.getDeck}
                        onSwipeRight={this.onSwipeRight}
                        onSwipeLeft={this.onSwipeLeft}
                    />
                </Container>

                <Footer style={styles.footer}>
                    <FooterTab>
                        <ButtonGroup {...this.props} sflAction={this.sflAction} likeAction={this.likeAction} dislikeAction={this.dislikeAction}/>
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
