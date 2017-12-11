import React, { Component, PureComponent } from 'react'
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right,Title, Text, Button, Icon} from 'native-base';
import colors from '../theme/color'

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F8F7F7',
        height: 80,
        borderBottomColor: colors.lightergrey,
    },
    icon: {
        marginTop: 10,
        fontSize: 25
    },
    headerBody: {
        marginTop: 15,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});

export default class Profile extends PureComponent {

    returnOnPress = () => {
        this.props.navigation.goBack();
    }
    render(){
        return(
            <Container>
                 <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.returnOnPress}>
                            <Icon style={styles.icon} name='angle-left' />
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                        <Title>My Profile</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
            </Container>
        )
    }
}