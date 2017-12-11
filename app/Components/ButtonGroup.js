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
    button_ok:{
        justifyContent: 'center',
        alignSelf: 'auto',
        height: 56,
        width: 150,
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
    },
    go_text: {
        color: 'red', fontFamily: 'PhosphateInline', fontSize: 35, letterSpacing: 3, paddingTop: 22
    }
});


const buttonOnPress = (props) => {
    //console.error("adasd")
    // console.log(props);
}


// const sflAction = (props)=>{
//     // sflAction = ()=>{
//         console.log("inside")
//         console.log(props.cur_card);
//         // this.props.sflAction(this.props.screenProps.settings.selected.imUrl);
//     // }
// }

const ButtonGroup = (props) => {
    
    // sflAction = ()=>{
    //     console.log(this.props.screenProps.settings.selected.imUrl);
    //     // this.props.sflAction(this.props.screenProps.settings.selected.imUrl);
    // }

    return (

        // console.log(props);
        <View style={styles.buttonGroup}>
            {/* <View style={styles.buttonView}>
                <Button style={styles.button} onPress={buttonOnPress}>
                    <Icon name='undo' style={styles.icon1} />
                </Button>
            </View> */}
            <View style={styles.buttonView}>
                <Button style={styles.button} onPress={props.dislikeAction}>
                    <Icon name='close' style={styles.icon3} />
                </Button>
            </View>


            <View style={styles.buttonView}>
                <Button style={styles.button_ok} onPress={props.goAction}>
                    <Text style={styles.go_text}>GO</Text>
                    {/* <Icon name='heart' style={styles.icon2} /> */}
                    {/* <Text>Go</Text> */}
                    {/* <Text style={{color: colors.darkgrey, letterSpacing: 2}}>SIGN UP</Text> */}
                </Button>
            </View>
            
            <View style={styles.buttonView}>
                <Button style={styles.button} onPress={props.sflAction}>
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

