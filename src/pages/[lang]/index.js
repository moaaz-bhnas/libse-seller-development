// import PrivateRoute from "../../privateRoute";
import { AddProductButton } from "../../components/button";
import styled from "styled-components";
import { title } from "../../components/title/style";
import ProductsGrid from "../../components/productsGrid";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import withLocale from "../../hocs/withLocale";
import useTranslation from "../../hooks/useTranslation";
import strings from "../../translations/strings/productsPage";
import Layout from "../../components/layout";
import checkAuthInServer from "../../utils/checkAuthInServer";
import getLocaleInServer from "../../utils/getLocaleInServer";
import { LocaleProvider } from "../../contexts/locale";
import { ContentDirectionProvider } from "../../contexts/contentDirection";
// import { withAuthServerSide } from "../../hocs/withAuthServerSide";

export async function getServerSideProps(context) {
  const locale = getLocaleInServer(context);
  const token = await checkAuthInServer(locale, context);

  return {
    props: { locale, token }, // will be passed to the page component as props
  };
}

const ProductsPage = ({ locale, token }) => {
  console.log("locale: ", locale, "token: ", token);
  useFirestoreConnect("products");
  const products = useSelector((state) => state.firestore.ordered.products);
  console.log("products: ", products);

  const { t } = useTranslation();

  return (
    // <LocaleProvider lang={locale}>
    // <ContentDirectionProvider>
    <Layout>
      <AddProductButton />

      <Title>{t(strings, "myProducts")}</Title>

      {products && <ProductsGrid products={products} seller />}
    </Layout>
    // {/* </ContentDirectionProvider> */}
    // {/* </LocaleProvider> */}
  );
};

const Title = styled.h2`
  ${title}
`;

export default ProductsPage;
