import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Butto, Root } from 'native-base';
import CardElement from './Card'



const styles = StyleSheet.create({
    deckView: {
        marginTop: 27,
        margin: 20
    },
});


export default class CardStack extends PureComponent {
    // constructor(props){
    //     super(props)
    // }

    componentDidMount() {
        this.props.getDeck(this.refs.deck)
    }

    renderItem = (item) => {
        return <CardElement {...item} {...this.props} />
    }

    // onSwipeRight = (card) => {
    //     // Toast.show({
    //     //     text: 'Nope!',
    //     //     type: 'warning',
    //     //     duration: 1000,
    //     //     position: 'top',
    //     // })
    // }

    // onSwipeLeft = (card) => {
    //     // Toast.show({
    //     //     text: 'Yup!',
    //     //     type: 'success',
    //     //     duration: 1000,
    //     //     position: 'top',
    //     // })
    // }

    render() {
        return (
            <Root>
                <View style={styles.deckView}>
                    <DeckSwiper
                        ref={"deck"}
                        dataSource={this.props.cards}
                        renderItem={this.renderItem}
                        onSwipeRight={this.props.onSwipeRight}
                        onSwipeLeft={this.props.onSwipeLeft}
                    />
                </View>
            </Root>
        );
    }
}