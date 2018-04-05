import React, { Component } from 'react'
import { View, Button, TextInput, Image, Text } from 'react-native'

export default class Register extends Component {
    render() {
        return (
            <View>
                <Text>Username</Text>
                <TextInput placeholder='Type your username'/>
                <Text>Password</Text>
                <TextInput placeholder='Type your password'/>
                <Text>Confirm Password</Text>
                <TextInput placeholder='Confirm your password again'/>
                <Text>Email</Text>
                <TextInput placeholder='Type your email'/>
                <View style={{ marginTop: 20 }}>
                    <Button title="Register" onPress={() => this.props.switchScreen('menu')}/>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button title="Back" onPress={() => this.props.switchScreen('menu')}/>
                </View>
            </View>
        )
    }
}