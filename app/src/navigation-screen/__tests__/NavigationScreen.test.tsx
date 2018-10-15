import * as React from "react";
import * as renderer from "react-test-renderer";
import "../../test-utils/fake-i18n";
import NavigationScreen from "../NavigationScreen";

jest.mock("../../base-components/toolbar/Toolbar", () => {
    return {
        default: "Toolbar",
    };
});

const navigationWithoutParam = {
    getParam() {
        return null;
    },
};

const navigationWithParam = {
    getParam: jest.fn(),
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

function givenTheScreenIsOpenWithTextParamEqualTo(text: string) {
    navigationWithParam.getParam.mockReturnValue(text);
}
