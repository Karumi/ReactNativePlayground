
import { Button } from "native-base";
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
});

it("renders correctly with defaults", () => {
    const toolbar = renderer.create(<Toolbar />).toJSON();
    expect(toolbar).toMatchSnapshot();
});

it("renders in back button mode if the showBackButton property is true", () => {
    const toolbar = renderer.create(<Toolbar showBackButton={true} />).toJSON();
    expect(toolbar).toMatchSnapshot();
});

it("overrides the default app title if the title prop is configured", () => {
    const toolbar = renderer.create(<Toolbar title="TEST TITLE" />).toJSON();
    expect(toolbar).toMatchSnapshot();
});

it("navigates back if the back button is tapped", () => {
    const mockNavigation = {
        pop: jest.fn(),
    };
    const toolbar = renderer.create(<Toolbar showBackButton={true} navigation={mockNavigation} />).root;

    const backButton = toolbar.findByType(Button).instance;
    backButton.props.onPress();

    expect(mockNavigation.pop).toHaveBeenCalled();
});
