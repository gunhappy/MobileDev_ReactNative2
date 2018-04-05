import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Menu from './screen/Menu'
import Register from './screen/Register'
import Login from './screen/Login'
import Landing from './screen/Landing'
import Show from './screen/Show'

export default class App extends Component {

  state = {
      currentScreen: 'menu'
  }

  switchScreen = (screen) => {
      this.setState({ currentScreen: screen })
  }

  renderScreen = () => {
      if (this.state.currentScreen === 'register') {
          return <Register switchScreen={this.switchScreen}/>
      } else if (this.state.currentScreen === 'login') {
          return <Login switchScreen={this.switchScreen}/>
      } else if (this.state.currentScreen === 'landing') {
          return <Landing switchScreen={this.switchScreen}/>
      } else if (this.state.currentScreen === 'show') {
          return <Show switchScreen={this.switchScreen}/>
      }
      else {
        return <Menu switchScreen={this.switchScreen}/>
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
