import PrivateRoute from "../privateRoute";
import { AddProductButton } from "../components/button";
import styled from "styled-components";
import { title } from "../components/title/style";
import ProductsGrid from "../components/productsGrid";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  useFirestoreConnect("products");
  const products = useSelector((state) => state.firestore.ordered.products);
  console.log("products: ", products);

  return (
    <PrivateRoute>
      <AddProductButton />

      <Title>My Products</Title>

      {products && <ProductsGrid products={products} seller />}
    </PrivateRoute>
  );
};

const Title = styled.h2`
  ${title}
`;

export default ProductsPage;
