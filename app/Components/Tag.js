import React, { Component, PureComponent } from 'react';
import { View, Button, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import colors from '../theme/color'

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        height: 35,
        width: 110,
        borderRadius: 50,
        margin: 6,
        backgroundColor: colors.mediumgrey,
    },
    restrict: {
        backgroundColor: colors.red,
    },
    prefer: {
        backgroundColor: colors.mediumgreen,
    },
    text: {
        fontSize: 15,
        color: 'white'
    }
})

export default class Tag extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            notPrefer: global[this.props.text] == undefined || global[this.props.text] == 0,
            prefer: global[this.props.text] == 1,
            restrict: global[this.props.text] == -1,
        }
    }
    handleTagPress = () => {
        if (this.state.notPrefer === true) {
            this.setState({
                notPrefer: false,
                prefer: true
            })
            global[this.props.text] = 1;
        } else if (this.state.prefer === true) {
            this.setState({
                prefer: false,
                restrict: true
            })
            global[this.props.text] = -1;
        } else if (this.state.restrict === true) {
            this.setState({
                restrict: false,
                notPrefer: true
            })
            global[this.props.text] = 0;
        }
    }
    render() {
        console.log(global[this.props.text]);
        return (
            <Button style={[styles.button, this.state.prefer && styles.prefer,
            this.state.restrict && styles.restrict]} onPress={this.handleTagPress}>
                <Text style={styles.text}>{this.props.text}</Text>
            </Button>
        )
    }
}