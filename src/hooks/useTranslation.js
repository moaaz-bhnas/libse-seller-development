import { useContext } from "react";
import { LocaleContext } from "../contexts/locale";
import strings from "../translations/strings";
import { defaultLocale } from "../translations/config";

export default function useTranslation() {
  console.log(LocaleContext);
  const { locale } = useContext(LocaleContext);

  function t(key) {
    if (!strings[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return strings[locale][key] || strings[defaultLocale][key] || "";
  }

  return { t, locale };
}
