import React, { Component } from 'react';
import { View, Button, H1, H2, H3, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';



const styles = StyleSheet.create({
    content: { padding: 20 },
    row: {
        margin: 5, flexDirection: "row"
    },
    body: {
        flex: 1,
        margin: 10,
        flexDirection: 'column'
    },
    bodyUpper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    thumbnail: {
        margin: 15
    },
    text: {
        color: "#959899",
        fontSize: 12,
        alignSelf: "center"
    }
});



export default class DetailContent extends Component {
    render() {
        return (
            <View style={styles.content}>
{/* 
                <View style={styles.row}>
                    <Text style={{ color: '#C3BFBF' }}>Restaurant</Text>
                </View> */}
                <View style={styles.row}>
                    <H1>{this.props.cardInfo.restaurant.name}</H1>
                </View>
                <View style={styles.row}>
                    <Text style={{ color: '#93F04F' }}>Open</Text>
                    <Text style={{ color: '#C3BFBF' }}> until 9:00 PM</Text>
                </View>
                
                <View style={styles.row}>
                    <Text style={{ color: '#C3BFBF' }}>Japanese, American (New), Sushi Bars</Text>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Price:</Text>
                    </View>
                    <View style={{ flex: 0.25 }}>
                        <StarRating
                            disabled={false}
                            emptyStar={'usd'}
                            fullStar={'usd'}
                            halfStar={'usd'}
                            maxStars={5}
                            rating={this.props.cardInfo.restaurant.price}
                            starColor={'#FFAE40'}
                            emptyStarColor={'#C3BFBF'}
                            starSize={20}
                        />
                    </View>
                </View>


                <View style={styles.row}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Rating:</Text>
                    </View>
                    <View style={{ flex: 0.35 }}>
                        <StarRating
                            disabled={false}
                            emptyStar={'heart'}
                            fullStar={'heart'}
                            halfStar={'heart'}
                            maxStars={5}
                            rating={this.props.cardInfo.restaurant.stars}
                            starColor={'#FF6363'}
                            emptyStarColor={'#C3BFBF'}
                            starSize={20}
                        />
                    </View>
                </View>

                {/* <View style={styles.row}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Distance:</Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>1.7 miles</Text>
                    </View>

                </View> */}
            </View>
        );
    }
};

