import * as React from "react";
import * as renderer from "react-test-renderer";
import "../../test-utils/fake-i18n";
import GridScreen from "../GridScreen";

jest.mock("../../base-components/toolbar/Toolbar", () => {
    return {
        default: "Toolbar",
    };
});

it("renders correctly with defaults", () => {
    const screen = renderer.create(<GridScreen navigation={jest.fn()}/>).toJSON();
    expect(screen).toMatchSnapshot();
});
