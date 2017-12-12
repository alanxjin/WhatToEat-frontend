import React, { Component, PureComponent } from 'react';
import { View, Button, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import colors from '../theme/color'
import StarRating from 'react-native-star-rating';

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        height: 40,
        width: 150,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.darkgrey,
        margin: 10,
        backgroundColor: 'white',
    },
    prefer: {
        backgroundColor: colors.darkgrey,
    },
})

export default class FilterButton extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            prefer: true,
        }
    }



    handleButtonPress = () => {
        // console.log(dishes);
        if (this.state.prefer === false) {
            this.setState({
                prefer: true
            })
        } else if (this.state.prefer === true) {
            this.setState({
                prefer: false
            })
        }

        this.props.onPress();
    }
    render() {
        return (
            <Button style={[styles.button, this.state.prefer && styles.prefer]} onPress={this.handleButtonPress}>
                <StarRating
                    disabled={true}
                    emptyStar={this.props.starType}
                    fullStar={this.props.starType}
                    halfStar={this.props.starType}
                    maxStars={Number(this.props.starMax)}
                    rating={Number(this.props.starNumber)}
                    starColor={this.props.starColor}
                    emptyStarColor={this.props.emptyColor}
                    starSize={14}
                />
            </Button>
        )
    }
}