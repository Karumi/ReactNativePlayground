import { Card, CardItem, Container, Text } from "native-base";
import * as React from "react";
import { Image } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";
import screens from "../screens";
import assets from "./images/assets";

export interface Props {
    navigation: any;
}

class MainScreen extends React.Component<Props> {
    public render() {
        const { navigate } = this.props.navigation;
        const arrowForward = <Image
            style={{ width: 15, height: 15, position: "absolute", right: 10 }}
            source={assets.arrowForward} />;
        return (
            <Container>
                <Toolbar />
                <Card>
                    <CardItem button onPress={() => navigate(screens.resources)}>
                        <Text>{translator().resourcesScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.navigation)}>
                        <Text>{translator().navigationScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.list)}>
                        <Text>{translator().listScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.scroll)}>
                        <Text>{translator().scrollScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.grid)}>
                        <Text>{translator().gridScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.camera)}>
                        <Text>{translator().cameraScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.imagePicker)}>
                        <Text>{translator().imagePickerScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.redux)}>
                        <Text>{translator().reduxScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.layouts)}>
                        <Text>{translator().layoutsScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                </Card>
            </Container>
        );
    }
}
export default MainScreen;
