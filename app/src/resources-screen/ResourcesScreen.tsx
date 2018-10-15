import { Container } from "native-base";
import * as React from "react";
import { Image } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";
import assets from "./images/assets";

export interface Props {
    navigation: any;
}
class ResourcesScreen extends React.Component<Props> {
    public render() {
        return (
            <Container>
                <Toolbar
                    title={translator().resourcesScreenTitle}
                    navigation={this.props.navigation}
                    showBackButton={true}
                />
                <Image source={assets.arrow} />
            </Container>
        );
    }
}

export default ResourcesScreen;
