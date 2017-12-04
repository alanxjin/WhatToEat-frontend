import React, { Component } from 'react'
import { Image } from 'react-native'
import { View, Text } from 'native-base'

export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { settings } = this.props.screenProps
    setTimeout(() => {
      this.props.navigation.navigate('Login')
    }, settings.SplashTime)
  }

  render() {
    const { settings } = this.props.screenProps
    return (
      <View style={{flex:1}}>
         <Image style={{flex:1, width:null, height:null}} source={settings.splashImg}/>         
      </View>
    )
  }
}
