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
                // console.log(response)
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
                // console.log(response)
            }
        }.bind(this));
    }

    like = () => {
        Alert.alert(
            'You choose "Go" ',
            'Are you going to try "' + this.state.cards[this.index].name + '" today?',
            [
                { text: 'No' },
                { text: 'Yes', onPress: this.likeConfirmAction },
            ],
            { cancelable: true }
        )
        this.props.screenProps.settings.selected = this.state.cards[this.index];
        this.index = (++this.index) % this.maxIndex;

    }

    dislike = () => {
        this.props.screenProps.settings.selected = this.state.cards[this.index];
        this.index = (++this.index) % this.maxIndex;
    }

    likeConfirmAction = () => {
        Alert.alert(
            'You\'re all set',
            'Your dish has been saved at your history',
            [
                { text: 'Ok' },
            ],
            { cancelable: true }
        ) 
        axios.put('https://wte-api.herokuapp.com/api/users/saveHistory', {'imgUrl': this.props.screenProps.settings.selected.imgUrl, 'email':this.props.navigation.state.params.email})
        .then((res, err)=>{
            if(err){
                console.log(err);
                return;
            }
            else{
                // console.log(res);
            }
        })
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
    goAction = () => {
        this.like()
    }

    dislikeAction = () => {
        this.deck._root.swipeRight()
        this.dislike()
    }

    sflAction = () =>{
        this.deck._root.swipeLeft()
        this.dislike()
        // console.log(this.props)
        // console.log(this.props.screenProps.settings.selected.imgUrl)
        axios.put('https://wte-api.herokuapp.com/api/users/saveForLater', {'imgUrl': this.props.screenProps.settings.selected.imgUrl, 'email':this.props.navigation.state.params.email})
        .then((res, err)=>{
            if(err){
                console.log(err);
                return;
            }
            else{
                // console.log(res);
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

    goFilter = () => {
        this.props.navigation.navigate('Filter')
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
        // console.log(this.props.screenProps)
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
                        <Button transparent onPress={this.goFilter}>
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
                        <ButtonGroup {...this.props} sflAction={this.sflAction} likeAction={this.likeAction} dislikeAction={this.dislikeAction} goAction={this.goAction}/>
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
