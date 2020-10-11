import { useContext } from "react";
import { LocaleContext } from "../contexts/locale";
import { defaultLocale } from "../translations/config";

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);

  function t(strings, key) {
    console.log("strings: ", strings, "key: ", key);
    if (!strings[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return strings[locale][key] || strings[defaultLocale][key] || "";
  }

  return { t, locale };
}
