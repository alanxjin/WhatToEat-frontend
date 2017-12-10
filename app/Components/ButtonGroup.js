import React, { Component, PureComponent } from 'react';
import { View, Button, Text, Icon } from 'native-base';
import { StyleSheet, Modal, Alert } from 'react-native';
import { Button as RNButton } from 'react-native-elements'


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


const buttonOnPress = (props) => {
    //console.error("adasd")
}


const ButtonGroup = (props) => {

    return (
        <View style={styles.buttonGroup}>
            <View style={styles.buttonView}>
                <Button style={styles.button} onPress={buttonOnPress}>
                    <Icon name='undo' style={styles.icon1} />
                </Button>
            </View>
            <View style={styles.buttonView}>
                <Button style={styles.button} onPress={props.likeAction}>
                    <Icon name='heart' style={styles.icon2} />
                </Button>
            </View>
            <View style={styles.buttonView}>
                <Button style={styles.button} onPress={props.dislikeAction}>
                    <Icon name='close' style={styles.icon3} />
                </Button>
            </View>
            <View style={styles.buttonView}>
                <Button style={styles.button} onPress={buttonOnPress}>
                    <Icon name='bookmark' style={styles.icon4} />
                </Button>
            </View>
        </View>
    );
};

export default ButtonGroup

// export default class ButtonGroup extends PureComponent {
//     constructor() {
//         super()
//         this.buttonOnPress = this.buttonOnPress.bind(this)
//     }

//     buttonOnPress() {
//         console.error("adasd")
//     }
//     render() {
//         return (
//             <View style={styles.buttonGroup}>
//                 <View style={styles.buttonView}>
//                     <Button style={styles.button} onPress={this.buttonOnPress}>
//                         <Icon name='undo' style={styles.icon1} />
//                     </Button>
//                 </View>
//                 <View style={styles.buttonView}>
//                     <Button style={styles.button} onPress={this.buttonOnPress}>
//                         <Icon name='heart' style={styles.icon2} />
//                     </Button>
//                 </View>
//                 <View style={styles.buttonView}>
//                     <Button style={styles.button} onPress={this.buttonOnPress}>
//                         <Icon name='close' style={styles.icon3} />
//                     </Button>
//                 </View>
//                 <View style={styles.buttonView}>
//                     <Button style={styles.button} onPress={this.buttonOnPress}>
//                         <Icon name='bookmark' style={styles.icon4} />
//                     </Button>
//                 </View>
//             </View>
//         );
//     }
// };

