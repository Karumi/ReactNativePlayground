import * as React from "react";
import { Image } from "react-native";
import assets from "./images/assets";

class Resources extends React.Component {
    public render() {
        return (<Image source={assets.arrow} />);
    }
}

export default Resources;
