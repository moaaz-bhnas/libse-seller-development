import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isLocale } from "../translations/types";
import Error from "next/error";

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const { query } = useRouter();
  const [locale, setLocale] = useState(query.lang);

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
      {isLocale(query.lang) ? children : <Error statusCode={404} />}
    </LocaleContext.Provider>
  );
};
