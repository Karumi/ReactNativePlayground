import { Body, Button, Header, Left, Title } from "native-base";
import * as React from "react";
import { Image } from "react-native";
import translator from "../../i18n";
import { ios } from "../../platform";
import assets from "./images/assets";

export interface Props {
    navigation: any;
    showBackButton?: boolean;
    title?: string;
}

class Toolbar extends React.Component<Props> {

    public static defaultProps: Partial<Props> = {
        showBackButton: false,
        title: translator().appName,
    };

    public render() {
        const showBack = this.props.showBackButton;
        const titleLeftPadding = ios() && showBack ? -12 : 0;
        const leftItem = showBack ? this.backButton() : null;
        return (
            <Header>
                <Left style={{ flex: 0, paddingLeft: 0 }} >
                    {leftItem}
                </Left>
                <Body style={{ left: titleLeftPadding }}>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
    private backButton() {
        return (
            <Button transparent onPress={() => this.props.navigation.pop()}>
                <Image source={assets.arrowBack} />
            </Button>
        );
    }
}

export default Toolbar;
