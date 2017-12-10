import React, { Component, PureComponent } from 'react'
import { Image, StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
    View,
    Button,
    Form,
    Item,
    Icon,
    Thumbnail,
    Body
} from 'native-base'

const styles = StyleSheet.create({
    imageWrapper: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 40,
        position: 'absolute',
    },
    image: {
        flex: 2,
        width: null,
        height: null,
        opacity: 0.3
    },
    body: {
        flex: 2,
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
        marginTop: 15,
        fontSize: 16,
        alignSelf: "center"
    }
});

export default class Sidebar extends PureComponent {
    render() {
        return (
            <Body>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={this.props.screenProps.settings.siderbarImg} />
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyUpper}>
                        <Thumbnail large style={styles.thumbnail} source={this.props.screenProps.settings.avatarImg} />
                        <Text style={{marginTop: 15}}> Alpaca </Text>
                    </View>
                    <Text style={styles.text}> alpaca@gmail.com </Text>
                </View>
            </Body>
        )
    }
}