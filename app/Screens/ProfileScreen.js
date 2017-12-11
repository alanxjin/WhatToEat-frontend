import React, { Component, PureComponent } from 'react'
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right,Title, Text, Button, Icon, View} from 'native-base';
import colors from '../theme/color'

const styles = StyleSheet.create({
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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    imageWrapper: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 40,
        position: 'absolute',
    },
});

export default class Profile extends PureComponent {

    returnOnPress = () => {
        this.props.navigation.goBack();
    }
    render(){
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
                <View style={{ padding: 15, flexDirection: 'column' }}>
                    <Button full transparent style={{ margin: 15, justifyContent: "flex-start", backgroundColor: "#F8F7F7" }} onPress={this.profileOnPress}>
                      <Icon name='user' style={{ color: "#959899" }} />
                      <Text uppercase={false} style={{ color: "#959899" }}>My Profile</Text>
                    </Button>

                    <Button full transparent style={{ margin: 15, justifyContent: "flex-start" }} onPress={this.savedOnPress}>
                      <Icon name='bookmark' style={{ color: "#959899" }} />
                      <Text uppercase={false} style={{ color: "#959899" }}>Saved List</Text>
                    </Button>

                    <Button full transparent style={{ margin: 15, justifyContent: "flex-start" }}>
                      <Icon name='cutlery' style={{ color: "#959899" }} />
                      <Text uppercase={false} style={{ color: "#959899" }}>Diet History</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}