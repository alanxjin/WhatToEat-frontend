import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image } from 'react-native';

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

export default class CardList extends PureComponent {
    
}
