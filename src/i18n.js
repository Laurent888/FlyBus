import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-xhr-backend";

i18n
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en",

    keySeparator: ".", // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
