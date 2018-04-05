import React, { Component } from 'react'
import { Text, View, Image, Button } from 'react-native'
import styles from '../style/style'

const imgShow = require('../img/gtx2080.jpg')

class Show extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={imgShow} style={styles.imageStyle}/>
                <Button 
                    title="Back to landing"
                    onPress={() => this.props.switchScreen('landing')}
                />
            </View>
        )
    }
}

export default Show