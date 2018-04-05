import React, { Component } from 'react'
import { Text, View, Image, Button } from 'react-native'
import styles from '../style/style'

const image = require('../img/logo.png')

class Landing extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={image} style={styles.imageStyle}/>
                <Text> Hello I am here </Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title='Click to go to next view'
                        onPress={() => this.props.switchScreen('show')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title='Logout'
                        onPress={() => this.props.switchScreen('menu')}
                    />
                </View>
            </View>
        )
    }
}

export default Landing
