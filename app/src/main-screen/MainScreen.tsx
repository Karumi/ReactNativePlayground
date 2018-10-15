import { Card, CardItem, Container, Content, Header, Icon, Left, Text } from "native-base";
import * as React from "react";
import { Image } from "react-native";
import assets from "./images/assets";

class MainScreen extends React.Component {
    public render() {
        const arrowForward = <Image
        style={{ width: 15, height: 15, position: "absolute", right: 10 }}
        source={assets.arrowForward} />;
        return (
            <Card>
                <CardItem>
                    <Text>Resources</Text>
                    {arrowForward}
                </CardItem>
                <CardItem>
                    <Text>Navigation</Text>
                    {arrowForward}
                </CardItem>
                <CardItem>
                    <Text>Redux</Text>
                    {arrowForward}
                </CardItem>
                <CardItem>
                    <Text>Layouts</Text>
                    {arrowForward}
                </CardItem>
            </Card>
        );
    }
}
export default MainScreen;
