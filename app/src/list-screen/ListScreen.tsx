import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Toolbar from "../base-components/toolbar/Toolbar";
import translator from "../i18n";

export interface Props {
    navigation: any;
}
class ListScreen extends React.Component<Props> {
    public render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    title={translator().listScreenTitle}
                    navigation={this.props.navigation}
                    showBackButton={true}
                />
                <FlatList
                    data={[
                        { key: "Devin" },
                        { key: "Jackson" },
                        { key: "James" },
                        { key: "Joel" },
                        { key: "John" },
                        { key: "Jillian" },
                        { key: "Jimmy" },
                        { key: "Julie" },
                        { key: "1 Devin" },
                        { key: "1 Jackson" },
                        { key: "1 James" },
                        { key: "1 Joel" },
                        { key: "1 John" },
                        { key: "1 Jillian" },
                        { key: "1 Jimmy" },
                        { key: "1 Julie" },
                        { key: "2 Devin" },
                        { key: "2 Jackson" },
                        { key: "2 James" },
                        { key: "2 Joel" },
                        { key: "2 John" },
                        { key: "2 Jillian" },
                        { key: "2 Jimmy" },
                        { key: "2 Julie" },
                        { key: "3 Devin" },
                        { key: "3 Jackson" },
                        { key: "3 James" },
                        { key: "3 Joel" },
                        { key: "3 John" },
                        { key: "3 Jillian" },
                        { key: "3 Jimmy" },
                        { key: "3 Julie" },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
export default ListScreen;
