import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from './src/components/SplasScreen'
import HomeScreen from './src/screens/HomeScreen';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idLoading: true
    }
  }



  render() {
    return (
      <HomeScreen />
    )
  }
}
