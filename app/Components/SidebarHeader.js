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
        position: 'absolute'
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        opacity: 0.3
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

export default class Sidebar extends PureComponent {
    render() {
        let {email} = this.props.navigation.state.params;
        let username = email.split("@")[0];
        return (
            <Body>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={this.props.screenProps.settings.siderbarImg} />
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyUpper}>
                        <Thumbnail large style={styles.thumbnail} source={this.props.screenProps.settings.avatarImg} />
                        <Text>{username}</Text>
                    </View>
                    <Text style={styles.text}> {email} </Text>
                </View>
            </Body>
        )
    }
}