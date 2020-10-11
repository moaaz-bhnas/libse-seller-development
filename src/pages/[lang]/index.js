import PrivateRoute from "../../privateRoute";
import { AddProductButton } from "../../components/button";
import styled from "styled-components";
import { title } from "../../components/title/style";
import ProductsGrid from "../../components/productsGrid";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import withLocale from "../../hocs/withLocale";
import useTranslation from "../../hooks/useTranslation";
import strings from "../../translations/strings/productsPage";

const ProductsPage = () => {
  useFirestoreConnect("products");
  const products = useSelector((state) => state.firestore.ordered.products);
  console.log("products: ", products);

  const { t } = useTranslation();

  return (
    <PrivateRoute>
      <AddProductButton />

      <Title>{t(strings, "myProducts")}</Title>

      {products && <ProductsGrid products={products} seller />}
    </PrivateRoute>
  );
};

const Title = styled.h2`
  ${title}
`;

export default withLocale(ProductsPage);
