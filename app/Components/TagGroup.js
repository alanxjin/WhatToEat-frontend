import React, { Component, PureComponent } from 'react';
import { View, Button, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import Tag from '../Components/Tag';

const styles = StyleSheet.create({
    tagGroup: {
        // flex: 1,
        flexDirection: 'row'
    },
    tagView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default class TagGroup extends PureComponent {
    render() {
        return (
            <View>
                <View style={styles.tagGroup}>
                    <Tag style={styles.tagView} text='Chinese'/>
                    <Tag style={styles.tagView} text='American'/>
                    <Tag style={styles.tagView} text='Korean'/>
                </View>
                <View style={styles.tagGroup}>
                    <Tag style={styles.tagView} text='Japanese'/>
                    <Tag style={styles.tagView} text='French'/>
                    <Tag style={styles.tagView} text='Italian'/>
                </View>
                <View style={styles.tagGroup}>
                    <Tag style={styles.tagView} text='Indian'/>
                    <Tag style={styles.tagView} text='Mexican'/>
                    <Tag style={styles.tagView} text='Thai'/>
                </View>
                <View style={styles.tagGroup}>
                    <Tag style={styles.tagView} text='Chicken'/>
                    <Tag style={styles.tagView} text='Beef'/>
                    <Tag style={styles.tagView} text='Pork'/>
                </View>
                <View style={styles.tagGroup}>
                    <Tag style={styles.tagView} text='Vegetarian'/>
                    <Tag style={styles.tagView} text='Vegan'/>
                    <Tag style={styles.tagView} text='Seafood'/>
                </View>
                <View style={styles.tagGroup}>
                    <Tag style={styles.tagView} text='Dessert'/>
                    <Tag style={styles.tagView} text='Burger'/>
                    <Tag style={styles.tagView} text='Chip'/>
                </View>
                <View style={styles.tagGroup}>
                    <Tag style={styles.tagView} text='Noodles'/>
                    <Tag style={styles.tagView} text='Fish'/>
                    <Tag style={styles.tagView} text='Soup'/>
                </View>
                <View style={styles.tagGroup}>
                    <Tag style={styles.tagView} text='Rice'/>
                    <Tag style={styles.tagView} text='Salad'/>
                    <Tag style={styles.tagView} text='Spicy'/>
                </View>
            </View>
        )
    }
}