import { Button } from "native-base";
import * as React from "react";
import * as renderer from "react-test-renderer";
import showAlertDialog from "../../base-components/alert-dialog/alert";
import screens from "../../screens";
import "../../test-utils/fake-i18n";
import NavigationScreen from "../NavigationScreen";

jest.mock("../../base-components/toolbar/Toolbar", () => {
    return {
        default: "Toolbar",
    };
});

jest.mock("../../base-components/alert-dialog/alert", () => {
    return {
        default: jest.fn(),
    };
});

const navigationWithoutParam = {
    getParam() {
        return null;
    },
};

const navigationWithParam = {
    getParam: jest.fn(),
    navigate: jest.fn(),
    pop: jest.fn(),
};

it("renders correctly with defaults", () => {
    const screen = renderer.create(<NavigationScreen navigation={navigationWithoutParam} />).toJSON();
    expect(screen).toMatchSnapshot();
});

it("renders correctly with a text param passed as argument", () => {
    const anyText = "React native rules";
    givenTheScreenIsOpenWithTextParamEqualTo(anyText);

    const screen = renderer.create(<NavigationScreen navigation={navigationWithParam} />).toJSON();

    expect(screen).toMatchSnapshot();
});

it("opens the resources screen when the user taps on the first button", () => {
    const screen = renderer.create(<NavigationScreen navigation={navigationWithParam} />).root;

    tapOnButtonNumber(screen, 0);

    expect(navigationWithParam.navigate).toHaveBeenCalledWith(screens.resources);
});

it("opens the previous screen when the user taps on the second button", () => {
    const screen = renderer.create(<NavigationScreen navigation={navigationWithParam} />).root;

    tapOnButtonNumber(screen, 1);

    expect(navigationWithParam.pop).toHaveBeenCalled();
});

it("opens the alert dialog when the user taps on the third button", () => {
    const screen = renderer.create(<NavigationScreen navigation={navigationWithParam} />).root;

    tapOnButtonNumber(screen, 2);

    expect(showAlertDialog).toHaveBeenCalled();
});

it("opens the navigation screen in modal mode when the user taps on the fourth button", () => {
    const screen = renderer.create(<NavigationScreen navigation={navigationWithParam} />).root;

    tapOnButtonNumber(screen, 3);

    expect(navigationWithParam.navigate).toHaveBeenCalledWith(screens.navigationModal, { text: "Modal Mode" });
});

function tapOnButtonNumber(screen, buttonIndex: number) {
    screen.findAllByType(Button)[buttonIndex].instance.props.onPress();
}

function givenTheScreenIsOpenWithTextParamEqualTo(text: string) {
    navigationWithParam.getParam.mockReturnValue(text);
}
