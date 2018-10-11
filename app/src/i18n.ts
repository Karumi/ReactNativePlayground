import I18n from "ex-react-native-i18n";
import { I18nResolver } from "i18n-ts";
import en from "./translations/en";
import es from "./translations/es";

I18n.initAsync();
I18n.fallbacks = true;

const i18n = {
    en,
    es,
    default: en,
 };

let i18nResolver = null;

const translator = () => {
    if (i18nResolver === null) {
        i18nResolver = new I18nResolver(i18n,  I18n.locale).translation;
    }
    return i18nResolver;
};
export default translator;
