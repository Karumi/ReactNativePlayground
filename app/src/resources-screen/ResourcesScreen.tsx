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
                <Image source={assets.anyAsset} style={{ height: 200, width: 200 }} />
                <Image source={assets.arrow} style={{ height: 20, width: 20}} />
            </Container>
        );
    }
}

export default ResourcesScreen;
