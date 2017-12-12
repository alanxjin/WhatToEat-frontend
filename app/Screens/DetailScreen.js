import React, { Component, PureComponent } from 'react';
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
    constructor(props){
        super(props);
        this.dish_info =  this.props.navigation.state.params;
        this.initialRegion = {
            latitude: this.dish_info.restaurant.address.coord[0],
            longitude: this.dish_info.restaurant.address.coord[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }
    componentWillMount() {
       
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
        this.props.navigation.navigate('Map',this.initialRegion)
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
                        <Image style={styles.image} source={{ uri: this.dish_info.imgUrl }} />
                    </View>
                    <DetailContent  {...this.props} cardInfo={this.dish_info} />

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