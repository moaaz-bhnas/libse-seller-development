import { AddProductButton } from "../../components/button";
import styled from "styled-components";
import { title } from "../../components/title/style";
import ProductsGrid from "../../components/productsGrid";
import { useSelector } from "react-redux";
import useTranslation from "../../hooks/useTranslation";
import strings from "../../translations/strings/productsPage";
import Layout from "../../components/layout";
import checkAuthInServer from "../../utils/checkAuthInServer";
import getLocaleInServer from "../../utils/getLocaleInServer";
import { setProducts } from "../../redux/actions/productActions";
import { wrapper } from "../../redux/store";

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const locale = getLocaleInServer(context);
    const token = await checkAuthInServer(locale, context);
    const { dispatch } = context.store;
    await dispatch(setProducts(token.uid)); // async firestore request
  }
);

const ProductsPage = () => {
  const { products } = useSelector((state) => state.product);

  const { t } = useTranslation();

  return (
    <Layout>
      <AddProductButton />

      <Title>{t(strings, "myProducts")}</Title>

      {products && <ProductsGrid products={products} seller />}
    </Layout>
  );
};

const Title = styled.h2`
  ${title}
`;

export default ProductsPage;
