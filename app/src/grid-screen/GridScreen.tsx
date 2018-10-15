import * as React from "react";
import { StyleSheet, View } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";

export interface Props {
    navigation: any;
}
class GridScreen extends React.Component<Props> {
    public render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    title={translator().gridScreenTitle}
                    navigation={this.props.navigation}
                    showBackButton={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
export default GridScreen;
