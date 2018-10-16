import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { SuperGridSectionList } from "react-native-super-grid";
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
                <SuperGridSectionList
                    itemDimension={130}
                    sections={[
                        {
                            data: [
                                { name: "TURQUOISE", code: "#1abc9c" }, { name: "EMERALD", code: "#2ecc71" },
                                { name: "PETER RIVER", code: "#3498db" }, { name: "AMETHYST", code: "#9b59b6" },
                                { name: "WET ASPHALT", code: "#34495e" }, { name: "GREEN SEA", code: "#16a085" },
                                { name: "NEPHRITIS", code: "#27ae60" },
                            ],
                        },
                        {
                            data: [
                                { name: "WISTERIA", code: "#8e44ad" }, { name: "MIDNIGHT BLUE", code: "#2c3e50" },
                                { name: "SUN FLOWER", code: "#f1c40f" }, { name: "CARROT", code: "#e67e22" },
                                { name: "ALIZARIN", code: "#e74c3c" }, { name: "CLOUDS", code: "#ecf0f1" },
                            ],
                        },
                        {
                            data: [
                                { name: "BELIZE HOLE", code: "#2980b9" }, { name: "CONCRETE", code: "#95a5a6" },
                                { name: "ORANGE", code: "#f39c12" },
                                { name: "PUMPKIN", code: "#d35400" }, { name: "POMEGRANATE", code: "#c0392b" },
                                { name: "SILVER", code: "#bdc3c7" }, { name: "ASBESTOS", code: "#7f8c8d" },
                            ],
                        },
                    ]}
                    style={styles.gridView}
                    renderItem={({ item }) => (
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemCode}>{item.code}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section }) => (
                        <Text style={{ color: "green" }}>{section.title}</Text>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: "flex-end",
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "600",
    },
    itemCode: {
        fontWeight: "600",
        fontSize: 12,
        color: "#fff",
    },
});
export default GridScreen;
