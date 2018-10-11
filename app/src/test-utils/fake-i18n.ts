
import { I18nResolver } from "i18n-ts";
import en from "../translations/en";

const i18n = { default: en };

jest.mock("../i18n", () => {
return {
        default: () => new I18nResolver(i18n,  "en").translation,
    };
} );
