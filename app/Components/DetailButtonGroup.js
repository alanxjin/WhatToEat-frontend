import React, { Component, PureComponent } from 'react';
import { View, Button, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    buttonGroup: {
        flex: 1,
        flexDirection: 'row'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'auto',
        height: 56,
        width: 56,
        borderRadius: 50,
        backgroundColor: "#fff"
    },
    icon1: {
        color: "#FFAE40"
    },
    icon2: {
        color: "#FF6363"
    },
    icon3: {
        color: "#A9A7A7"
    },
    icon4: {
        color: "#93F04F"
    }
});


export default class DetailButtonGroup extends PureComponent {
    returnOnPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.buttonGroup}>
                <View style={styles.buttonView}>
                    <Button style={styles.button}  onPress={this.returnOnPress}>
                        <Icon name='chevron-left' style={styles.icon1} />
                    </Button>
                </View>
                <View style={styles.buttonView}>
                    <Button style={styles.button}>
                        <Icon name='heart' style={styles.icon2} />
                    </Button>
                </View>
                <View style={styles.buttonView}>
                    <Button style={styles.button}>
                        <Icon name='close' style={styles.icon3} />
                    </Button>
                </View>
                <View style={styles.buttonView}>
                    <Button style={styles.button}>
                        <Icon name='bookmark' style={styles.icon4} />
                    </Button>
                </View>
            </View>
        );
    }
};

