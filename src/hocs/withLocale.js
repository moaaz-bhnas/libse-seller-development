import React from "react";
import Error from "next/error";
import { isLocale } from "../translations/types";
import { LocaleProvider } from "../context/LocaleContext";
import { getDisplayName } from "next/dist/next-server/lib/utils";

export default (WrappedPage) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Error statusCode={404} />;
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.getInitialProps = async (ctx) => {
    let pageProps = {};
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }
    if (typeof ctx.query.lang !== "string" || !isLocale(ctx.query.lang)) {
      return { ...pageProps, locale: null };
    }
    return { ...pageProps, locale: ctx.query.lang };
  };

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};
