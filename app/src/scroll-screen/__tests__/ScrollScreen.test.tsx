import * as React from "react";
import * as renderer from "react-test-renderer";
import "../../test-utils/fake-i18n";
import ScrollScreen from "../ScrollScreen";

jest.mock("../../base-components/toolbar/Toolbar", () => {
    return {
        default: "Toolbar",
    };
});

it("renders correctly with defaults", () => {
    const screen = renderer.create(<ScrollScreen navigation={jest.fn()} />).toJSON();
    expect(screen).toMatchSnapshot();
});
