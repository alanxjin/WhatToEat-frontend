import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Content, Footer, FooterTab, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';
import MapView from 'react-native-maps';
import DetailButtonGroup from '../Components/DetailButtonGroup'
import DetailContent from '../Components/DetailContent'


export default class DetailScreen extends Component {
    render() {
        return (
            <Container>
                <StatusBar
                    translucent
                    backgroundColor="rgba(0, 0, 0, 0.20)"
                    animated
                />

                <Content style={{ backgroundColor: "#fff" }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ height: 200 }}>
                            <Image style={{ flex: 1 }} source={{ uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' }} />
                        </View>
                        <DetailContent />

                        <View style={{ height: 200 }}>
                            <MapView
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                style={{ flex: 1 }}
                            />
                        </View>
                    </View>
                </Content>

                <Footer style={{ backgroundColor: "#F8F7F7", height: 80 }}>
                    <FooterTab>
                        <DetailButtonGroup />
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}