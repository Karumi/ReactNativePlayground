import * as React from "react";
import { Text, View } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";

export interface Props {
    navigation: any;
}
class CustomComponent extends React.Component<Props> {
    public render() {
        return (
            <View>
                <Toolbar
                    title={translator().customComponentScreenTitle}
                    navigation={this.props.navigation}
                    showBackButton={true}
                /><Text>Android</Text>
            </View>
        );
    }
}
export default CustomComponent;
