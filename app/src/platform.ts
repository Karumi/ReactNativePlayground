import { Platform } from "react-native";

export function ios(): boolean {
    return Platform.OS === "ios";
}
