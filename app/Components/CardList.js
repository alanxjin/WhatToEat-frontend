import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import { Container, Header, View, Card, CardItem, Text, Left, Body, Root } from 'native-base';
import CardElement from './ListCard'

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

export default class CardList extends PureComponent {
    renderItem = (item) => {
        return <CardElement {...item.item} {...this.props} />
    }
    render() {
        return (
            <View>
            <FlatList
                style={styles.listView}
                // data={cards}
                data={this.props.saved_dishes}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}
