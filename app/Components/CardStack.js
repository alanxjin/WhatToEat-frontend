import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';
const cards = [
    {
        text: 'Card One',
        name: 'Yummy Burger',
        image: { uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' }
    },
    {
        text: 'Card two',
        name: 'Healthy Food',
        image: require('../../images/splash.jpg')
    }
];
export default class CardStack extends Component {
    render() {
        const { height: screenHeight } = Dimensions.get('window');
        let cardHeight = screenHeight * 0.5;
        cardHeight = cardHeight < 300 ? 300 : cardHeight;
        return (
            <View style={{ margin: 20 }}>
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
                            <CardItem cardBody style={{ borderRadius: 0, overflow: 'hidden', }}>
                                <Image style={{ height: cardHeight, flex: 1 }} source={item.image} />
                            </CardItem>
                            <CardItem style={{ justifyContent: 'space-between' }}>
                                <Text>{item.name}</Text>
                                <Button transparent={true} style={{ height: 30 }} onPress={() => {  this.props.navigation.navigate('Detail') }}>
                                    <Icon name="info-circle" style={{ color: '#C3BFBF' }} />
                                </Button>
                            </CardItem>
                        </Card>
                    }

                    onSwipeRight={(card) => {
                        console.log(card)
                        Toast.show({
                            text: 'Nope!',
                            type: 'warning',
                            duration: 1000,
                            position: 'top',
                        })
                    }}

                    onSwipeLeft={(card) => {
                        console.log(card)
                        Toast.show({
                            text: 'Yup!',
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