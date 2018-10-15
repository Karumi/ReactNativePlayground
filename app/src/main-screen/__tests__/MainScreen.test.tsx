import * as React from "react";
import * as renderer from "react-test-renderer";
import "../../test-utils/fake-i18n";
import MainScreen from "../MainScreen";

jest.mock("../images/assets", () => {
    return {
        default: {
            arrowForward: "arrowForward",
        },
    };
});

jest.mock("../../base-components/toolbar/Toolbar", () => {
    return {
        default: "Toolbar",
    };
});

it("renders correctly with defaults", () => {
    const toolbar = renderer.create(<MainScreen navigation={jest.fn()}/>).toJSON();
    expect(toolbar).toMatchSnapshot();
});
