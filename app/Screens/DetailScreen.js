import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Left, Right, Content, Footer, FooterTab, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';
import MapView from 'react-native-maps';
import DetailButtonGroup from '../Components/DetailButtonGroup'
import DetailContent from '../Components/DetailContent'



const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fff"
    },
    imageView: {
        height: 200
    },
    image: {
        flex: 1
    },
    mapView: {
        height: 200
    },
    map: {
        flex: 1
    },
    footer: {
        backgroundColor: "#F8F7F7",
        height: 80
    }
});

const image = { uri: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' }
const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

export default class DetailScreen extends Component {
    constructor(props) {
        super(props)
        this.mapOnPress = this.mapOnPress.bind(this)
    }

    mapOnPress() {
        this.props.navigation.navigate('Map')
    }

    render() {
        return (
            <Container>
                <StatusBar
                    translucent
                    backgroundColor="rgba(0, 0, 0, 0.20)"
                />

                <Content style={styles.content}>

                    <View style={styles.imageView}>
                        <Image style={styles.image} source={image} />
                    </View>
                    <DetailContent  {...this.props} />

                    <View style={styles.mapView}>
                        <MapView
                            initialRegion={initialRegion}
                            liteMode
                            onPress={this.mapOnPress}
                            style={styles.map}
                        />
                    </View>
                </Content>

                <Footer style={styles.footer}>
                    <FooterTab>
                        <DetailButtonGroup {...this.props}/>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}