import * as React from "react";
import { Image } from "react-native";
import asset from "../assets/asset";

class Resources extends React.Component {
    public render() {
        return (<Image source={asset("./images/arrow.png")} />);
    }
}

export default Resources;
