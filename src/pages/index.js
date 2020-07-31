import Banner from "../components/banner";
import Categories from "../components/categories";
import { Container } from "../components/container/style";
import PrivateRoute from "../privateRoute";

const IndexPage = () => {
  return (
    <PrivateRoute>
      <Container>
        <Banner />
        <Categories />
      </Container>
    </PrivateRoute>
  );
};

export default IndexPage;
