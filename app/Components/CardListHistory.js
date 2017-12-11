import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import { Container, Header, View, Card, CardItem, Text, Left, Body, Root } from 'native-base';
import CardElement from './HistoryCard'

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
        "tag": {},
        "dateCreated":1513016786216
    }
]

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     paddingTop: 22
    // },
    listView: {
        margin: 10,
        marginTop: 0
    },
})

export default class CardListHistory extends PureComponent {
    renderItem = (item) => {
        return <CardElement {...item.item} {...this.props} />
    }
    render() {
        return (
            <View>
            <FlatList
                style={styles.listView}
                data={cards}
                //data={this.props.hist_dishes}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}
