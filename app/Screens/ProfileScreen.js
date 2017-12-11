import React, { Component, PureComponent } from 'react'
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right,Title, Text, Button, Icon, View,Thumbnail} from 'native-base';
import colors from '../theme/color'

const styles = StyleSheet.create({
    basicInfo: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:10
    },
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
    imageWrapper: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 40,
        position: 'absolute',
        zIndex:-1
    },
    image: {
        flex: 2,
        width: null,
        height: null,
        opacity: 0.3
    },
    text: {
        backgroundColor:"rgba(0,0,0,0)",
        marginTop: 15,
        fontSize: 16,
        alignSelf: "center"
    }
   
});

export default class Profile extends PureComponent {
    constructor(props){
        super(props);
        this.state={

        }
    }
    returnOnPress = () => {
        this.props.navigation.goBack();
    }
    render(){
        let email = "alan@alan.com";
        let username = "Alan";
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
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={this.props.screenProps.settings.siderbarImg} />
                </View>
                <View style={styles.basicInfo}>
                    <Thumbnail large style={styles.thumbnail} source={this.props.screenProps.settings.avatarImg} />
                    <Text style={{marginTop: 15}}>{username}</Text>
                    <Text style={styles.text}> {email} </Text>
                </View>
                <View>

                </View>
               
            </Container>
        )
    }
}