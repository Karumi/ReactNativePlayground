
import { ImagePicker, Permissions } from "expo";
import { Button } from "native-base";
import * as React from "react";
import { Image, Text, View } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";

export interface Props {
    navigation: any;
}
class ImagePickerScreen extends React.Component<Props> {
    public state = {
        image: null,
    };

    public render() {
        return (
            <View >
                <Toolbar
                    title={translator().imagePickerScreenTitle}
                    navigation={this.props.navigation}
                    showBackButton={true}
                />
                <Button style={{ margin: 10, padding: 5 }} onPress={() => this.pickImageFromCamera()} >
                    <Text>{translator().pickImageFromCameraButton}</Text>
                </Button>
                <Button style={{ margin: 10, padding: 5 }} onPress={() => this.pickImageFromLibrary()} >
                    <Text>{translator().pickImageFromGalleryButton}</Text>
                </Button>
                {this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
            </View>
        );
    }

    private async pickImageFromLibrary() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === "granted") {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
        }
    }

    private async pickImageFromCamera() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status === "granted") {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
        }
    }
}

export default ImagePickerScreen;
