import * as React from "react";
import * as renderer from "react-test-renderer";
import "../../test-utils/fake-i18n";
import ResourcesScreen from "../ResourcesScreen";

jest.mock("../images/assets", () => {
    return {
        default: {
            arrow: "arrow",
        },
    };
});

jest.mock("../../base-components/toolbar/Toolbar", () => {
    return {
        default: "Toolbar",
    };
});

it("renders correctly with defaults", () => {
    const toolbar = renderer.create(<ResourcesScreen navigation={jest.fn()}/>).toJSON();
    expect(toolbar).toMatchSnapshot();
});
