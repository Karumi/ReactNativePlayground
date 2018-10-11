import {  Body, Header, Title } from "native-base";
import * as React from "react";

class Toolbar extends React.Component {
    public render() {
        return (
            <Header>
                <Body>
                    <Title>React Native Playground</Title>
                </Body>
            </Header>
        );
    }
}

export default Toolbar;
