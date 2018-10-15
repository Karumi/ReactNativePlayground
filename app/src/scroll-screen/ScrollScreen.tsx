import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";

export interface Props {
    navigation: any;
}
class ScrollScreen extends React.Component<Props> {
    public render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    title={translator().scrollScreenTitle}
                    navigation={this.props.navigation}
                    showBackButton={true}
                />
                <ScrollView>
                    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Text style={{ fontSize: 96 }}>If you like</Text>
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Text style={{ fontSize: 96 }}>What's the best</Text>
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Text style={{ fontSize: 96 }}>Framework around?</Text>
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Image source={{
                        uri: "https://facebook.github.io/react-native/img/favicon.png",
                        width: 64, height: 64,
                    }} />
                    <Text style={{ fontSize: 80 }}>React Native</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default ScrollScreen;
