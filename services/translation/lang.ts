import i18n from "i18n-js";
import en from "./locales/en.json";

i18n.translations = {
  en,
};

i18n.locale = "en";
i18n.defaultLocale = "en";

export default (name: string, params = {}) => {
  return i18n.t(name, params);
};
