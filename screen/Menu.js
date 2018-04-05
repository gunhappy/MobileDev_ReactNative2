import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class Menu extends Component {

    render() {
        return (
            <View>
                <View style={{ marginTop: 50 }}>
                    <Button title='Go to Register' onPress={() => this.props.switchScreen('register')}/>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button title='Go to Login' onPress={() => this.props.switchScreen('login')}/> 
                </View>
            </View>
        )
    }
}