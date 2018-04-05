import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Landing from './Landing'
import Show from './Show' 

export default class App extends Component {
  state = {
    currentScreen: 'landing'
  }

  switchScreen = (screen) => {
    this.setState({ currentScreen: screen })
  }

  renderScreen = () => {
    if (this.state.currentScreen === 'landing') {
      return <Landing switchScreen={this.switchScreen}/>
    } else {
      return <Show switchScreen={this.switchScreen}/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderScreen() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
})
