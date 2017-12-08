import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Butto, Root } from 'native-base';
import CardElement from './Card'



const styles = StyleSheet.create({
    deckView: {
        margin: 20
    },
});


const cards = [
    {
        text: 'Card One',
        name: 'Yummy Burger',
        image: { uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' }
    },
    {
        text: 'Card two',
        name: 'Healthy Food',
        image: { uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' }
        // image: require('../../images/splash.jpg')
    }
];


export default class CardStack extends PureComponent {
    // constructor(props){
    //     super(props)
    // }
    renderItem = (item) => {
        return <CardElement {...item} {...this.props} />
    }

    onSwipeRight = (card) => {
        // Toast.show({
        //     text: 'Nope!',
        //     type: 'warning',
        //     duration: 1000,
        //     position: 'top',
        // })
    }

    onSwipeLeft = (card) => {
        // Toast.show({
        //     text: 'Yup!',
        //     type: 'success',
        //     duration: 1000,
        //     position: 'top',
        // })
    }

    render() {
        return (
            <Root>
                <View style={styles.deckView}>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={this.renderItem}
                        onSwipeRight={this.onSwipeRight}
                        onSwipeLeft={this.onSwipeLeft}
                    />
                </View>
            </Root>
        );
    }
}