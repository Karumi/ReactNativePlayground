import React from "react";
import App from "./src/App";
import Sentry from "sentry-expo";
import Expo from "expo";

class ReactNativePlaygroundApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loading: true };
    }

    async componentWillMount() {
        this.initializeSentry();
        await this.initializeNativeBaseFonts();
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        } else {
            return (<App />);
        }

    }

    initializeSentry() {
        Sentry.config('https://b2ba5e1a6cbf4ff79a89291db6ecc3fb@sentry.io/1298369').install();
    }

    initializeNativeBaseFonts() {
        return Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
    }
}

export default ReactNativePlaygroundApp;