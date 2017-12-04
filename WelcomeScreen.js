/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Alert
} from 'react-native';
import {
    Button,
    Input,
    InputGroup,
    Icon,
    Spinner,
    View,
    Item,
    Form,
    Label
} from 'native-base';

var axios = require('axios');

export default class WelcomeScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            conPass: ''
        }
    }
    updateEmail(email) {this.setState({email})}
    updatePassword(pass) {this.setState({pass})}
    updateConPassword(conpass) {this.setState({conPass})}

    handleSignUp() {
        email = this.state.email;
        pass = this.state.pass;
        // axios.get('').then(function (response_1) {
        //
        // }.bind(this)).catch(function (error_1) {
        //
        // });
    }

    handleSignIn() {
        email = this.state.email;
        pass = this.state.pass;
        conPass = this.state.conPass;
        // axios.get('').then(function (response_1) {
        //
        // }.bind(this)).catch(function (error_1) {
        //
        // });
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.logo_container}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    <View style={styles.title_container}>
                        <Text>What To Eat</Text>
                    </View>
                </View>
                <View style={styles.info_container}>
                    <Form>
                        <Item floatingLabel>
                            <Label style={{fontSize: 15, color:'grey'}}>{'Email'}</Label>
                            <Input type="text" onChangeText={(email) => { this.updateEmail(email)}}/>
                        </Item>
                        <Item floatingLabel>
                            <Label style={{fontSize: 15, color:'grey'}}>{'Password'}</Label>
                            <Input type="text" onChangeText={(pass) => { this.updatePassword(pass)}}/>
                        </Item>
                        <Item floatingLabel>
                            <Label style={{fontSize: 15, color:'grey'}}>{'Confirm Password'}</Label>
                            <Input type="text" onChangeText={(conpass) => { this.updateConPassword(conpass)}}/>
                        </Item>
                    </Form>
                    <View style={styles.buttons_container}>
                        <Button block style={[styles.button, styles.button_left]} onPress={this.handleSignUp.bind(this)}><Text style={{color: 'grey'}}>SIGN UP</Text></Button>
                        <Button block style={[styles.button, styles.button_right]} onPress={this.handleSignIn.bind(this)}><Text style={{color: 'white'}}>SIGN IN</Text></Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    logo_container: {
        flex: 1,
    },
    title_container: {
        position: 'absolute',
        top: 30,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',

    },
    info_container: {
        flex: 2,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        marginBottom:20
    },
    image: {
        flex: 1,
    },
    label: {
        fontSize: 15,
        color:'grey'
    },
    buttons_container:{
        marginTop:50,
        marginLeft:50,
        marginRight:50,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%',
        height: 35,
        borderRadius:10,
    },
    button_left: {
        backgroundColor: 'white'
    },
    button_right: {
        backgroundColor: 'black'
    }
});
