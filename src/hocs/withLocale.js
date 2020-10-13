import React from "react";
import Error from "next/error";
import { LocaleProvider } from "../contexts/locale";
import { getDisplayName } from "next/dist/next-server/lib/utils";
import { ContentDirectionProvider } from "../contexts/contentDirection";

const PageWithLocale = (WrappedPage) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      console.log("test");
      return <Error statusCode={404} />;
    }
    return (
      <LocaleProvider lang={locale}>
        <ContentDirectionProvider>
          <WrappedPage {...pageProps} />
        </ContentDirectionProvider>
      </LocaleProvider>
    );
  };

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};

export default PageWithLocale;
