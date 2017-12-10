import React, { Component, PureComponent } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Left, Right, Content, Footer, FooterTab, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';
import MapView from 'react-native-maps';
import DetailButtonGroup from '../Components/DetailButtonGroup'
import DetailContent from '../Components/DetailContent'


const selectedCard = {
    "_id": {
        "$oid": "5a2bbf10aece2b92b868c22c"
    },
    "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/XZwIGL_4mQHRWXPjPq6W1w/o.jpg",
    "name": "Jalapeno, red onion and pepperoni!",
    "rating": 0,
    "restaurant": {
        "address": {
            "city": "Champaign",
            "coord": [
                40.1164204,
                -88.2433829
            ],
            "state": "IL",
            "street": "",
            "zipcode": ""
        },
        "hours": {
            "Friday": "11:00-14:00",
            "Monday": "11:00-14:00",
            "Saturday": "10:00-14:00",
            "Thursday": "11:00-14:00",
            "Tuesday": "11:00-14:00",
            "Wednesday": "11:00-14:00"
        },
        "name": "Dragon Fire Pizza",
        "price": 1,
        "rest_id": "a3hjBPsnpcTpcquQXLeS0w",
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



export default class DetailScreen extends PureComponent {

    componentWillMount(){
        this.initialRegion = {
            latitude: selectedCard.restaurant.address.coord[0],
            longitude:  selectedCard.restaurant.address.coord[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }

    }

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
                        <Image style={styles.image} source={{ uri: selectedCard.imgUrl }} />
                    </View>
                    <DetailContent  {...this.props} cardInfo={selectedCard} />

                    <View style={styles.mapView}>
                        <MapView
                            initialRegion={ this.initialRegion}
                            liteMode
                            onPress={this.mapOnPress}
                            showsUserLocation={true}
                            style={styles.map}
                        >
                            <MapView.Marker
                                coordinate={ this.initialRegion}
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