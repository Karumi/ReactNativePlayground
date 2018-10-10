import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app usign Typescript and Jest!</Text>
      </View>
    );
  }
}

const defaultBackgroundColor = "#FFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultBackgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
