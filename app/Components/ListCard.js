import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';
import StarRating from 'react-native-star-rating';
import colors from '../theme/color'
var dateFormat = require('dateformat');

const { height: screenHeight } = Dimensions.get('window');
let cardHeight = screenHeight * 0.3;
cardHeight = cardHeight < 160 ? 160 : cardHeight;

// const date = { "dateCreated": 1513016786216 }

const styles = StyleSheet.create({
    card: {
        elevation: 3,
        overflow: 'hidden',
        borderRadius: 10,
    },
    cardHeader: {
        backgroundColor: colors.darkgrey
    },
    headerText: {
        flex: 3,
        color: 'white',
        fontSize: 14
    },
    cardFooter: {
        justifyContent: 'space-between'
    },
    footerText: {
        color: 'grey',
    },
    image: {
        height: cardHeight,
        flex: 1
    },
    button: { height: 30 },
    icon: {
        color: '#C3BFBF',
        fontSize: 25
    }
});

export default class ListCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 0
        };
    }
    
    onStarRatingPress(rating) {
    this.setState({
        starCount: rating
    });
    }

    buttonOnPress = () => {
        this.props.navigation.navigate('Detail')
    }

    render() {
       
        // console.log(this.props);
        return (
            <Card style={styles.card}>
                <CardItem style={styles.cardHeader}>
                    {/* <Text style={styles.headerText}>{dateFormat(new Date(date.dateCreated))}</Text> */}
                    <Text style={styles.headerText}>Mon Dec 11 2017</Text>
                </CardItem>
                <CardItem cardBody style={styles.cardBody}>
                    <Image style={styles.image} source={{ uri: this.props.imgUrl }} />
                </CardItem>
                <CardItem style={styles.cardFooter}>
                    <Text style={styles.footerText}>{this.props.name}</Text>
                    <Button transparent={true} style={styles.button} onPress={this.buttonOnPress}>
                        <Icon name="info-circle" style={styles.icon} />
                    </Button>
                </CardItem>
            </Card>
        );
    }
}