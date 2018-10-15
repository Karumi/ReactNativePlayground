import * as React from "react";
import * as renderer from "react-test-renderer";
import App from "../App";

jest.mock("../base-components/Toolbar", () => {
    return {
      default: "Toolbar",
    };
} );

jest.mock("../main-screen/MainScreen", () => {
    return {
        default: "MainScreen",
    };
});

it("renders correctly with defaults", () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
});
