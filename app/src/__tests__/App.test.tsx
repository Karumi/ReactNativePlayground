import * as React from "react";
import * as renderer from "react-test-renderer";

import App from "../App";

it("renders correctly with defaults", () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
});
