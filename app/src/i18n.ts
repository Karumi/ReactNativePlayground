import I18n from "ex-react-native-i18n";
import { I18nResolver } from "i18n-ts";
import en from "./translations/en";
import es from "./translations/es";

const i18n = {
    en,
    es,
    default: en,
 };

const messages = new I18nResolver(i18n,  I18n.locale).translation;
export default messages;
