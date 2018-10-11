import {  Body, Header, Title } from "native-base";
import * as React from "react";
import translator from "../i18n";

class Toolbar extends React.Component {
    public render() {
        return (
            <Header>
                <Body>
                    <Title>{translator().appName}</Title>
                </Body>
            </Header>
        );
    }
}

export default Toolbar;
