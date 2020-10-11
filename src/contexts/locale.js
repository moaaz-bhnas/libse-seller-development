import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isLocale } from "../translations/types";
import Error from "next/error";

export const LocaleContext = createContext();

export const LocaleProvider = ({ lang, children }) => {
  const { query } = useRouter();
  const [locale, setLocale] = useState(lang);
  console.log("LocaleProvider - locale: ", locale);

  useEffect(() => {
    if (locale !== localStorage.getItem("locale")) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      locale !== query.lang
    ) {
      setLocale(query.lang);
    }
  }, [query.lang]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
