import * as React from "react";
import * as renderer from "react-test-renderer";
import "../../test-utils/fake-i18n";
import ResourcesScreen from "../ResourcesScreen";

jest.mock("../images/assets", () => {
    return {
        default: {
            arrow: "arrow",
            anyAsset: "any-asset",
        },
    };
});

jest.mock("../../base-components/toolbar/Toolbar", () => {
    return {
        default: "Toolbar",
    };
});

it("renders correctly with defaults", () => {
    const screen = renderer.create(<ResourcesScreen navigation={jest.fn()}/>).toJSON();
    expect(screen).toMatchSnapshot();
});
