import React, { Component } from 'react'
import { View, Button, TextInput, Image } from 'react-native'
import styles from '../style/style'

const image = require('../img/logo.png')

export default class Login extends Component {
    render() {
        return (
            <View>
                <Image source={image} style={styles.imageStyle}/>
                <TextInput placeholder='Username'/>
                <TextInput placeholder='Password'/>
                <View style={{ marginTop: 20 }}>
                    <Button title='Login' onPress={() => this.props.switchScreen('landing')}/>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button title='Back' onPress={() => this.props.switchScreen('menu')}/>
                </View>
            </View>
        )
    }
}