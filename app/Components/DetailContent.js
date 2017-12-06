import React, { Component } from 'react';
import { View, Button, H1, H2, H3, Text, Icon } from 'native-base';
import StarRating from 'react-native-star-rating';

export default class DetailContent extends Component {
    render() {
        return (
            <View style={{ padding: 20 }}>
                <View style={{ margin: 5, flexDirection: "row" }}>
                    <H1>Miga</H1>
                </View>
                <View style={{ margin: 5, flexDirection: "row" }}>
                    <Text style={{ color: '#93F04F' }}>Open</Text>
                    <Text style={{ color: '#C3BFBF' }}> until 11:00 PM</Text>
                </View>

                <View style={{ margin: 5, flexDirection: "row" }}>
                    <Text style={{ color: '#C3BFBF' }}>Japanese, American (New), Sushi Bars</Text>
                </View>

                <View style={{ margin: 5, flexDirection: "row" }}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Price:</Text>
                    </View>
                    <View style={{ flex: 0.15 }}>
                        <StarRating
                            disabled={false}
                            emptyStar={'usd'}
                            fullStar={'usd'}
                            halfStar={'usd'}
                            maxStars={4}
                            rating={3}
                            starColor={'#FFAE40'}
                            emptyStarColor={'#C3BFBF'}
                            starSize={20}
                        />
                    </View>
                </View>


                <View style={{ margin: 5, flexDirection: "row" }}>
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
                            rating={3}
                            starColor={'#FF6363'}
                            emptyStarColor={'#C3BFBF'}
                            starSize={20}
                        />
                    </View>
                </View>

                <View style={{ margin: 5, flexDirection: "row" }}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Distance:</Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>1.7 miles</Text>
                    </View>

                </View>
            </View>
        );
    }
};

