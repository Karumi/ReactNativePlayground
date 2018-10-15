jest.mock("../images/assets", () => {
    return {
        default: {
            arrow: "arrow",
        },
    };
});
import * as React from "react";
import * as renderer from "react-test-renderer";
import Resources from "../Resources";

it("renders correctly with defaults", () => {
    const toolbar = renderer.create(<Resources />).toJSON();
    expect(toolbar).toMatchSnapshot();
});
