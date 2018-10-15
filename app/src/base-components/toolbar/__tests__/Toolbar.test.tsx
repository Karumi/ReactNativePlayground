
import * as React from "react";
import * as renderer from "react-test-renderer";
import "../../../test-utils/fake-i18n";
import Toolbar from "../Toolbar";

jest.mock("../images/assets", () => {
    return {
      default: {
        arrowBack: "arrowBack",
      },
    };
} );

it("renders correctly with defaults", () => {
    const toolbar = renderer.create(<Toolbar />).toJSON();
    expect(toolbar).toMatchSnapshot();
});
