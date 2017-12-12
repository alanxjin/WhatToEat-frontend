import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';
import StarRating from 'react-native-star-rating';
import colors from '../theme/color'
var dateFormat = require('dateformat');

const { height: screenHeight } = Dimensions.get('window');
let cardHeight = screenHeight * 0.3;
cardHeight = cardHeight < 160 ? 160 : cardHeight;

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

export default class HistoryCard extends PureComponent {
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
        let dish_info = {}; 
        dish_info["imgUrl"] = this.props.imgUrl;
        dish_info["name"] = this.props.name;
        dish_info["rating"] = this.props.rating;
        dish_info["restaurant"] = this.props.restaurant;
        dish_info["tag"] = this.props.tag;
        this.props.navigation.navigate('Detail',dish_info);
    }

    render() {
       
        // console.log(this.props);
        return (
            <Card style={styles.card}>
                <CardItem style={styles.cardHeader}>
                    <Text style={styles.headerText}>{dateFormat(new Date(Number(this.props.dateCreated)))}</Text>
                    <View style={{ flex: 1}}>
                        <StarRating
                            disabled={false}
                            emptyStar={'star'}
                            fullStar={'star'}
                            halfStar={'star'}
                            maxStars={5}
                            starColor={'#FFE220'}
                            emptyStarColor={'#C3BFBF'}
                            starSize={14}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                    </View>
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