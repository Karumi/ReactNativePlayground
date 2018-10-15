import { Container } from "native-base";
import * as React from "react";
import Toolbar from "./base-components/Toolbar";
import MainScreen from "./main-screen/MainScreen";

export default class App extends React.Component {
  public render() {
    return (
      <Container>
        <Toolbar />
        <MainScreen />
      </Container>
    );
  }
}
