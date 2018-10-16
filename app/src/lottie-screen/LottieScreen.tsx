import { DangerZone } from "expo";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
const { Lottie } = DangerZone;

export default class App extends React.Component {
    private animation = null;
    public state = {
        animation: null,
    };
    

    public componentWillMount() {
        this.playAnimation();
    }

    public render() {
        return (
            <View style={styles.animationContainer}>
                {this.state.animation &&
                    <Lottie
                        ref={(animation) => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 400,
                            height: 400,
                            backgroundColor: "#eee",
                        }}
                        source={this.state.animation}
                    />}
                <View style={styles.buttonContainer}>
                    <Button title="Restart Animation" onPress={this.playAnimation} />
                </View>
            </View>
        );
    }

    private playAnimation = () => {
        if (!this.state.animation) {
            this.loadAnimationAsync();
        } else {
            this.animation.reset();
            this.animation.play();
        }
    }

    private loadAnimationAsync = async () => {
        const result = await fetch(
            "https://cdn.rawgit.com/airbnb/lottie-react-native/" +
            "635163550b9689529bfffb77e489e4174516f1c0/example/animations/Watermelon.json",
        )
            .then((data) => {
                return data.json();
            });
        this.setState({ animation: result }, this.playAnimation);
    }
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});
