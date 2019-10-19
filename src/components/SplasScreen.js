import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, StatusBar, Text } from 'react-native'

export default SplashScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        color='#282C34'
        hidden={true}
      />
      <Text style={styles.title}>{props.title}</Text>
      <ActivityIndicator
        color='white'
        size='large'
      />
    </View>
  )
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282C34'
  },
  title: {
    color: '#fff',
    fontSize: 30,
    margin: 40,
    fontWeight: 'bold'
  }
});
