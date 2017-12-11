import React, { Component, PureComponent } from 'react';
import { View, Button, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        height: 50,
        width: 115,
        borderRadius: 10,
        backgroundColor: '#3C3A3A',
        margin: 5
    },
    restrict: {
        backgroundColor: '#FF6363'
    },
    prefer: {
        backgroundColor: '#53D85D',
    },
})

export default class Tag extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            notPrefer: true,
            prefer: false,
            restrict: false,
        }
    }
    handleTagPress = () => {
        if (this.state.notPrefer === true) {
            this.setState({
                notPrefer: false,
                prefer: true
            })
        } else if (this.state.prefer === true) {
            this.setState({
                prefer: false,
                restrict: true
            })
        } else if (this.state.restrict === true) {
            this.setState({
                restrict: false,
                notPrefer: true
            })
        }
    }
    render() {
        return (
            <Button style={[styles.button, this.state.prefer && styles.prefer,
            this.state.restrict && styles.restrict]} onPress={this.handleTagPress}>
                <Text>{this.props.text}</Text>
            </Button>
        )
    }
}