import { Button } from "native-base";
import * as React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Toolbar from "../../base-components/toolbar/Toolbar";
import translator from "../../i18n";
import { RootAction, RootState } from "../../redux/store";
import { add, decrement, increment } from "../actions";

interface Props {
    navigation?: any;
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onAdd: (n: number) => void;
}
class ReactReduxScreen extends React.Component<Props> {
    public render() {
        const buttonStyle = { width: 40, margin: 10 };
        return (
            <View>
                <Toolbar
                    title={translator().reactReduxScreenTitle}
                    navigation={this.props.navigation}
                    showBackButton={true}
                />
                <Button style={buttonStyle} onPress={() => this.props.onIncrement()}>
                    <Text>
                        +
                    </Text>
                </Button>
                <Button style={buttonStyle} onPress={() => this.props.onAdd(2)}>
                    <Text>
                        ++
                    </Text>
                </Button>
                <Button style={buttonStyle} onPress={() => this.props.onAdd(3)}>
                    <Text>
                        +++
                    </Text>
                </Button>
                <Button style={buttonStyle} onPress={() => this.props.onDecrement()}>
                    <Text>
                        -
                    </Text>
                </Button>
                <Text>{this.props.count}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    count: state.counter.reduxCounter,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
    onIncrement: increment,
    onAdd: add,
    onDecrement: decrement,

}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxScreen);
