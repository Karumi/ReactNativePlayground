import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app usign Typescript!</Text>
      </View>
    )
  }
}

const defaultBackgroundColor = '#FFF'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
