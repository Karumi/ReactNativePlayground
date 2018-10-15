import { Button, Container, Text } from "native-base";
import * as React from "react";
import { Alert } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";
import screens from "../screens";

export interface Props {
    navigation: any;
}
class NavigationScreen extends React.Component<Props> {
    public render() {
        return (
            <Container>
                <Toolbar
                    title={translator().navigationScreenTitle}
                    navigation={this.props.navigation}
                    showBackButton={true}
                />
                <Button style={{ margin: 10 }} onPress={() => this.open(screens.resources)}>
                    <Text>Open resources screen</Text>
                </Button>
                <Button style={{ margin: 10 }} onPress={() => this.goBack()}>
                    <Text>Go back</Text>
                </Button>
                <Button style={{ margin: 10 }} onPress={() => this.showDialog()}>
                    <Text>Open dialog</Text>
                </Button>
                <Button style={{ margin: 10 }}>
                    <Text>Open modal screen</Text>
                </Button>
            </Container>
        );
    }

    private open(screen: string) {
        this.props.navigation.navigate(screen);
    }

    private goBack() {
        this.props.navigation.pop();
    }

    private showDialog() {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                { text: "Ask me later", onPress: () => alert("Ask me later pressed") },
                { text: "Cancel", onPress: () => alert("Cancel Pressed"), style: "cancel" },
                { text: "OK", onPress: () => alert("OK Pressed") },
            ],
            { cancelable: false },
        );
    }
}

export default NavigationScreen;
