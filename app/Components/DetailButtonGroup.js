import React, { Component } from 'react';
import { View, Button, Text, Icon } from 'native-base';

export default class DetailButtonGroup extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={{ justifyContent: 'center', alignSelf: 'auto', height: 56, width: 56, borderRadius: 50, backgroundColor: "#fff" }} onPress={() => { console.error("adasd") }}>
                        <Icon name='arrow-left' style={{ color: "#FFAE40" }} />
                    </Button>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={{ justifyContent: 'center', alignSelf: 'auto', height: 56, width: 56, borderRadius: 50, backgroundColor: "#fff" }} onPress={() => { console.error("adasd") }}>
                        <Icon name='heart' style={{ color: "#FF6363" }} />
                    </Button>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={{ justifyContent: 'center', alignSelf: 'auto', height: 56, width: 56, borderRadius: 50, backgroundColor: "#fff" }} onPress={() => { console.error("adasd") }}>
                        <Icon name='close' style={{ color: "#A9A7A7" }} />
                    </Button>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={{ justifyContent: 'center', alignSelf: 'auto', height: 56, width: 56, borderRadius: 50, backgroundColor: "#fff" }} onPress={() => { console.error("adasd") }}>
                        <Icon name='bookmark' style={{ color: "#93F04F" }} />
                    </Button>
                </View>
            </View>
        );
    }
};

