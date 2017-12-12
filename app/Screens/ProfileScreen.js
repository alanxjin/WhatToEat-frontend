import React, { Component, PureComponent } from 'react'
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Content, Title, Text, Button, Icon, View,Thumbnail} from 'native-base';
import colors from '../theme/color'
import TagGroup from '../Components/TagGroup'

const styles = StyleSheet.create({
    basicInfo: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:10,
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
        bottom: 480,
        position: 'absolute',
        zIndex:-1
    },
    image: {
        flex: 2,
        width: null,
        height: null,
        opacity: 0.2
    },
    thumbnail: {
        marginTop: 10,
    },
    text: {
        backgroundColor:"rgba(0,0,0,0)",
        marginTop: 10,
        fontSize: 14,
        alignSelf: "center",
        color: '#959899'
    },
    dietPreference: {
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: "center",
    },
    dietPreferenceText: {
        marginBottom: 14,
        fontSize: 18,
        color: colors.darkgrey,
        alignSelf: "center",
    },
    sampleButtonRed: {
        justifyContent: 'center',
        height: 30,
        width: 80,
        borderRadius: 5,
        margin: 6,
        marginLeft: 10,
        backgroundColor: colors.red,
    },
    sampleButtonGreen: {
        justifyContent: 'center',
        height: 30,
        width: 80,
        borderRadius: 5,
        margin: 6,
        marginRight: 10,
        backgroundColor: colors.mediumgreen,
    },
    sampleButtons: {
        flexDirection: 'row',
        alignSelf: "center",
        marginBottom: 10
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
        let {email} = this.props.navigation.state.params;
        let username = email.split("@")[0];
        return(
            <Container style={{backgroundColor: 'white'}}>
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
                <Content>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.image} source={this.props.screenProps.settings.siderbarImg} />
                    </View>
                    <View style={styles.basicInfo}>
                        <Thumbnail large style={styles.thumbnail} source={this.props.screenProps.settings.avatarImg} />
                        <Text style={{marginTop: 15}}>{username}</Text>
                        <Text style={styles.text}> {email} </Text>
                    </View>
                    <View style={styles.dietPreference}>
                        <Text style={styles.dietPreferenceText}>My Dietary Preference</Text>
                        <View style={styles.sampleButtons}>
                            <Button style={styles.sampleButtonGreen}><Text style={{fontSize: 14}}>Prefer</Text></Button>
                            <Button style={styles.sampleButtonRed}><Text style={{fontSize: 14}}>Never</Text></Button>
                        </View>
                        <TagGroup/>
                    </View>
                </Content>
               
            </Container>
        )
    }
}