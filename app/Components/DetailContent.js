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
    },
    openStatus:{
        marginLeft: 5, 
        fontSize: 14
    }
});



export default class DetailContent extends Component {
    constructor(props){
        super(props);
        this.weekdayConversion = {
            0:"Sunday",
            1:"Monday",
            2:"Tuesday",
            3:"Wednesday",
            4:"Thursday",
            5:"Friday",
            6:"Saturday"
        } 
    }
    render() {
        let openTime = this.props.cardInfo.restaurant.hours; 
        let openTimeToday = "N/A";
        let openStatus ="";
        let color = {color:"#959899"}
        if(openTime.Friday != undefined){
            let d = new Date();
            let curDay = this.weekdayConversion[d.getDay()];
            let curTime = ("0" + d.getHours()).slice(-2)   + ":" + ("0" + d.getMinutes()).slice(-2);
            openTimeToday = openTime[curDay];
            let timeRange = openTimeToday.split("-");
            let startTime = timeRange[0].length == 4? "0"+timeRange[0]:timeRange[0];
            let endTime = timeRange[1].length == 4? "0"+timeRange[1]:timeRange[1];
            if(curTime >= startTime && curTime <=endTime){
                openStatus = "Open";
                color = {color:"#93F04F"};
            }else{
                openStatus = "Close";
                color = {color:"red"};
            }
        }
        return (
            <View style={styles.content}>
                <View style={styles.row}>
                    <H1 style={{fontSize: 24}}>{this.props.cardInfo.restaurant.name}</H1>
                </View>
                <View style={styles.row}>
                    <Text style={{ color: '#C3BFBF', fontSize: 14 }}>Today: {openTimeToday}</Text>
                    <Text style={[styles.openStatus, color]}>{openStatus}</Text>
                </View>
                
                <View style={styles.row}>
                    <Text style={{ color: '#C3BFBF', fontSize: 14, marginBottom: 10 }}>Barbecue, Popular</Text>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Price:</Text>
                    </View>
                    <View style={{ flex: 0.15, marginTop: 2 }}>
                        <StarRating
                            disabled={true}
                            emptyStar={'usd'}
                            fullStar={'usd'}
                            halfStar={'usd'}
                            maxStars={4}
                            rating={this.props.cardInfo.restaurant.price}
                            starColor={'#FFAE40'}
                            emptyStarColor={'#C3BFBF'}
                            starSize={16}
                        />
                    </View>
                </View>


                <View style={styles.row}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Rating:</Text>
                    </View>
                    <View style={{ flex: 0.35, marginTop: 2 }}>
                        <StarRating
                            disabled={true}
                            emptyStar={'heart'}
                            fullStar={'heart'}
                            halfStar={'heart'}
                            maxStars={5}
                            rating={this.props.cardInfo.restaurant.stars}
                            starColor={'#FF6363'}
                            emptyStarColor={'#C3BFBF'}
                            starSize={16}
                        />
                    </View>
                </View>
            </View>
        );
    }
};

