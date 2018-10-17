import { Card, CardItem, Container, Text } from "native-base";
import * as React from "react";
import { Image, ScrollView } from "react-native";
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
                <ScrollView>
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
                    <CardItem button onPress={() => navigate(screens.mapScreen)}>
                        <Text>{translator().mapScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.lottieScreen)}>
                        <Text>{translator().lottieScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.customComponentsScreen)}>
                        <Text>{translator().customComponentScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.layouts)}>
                        <Text>{translator().layoutsScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                    <CardItem button onPress={() => navigate(screens.reactRedux)}>
                        <Text>{translator().reduxScreenTitle}</Text>
                        {arrowForward}
                    </CardItem>
                </Card>
                </ScrollView>
            </Container>
        );
    }
}
export default MainScreen;
