import { Camera, Permissions } from "expo";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";

export interface Props {
    navigation: any;
}
class CameraScreen extends React.Component<Props> {
    public state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    public async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === "granted" });
    }

    public render() {
        const { hasCameraPermission } = this.state;
        const toolbar = <Toolbar
            title={translator().cameraScreenTitle}
            navigation={this.props.navigation}
            showBackButton={true}
        />;
        if (hasCameraPermission === null) {
            return toolbar;
        } else if (hasCameraPermission === false) {
            return (<View>
                {toolbar}
                <Text>¯\_(ツ)_/¯</Text>;
                </View>);
        } else {
            return (
                <View style={{ flex: 1 }}>
                    {toolbar}
                    <Camera style={{ flex: 1 }} type={this.state.type}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: "transparent",
                                flexDirection: "row",
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: "flex-end",
                                    alignItems: "center",
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Text
                                    style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                                    {" "}Flip{" "}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

export default CameraScreen;
