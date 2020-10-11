import React from "react";
import Error from "next/error";
import { isLocale } from "../translations/types";
import { LocaleProvider } from "../contexts/locale";
import { getDisplayName } from "next/dist/next-server/lib/utils";
import { ContentDirectionProvider } from "../contexts/contentDirection";

const PageWithLocale = (WrappedPage) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Error statusCode={404} />;
    }
    console.log("withLocale: ", "lang: ", locale);
    return (
      <LocaleProvider lang={locale}>
        <ContentDirectionProvider>
          <WrappedPage {...pageProps} />
        </ContentDirectionProvider>
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

export default PageWithLocale;
