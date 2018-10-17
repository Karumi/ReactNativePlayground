import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";

export interface Props {
    navigation: any;
}
class LayoutScreen extends React.Component<Props> {

    public render() {
        return (
            <ScrollView>
                <Toolbar
                    title={translator().layoutsScreenTitle}
                    navigation={this.props.navigation}
                    showBackButton={true}
                />
                <Text style={styles.textStyle}>My text</Text>
                <View style={styles.viewContainerStyle}>
                    <Text>CENTERED</Text>
                </View>
                <View style={styles.verticalAlignContainerStyle}>
                    <Text>BOTTOM</Text>
                </View>
                <View style={styles.horizontalAlignContainerStyle}>
                    <Text>RIGHT</Text>
                </View>
                <View style={styles.containerWithShadowStyle}>
                    <Text>RIGHT</Text>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: "https://randomuser.me/api/portraits/women/82.jpg" }} />
                    </View>
                    <View style={styles.textInfoContainer}>
                        <Text>Name</Text>
                        <Text>Surname</Text>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
    },
    viewContainerStyle: {
        backgroundColor: "#F8F8F8",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    verticalAlignContainerStyle: {
        backgroundColor: "#CECECE",
        height: 60,
        justifyContent: "flex-end",
    },
    horizontalAlignContainerStyle: {
        backgroundColor: "#F8F8F8",
        height: 60,
        alignItems: "flex-end",
    },
    containerWithShadowStyle: {
        backgroundColor: "#F8F8F8",
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative",
    },
    cardContainer: {
        flexDirection: "row",
        backgroundColor: "#CECECE",
    },
    avatarContainer: {
        width: "35%",
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: "#000",
    },
    avatar: {
        width: 80,
        height: 80,
        margin: 5,
    },
    textInfoContainer: {
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
});

export default LayoutScreen;
