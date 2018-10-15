import { Alert } from "react-native";

const showAlertDialog = (title, subtitle, buttons, config) => {
    Alert.alert(title, subtitle, buttons, config);
};

export default showAlertDialog;
