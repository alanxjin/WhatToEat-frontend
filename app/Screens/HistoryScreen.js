import React, { Component, PureComponent } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Left, Right, Content, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';

import colors from '../theme/color'
import CardListHistory from '../Components/CardListHistory'

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


export default class HistoryScreen extends Component {

    returnOnPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.returnOnPress}>
                            <Icon style={styles.icon} name='angle-left' />
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                        <Title>My Diet History</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>

                <Container>
                    <CardListHistory
                        navigation={this.props.navigation}
                        hist_dishes={this.props.navigation.state.params.hist_list}
                    />
                </Container>

            </Container>
        );
    }
}

