import { Button, Container, Text } from "native-base";
import * as React from "react";
import showAlertDialog from "../base-components/alert-dialog/alert";
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
                    <Text>{translator().openResourcesScreenButton}</Text>
                </Button>
                <Button style={{ margin: 10 }} onPress={() => this.goBack()}>
                    <Text>{translator().goBackButton}</Text>
                </Button>
                <Button style={{ margin: 10 }} onPress={() => this.showDialog()}>
                    <Text>{translator().openDialogButton}</Text>
                </Button>
                <Button style={{ margin: 10 }} onPress={() => this.openModal()}>
                    <Text>{translator().openModalScreenButton}</Text>
                </Button>
                <Text>{this.props.navigation.getParam("text", "")}</Text>
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
        showAlertDialog(
            translator().alertDialogTitle,
            translator().alertDialogSubtitle,
            [
                {
                    text: translator().thirdButtonAlertDialogTitle,
                    onPress: () => alert(translator().thirdButtonAlertDialogTitle),
                },
                {
                    text: translator().secondButtonAlertDialogTitle,
                    onPress: () => alert(translator().secondButtonAlertDialogTitle), style: "cancel",
                },
                {
                    text: translator().firstButtonAlertDialogTitle,
                    onPress: () => alert(translator().firstButtonAlertDialogTitle),
                },
            ],
            { cancelable: false },
        );
    }

    private openModal() {
        this.props.navigation.navigate(screens.navigationModal, {
            text: translator().modalModeTitle,
        });
    }
}

export default NavigationScreen;
