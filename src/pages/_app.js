import App from "next/app";
import withRedux from "next-redux-wrapper";
import GlobalStyles from "../global.css";
import Provider from "../redux/store";
import { AuthProvider } from "../contexts/auth";
import { LayoutProvider } from "../contexts/layout";
import { store } from "../redux/store";
import Layout from "../components/layout";
import { SellerProvider } from "../contexts/seller";
// import { LanguageProvider } from "../contexts/language";
// import { LocaleProvider } from "../contexts/locale";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <AuthProvider>
        <SellerProvider>
          <LayoutProvider>
            <GlobalStyles />
            {/* <Layout> */}
            <Component {...pageProps} />
            {/* </Layout> */}
          </LayoutProvider>
        </SellerProvider>
      </AuthProvider>
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// Here will be the requests for initial redux state
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const pageProps = await App.getInitialProps(appContext);

//   return { ...pageProps };
// };

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
