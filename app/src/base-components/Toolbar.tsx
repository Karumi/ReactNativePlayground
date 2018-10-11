import {  Body, Header, Title } from "native-base";
import * as React from "react";
import t from "../i18n";

class Toolbar extends React.Component {
    public render() {
        return (
            <Header>
                <Body>
                    <Title>{t.appName}</Title>
                </Body>
            </Header>
        );
    }
}

export default Toolbar;
