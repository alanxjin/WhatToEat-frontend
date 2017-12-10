import React, { Component, PureComponent } from 'react';
import { Container, Header, Left, Right, Content, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';


export default class SavedScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.returnOnPress}>
                            <Icon name='chevron-left' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>WhatToEat</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='paper-plane-o' />
                        </Button>
                    </Right>
                </Header>

                <Container>

                </Container>

            </Container>
        );
    }
}

