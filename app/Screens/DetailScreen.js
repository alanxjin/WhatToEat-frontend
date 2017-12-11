import React, { Component, PureComponent } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Left, Right, Content, Footer, FooterTab, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';
import MapView from 'react-native-maps';
import DetailButtonGroup from '../Components/DetailButtonGroup'
import DetailContent from '../Components/DetailContent'


const selectedCard = {
    "_id": {
        "$oid": "5a2bbf11aece2b92b868c321"
    },
    "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/zOfwA5pljwmXmWYUpOAShw/o.jpg",
    "name": "Wings&Bleu Cheese",
    "rating": 0,
    "restaurant": {
        "address": {
            "city": "Urbana",
            "coord": [
                40.1138182155,
                -88.2076892527
            ],
            "state": "IL",
            "street": "201 N Broadway Ave",
            "zipcode": "61801"
        },
        "hours": {
            "Friday": "11:00-23:00",
            "Monday": "11:00-22:00",
            "Saturday": "11:00-23:00",
            "Sunday": "11:00-22:00",
            "Thursday": "11:00-22:00",
            "Tuesday": "11:00-22:00",
            "Wednesday": "11:00-22:00"
        },
        "name": "Black Dog Smoke & Ale House",
        "price": 2,
        "rest_id": "9MnbQg7kfb_WgxoV0hXKSQ",
        "stars": 4.5
    },
    "tag": {}
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fff"
    },
    imageView: {
        height: 250
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



export default class DetailScreen extends PureComponent {
    componentWillMount() {
        this.initialRegion = {
            latitude: this.props.screenProps.settings.selected.restaurant.address.coord[0],
            longitude: this.props.screenProps.settings.selected.restaurant.address.coord[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

    // componentWillMount(){
    //     this.initialRegion = {
    //         latitude: selectedCard.restaurant.address.coord[0],
    //         longitude:  selectedCard.restaurant.address.coord[1],
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //     }

    // }

    mapOnPress = () => {
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
                        <Image style={styles.image} source={{ uri: this.props.screenProps.settings.selected.imgUrl }} />
                    </View>
                    <DetailContent  {...this.props} cardInfo={this.props.screenProps.settings.selected} />

                    <View style={styles.mapView}>
                        <MapView
                            initialRegion={this.initialRegion}
                            liteMode
                            onPress={this.mapOnPress}
                            showsUserLocation={true}
                            style={styles.map}
                        >
                            <MapView.Marker
                                coordinate={this.initialRegion}
                            />
                        </MapView>
                    </View>
                </Content>

                <Footer style={styles.footer}>
                    <FooterTab>
                        <DetailButtonGroup {...this.props} />
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}