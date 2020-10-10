import { defaultLocale } from "./config";
import { isLocale } from "./types";

export function getInitialLocale() {
  const localSetting = localStorage.getItem("locale");
  if (localSetting && isLocale(localSetting)) {
    console.log(localSetting);
    return localSetting;
  }

  const [browserSetting] = navigator.language.split("-");
  if (isLocale(browserSetting)) {
    console.log(browserSetting);
    return browserSetting;
  }

  return defaultLocale;
}
