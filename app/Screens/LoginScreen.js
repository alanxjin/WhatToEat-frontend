/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import colors from '../theme/color';

import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Alert,
    TextInput,
    Keyboard,
    AsyncStorage,
    Fetch
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



export default class LoginScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Login',
    };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
        }
    }

    updateEmail(email) {this.setState({email})}
    updatePassword(pass) {this.setState({pass})}

    handleSignUp() {
        const { navigate } = this.props.navigation;
        navigate('SignUp');
    }

    handleSignIn() {
        email = this.state.email;
        pass = this.state.pass;

        fetch('https://wte-api.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': email,
                'password': pass
            }),
        }).then(function (response, error) {
            if (error) {Alert.alert(JSON.stringify(error))}
            else{
                // console.log(response.status)
                if (response.status === 200) {
                    const { navigate } = this.props.navigation;
                    navigate('Main', {'email': email, 'password': pass});
                } else {
                    Alert.alert('User Not Found Or Password Incorrect');
                }

            }

        }.bind(this));
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.logo_container}>
                    <Image
                        style={styles.image}
                        source={this.props.screenProps.settings.loginImg}
                        // resizeMode= 'stretch'
                    />
                    <View style={styles.title_container}>
                        <Text style={styles.title_text}>What To Eat</Text>
                    </View>
                </View>
                <View style={styles.info_container}>
                    <Form style={styles.form}>
                        <Item floatingLabel >
                            <Label style={{fontSize: 15, color:'grey'}}>{'Email'}</Label>
                            <Input onEndEditing={Keyboard.dismiss} autoCapitalize = 'none' keyboardType="email-address" onChangeText={(email) => { this.updateEmail(email)}}/>
                        </Item>
                        <Item floatingLabel>
                            <Label style={{fontSize: 15, color:'grey'}}>{'Password'}</Label>
                            <Input secureTextEntry={true} onChangeText={(pass) => { this.updatePassword(pass)}}/>
                        </Item>
                    </Form>
                    <View style={styles.buttons_container}>
                        <Button block style={[styles.button, styles.button_left]} onPress={this.handleSignUp.bind(this)}><Text style={{color: colors.darkgrey, letterSpacing: 2}}>SIGN UP</Text></Button>
                        <Button block style={[styles.button, styles.button_right]} onPress={this.handleSignIn.bind(this)}><Text style={{color: 'white', letterSpacing: 2}}>SIGN IN</Text></Button>
                    </View>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor:'white',
    },
    logo_container: {
        flex: 3.5,
    },
    title_container: {
        position: 'absolute',
        top: 120,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    title_text: {
        fontSize: 40,
        fontFamily: 'MarkerFelt',
        color: colors.darkgrey,
        backgroundColor:"rgba(0,0,0,0)"
    },
    info_container: {
        flex: 5,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
    },
    form: {
        width:"85%",
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20
    },
    image: {
        flex: 1,
        height: 'auto',
        width: '100%',
        opacity: 0.3
    },
    label: {
        fontSize: 12,
        color: 'grey'
    },
    buttons_container:{
        marginTop:50,
        marginLeft:35,
        marginRight:35,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '48%',
        height: 40,
        borderRadius:8,
    },
    button_left: {
        backgroundColor: 'white',
        borderColor: colors.darkgrey,
        borderWidth: 1,
    },
    button_right: {
        backgroundColor: colors.darkgrey
    }
});
