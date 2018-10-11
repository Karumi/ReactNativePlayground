import { Container } from "native-base";
import * as React from "react";
import { Text } from "react-native";
import Toolbar from "./base-components/Toolbar";

export default class App extends React.Component {
  public render() {
    return (
      <Container>
        <Toolbar/>
        <Text>Open up App.js to start working on your app usign Typescript and Jest!</Text>
      </Container>
    );
  }
}
