import withLocale from "../../hocs/withLocale";
import PrivateRoute from "../../privateRoute";
import Layout from "../../components/layout";

const SponsoredProductsPage = () => {
  return (
    <PrivateRoute>
      <Layout>Sponsored page</Layout>
    </PrivateRoute>
  );
};

export default withLocale(SponsoredProductsPage);
