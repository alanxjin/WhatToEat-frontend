import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast } from 'native-base';
const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: { uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' }
    },
    {
        text: 'Card two',
        name: 'two',
        image: require('../../images/splash.jpg')
    }
];
export default class DeckSwiperExample extends Component {
    render() {
        return (
            <View style={{ margin: 5 }}>
                <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                        <Card style={{ elevation: 3, overflow: 'hidden', borderRadius: 10 }}>
                            {/* <CardItem>
                                <Left>
                                    <Thumbnail source={item.image} />
                                    <Body>
                                        <Text>{item.text}</Text>
                                        <Text note>NativeBase</Text>
                                    </Body>
                                </Left>
                            </CardItem> */}
                            <CardItem cardBody style={{ borderRadius: 0,  overflow: 'hidden',}}>
                                <Image style={{ height: 300, flex: 1 }} source={item.image} />
                            </CardItem>
                            <CardItem>
                                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                <Text>{item.name}</Text>
                            </CardItem>
                        </Card>
                    }

                    onSwipeRight={(card) => {
                        console.log(card)
                        Toast.show({
                            text: 'Wrong password!',
                            type: 'warning',
                            duration: 1000,
                            position: 'top',
                        })
                    }}

                    onSwipeLeft={(card) => {
                        console.log(card)
                        Toast.show({
                            text: 'Wrong password!',
                            type: 'success',
                            duration: 1000,
                            position: 'top',
                        })
                    }}
                />
            </View>
        );
    }
}